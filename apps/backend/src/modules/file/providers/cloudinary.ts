import { 
  AbstractFileProviderService,
} from "@medusajs/framework/utils"
import { 
  FileProviderUploadFileDTO, 
  FileProviderGetResultDTO,
  ProviderFileContext
} from "@medusajs/framework/types"
import { v2 as cloudinary } from "cloudinary"

type CloudinaryOptions = {
  cloud_name: string
  api_key: string
  api_secret: string
  secure?: boolean
}

class CloudinaryFileProviderService extends AbstractFileProviderService {
  static identifier = "cloudinary"
  protected options_: CloudinaryOptions

  constructor(container: any, options: CloudinaryOptions) {
    super(container, options)
    this.options_ = options

    cloudinary.config({
      cloud_name: options.cloud_name,
      api_key: options.api_key,
      api_secret: options.api_secret,
      secure: options.secure ?? true,
    })
  }

  async upload(
    file: FileProviderUploadFileDTO,
    context?: ProviderFileContext
  ): Promise<FileProviderGetResultDTO> {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          resource_type: "auto",
          folder: "medusa-products",
          public_id: file.filename.split(".")[0],
        },
        (error, result) => {
          if (error) {
            return reject(error)
          }
          resolve({
            url: result!.secure_url,
            key: result!.public_id,
          })
        }
      )

      uploadStream.end(Buffer.from(file.content, "binary"))
    })
  }

  async delete(file: { key: string }): Promise<void> {
    return new Promise((resolve, reject) => {
      cloudinary.uploader.destroy(file.key, (error, result) => {
        if (error) {
          return reject(error)
        }
        resolve()
      })
    })
  }

  async getPresignedDownloadUrl(file: { key: string }): Promise<string> {
    return cloudinary.url(file.key, { secure: true })
  }
}

export default CloudinaryFileProviderService

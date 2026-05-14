import { defineMiddlewares } from "@medusajs/framework/utils"
import express from "express"
import path from "path"

export default defineMiddlewares({
  routes: [
    {
      matcher: "/static*",
      middlewares: [
        express.static(path.join(process.cwd(), "static"))
      ],
    },
  ],
})

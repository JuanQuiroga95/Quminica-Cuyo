import { clx, Button as MedusaButton } from "@medusajs/ui"
type ButtonProps = React.ComponentProps<typeof MedusaButton>

const Button = ({
  children,
  className: classNameProp,
  ...props
}: ButtonProps): React.ReactNode => {
  const variant = props.variant ?? "primary"

  const hasCustomBg = /(^|\s)(bg-|from-)/.test(classNameProp ?? "")
  const hasCustomText = /(^|\s)text-/.test(classNameProp ?? "")

  const className = clx(
    {
      "!shadow-borders-base !border-none":
        variant === "secondary" || props.disabled,
      "!shadow-none": variant === "primary" && !props.disabled,
      "bg-neutral-900":
        variant === "primary" && !props.disabled && !hasCustomBg,
      "text-white":
        variant === "primary" && !props.disabled && !hasCustomText,
      "!shadow-none bg-transparent text-neutral-900":
        variant === "transparent",
    },
    classNameProp
  )

  return (
    <MedusaButton
      className={`!rounded-full text-sm font-normal ${className}`}
      variant={variant}
      {...props}
    >
      {children}
    </MedusaButton>
  )
}

export default Button

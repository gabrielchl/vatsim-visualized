import { cx } from "class-variance-authority"
import { AnchorHTMLAttributes, FC, PropsWithChildren } from "react"

export const StyledLink: FC<PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>> = ({ children, className, ...props }) => (
  <a className={cx("text-blue-500 hover:underline", className)} {...props}>{children}</a>
)
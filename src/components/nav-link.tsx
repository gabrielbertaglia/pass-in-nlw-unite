import { ComponentProps } from "react";

interface NavLinkProps extends ComponentProps<"a"> {
  children: React.ReactNode;
}

export function NavLink({ children, ...props }: NavLinkProps) {
  return (
    <a className="font-medium text-sm" {...props}>
      {children}
    </a>
  );
}
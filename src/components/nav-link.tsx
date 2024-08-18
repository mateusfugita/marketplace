import { Link, LinkProps, useLocation } from 'react-router-dom'

export type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps) {
  const { pathname } = useLocation()
  return (
    <Link
      data-current={pathname === props.to}
      className="flex items-center gap-1.5 text-sm text-gray-300 px-4 py-3 rounded-lg hover:text-orange-base data-[current=true]:text-orange-base data-[current=true]:font-medium data-[current=true]:bg-shape"
      {...props}
    />
  )
}
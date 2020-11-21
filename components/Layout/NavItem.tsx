import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface Props {
  children: React.ReactNode
  href: string
}

const NavItem = ({ children, href }: Props) => {
  const router = useRouter()

  const activeLinkClass = () => {
    if (router.pathname === href) {
      return 'text-white bg-gray-900'
    } else {
      return 'text-gray-300 hover:text-white hover:bg-gray-700'
    }
  }

  return (
    <Link href={href}>
      <a
        className={`${activeLinkClass()} mt-1 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md focus:outline-none focus:text-white focus:bg-gray-700 transition ease-in-out duration-150`}
      >
        {children}
      </a>
    </Link>
  )
}

export default NavItem

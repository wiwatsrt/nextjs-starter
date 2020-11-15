import React from 'react'
import { SidebarLinkItem } from './SidebarLinkItem'

type link = {
  name: string
  url: string
}

const links: link[] = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'Dashboard',
    url: '/dashboard',
  },
]
export const SidebarLink = () => {
  const linkItems = links.map((link) => {
    return (
      <SidebarLinkItem href={link.url} key={link.name}>
        {link.name}
      </SidebarLinkItem>
    )
  })

  return <div>{linkItems}</div>
}

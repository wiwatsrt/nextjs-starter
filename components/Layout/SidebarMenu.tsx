import React from 'react'
import Logo from './Logo'

interface Props {
  children: React.ReactNode
}

const SidebarMenu = ({ children }: Props) => {
  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900">
          <Logo />
        </div>
        <div className="h-0 flex-1 flex flex-col overflow-y-auto">
          <nav className="flex-1 px-2 py-4 bg-gray-800">{children}</nav>
        </div>
      </div>
    </div>
  )
}

export default SidebarMenu

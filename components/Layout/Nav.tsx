import React from 'react'

interface Props {
  children: React.ReactNode
}

const Nav = ({ children }: Props) => {
  return <nav className="flex-1 px-2 py-4 bg-gray-800">{children}</nav>
}

export default Nav

import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Nav from './Nav'
import NavItem from './NavItem'
import Sidebar from './Sidebar'

interface Props {
  children: React.ReactNode
  header?: string
}
interface NavLink {
  name: string
  url: string
}

const AppLayout = ({ children, header }: Props) => {
  const navLinks: NavLink[] = [
    {
      name: 'Home',
      url: '/',
    },
  ]

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Head>
        <title>{header} - Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar>
        <Nav>
          {navLinks.map((link) => (
            <NavItem href={link.url} key={link.url}>
              {link.name}
            </NavItem>
          ))}
        </Nav>
      </Sidebar>
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header></Header>
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <div className="pt-2 pb-6 md:py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h2 className="text-2xl font-semibold text-gray-900">{header}</h2>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default AppLayout

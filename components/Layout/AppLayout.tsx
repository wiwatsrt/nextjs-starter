import React, { useState } from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import SidebarMenu from './SidebarMenu'
import SidebarMenuItem from './SidebarMenuItem'
import NavbarToggleMobileMenu from './NavbarToggleMobileMenu'
import SidebarMobileMenu from './SidebarMobileMenu'

interface Props {
  children: React.ReactNode
  headerTitle?: string
}
interface SidebarMenu {
  name: string
  url: string
}

const AppLayout = ({ children, headerTitle }: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)

  const hideSidebar = () => {
    setIsSidebarOpen(false)
  }
  const showSidebar = () => {
    setIsSidebarOpen(true)
  }

  const allLinks: SidebarMenu[] = [
    {
      name: 'Home',
      url: '/',
    },
  ]

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Head>
        <title>{headerTitle} - Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SidebarMobileMenu
        isSidebarOpen={isSidebarOpen}
        onHideSidebar={hideSidebar}
      >
        {allLinks.map((link) => (
          <SidebarMenuItem href={link.url} key={link.url}>
            {link.name}
          </SidebarMenuItem>
        ))}
      </SidebarMobileMenu>
      <SidebarMenu>
        {allLinks.map((link) => (
          <SidebarMenuItem href={link.url} key={link.url} textSize="sm">
            {link.name}
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar>
          <NavbarToggleMobileMenu onClick={showSidebar} />
        </Navbar>
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <div className="pt-2 pb-6 md:py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h2 className="text-2xl font-semibold text-gray-900">
                {headerTitle}
              </h2>
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

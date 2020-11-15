import React from 'react'
import Sidebar from './Sidebar'

interface Props {
  children: React.ReactNode
  header?: string
}

const AppLayout = ({ children, header }: Props) => {
  return (
    <div>
      <div className="h-screen flex overflow-hidden bg-gray-100">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          {/* <Navbar /> */}
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
            <div className="pt-2 pb-6 md:py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h2 className="text-2xl font-semibold text-gray-900">
                  {header}
                </h2>
              </div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {children}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default AppLayout

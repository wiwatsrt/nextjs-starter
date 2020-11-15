import React from 'react'
import { SidebarLink } from './SidebarLink'

interface Props {}

const Sidebar = (props: Props) => {
  return (
    <>
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/v1/workflow-mark-on-dark.svg"
              alt="Workflow"
            />
          </div>
          <div className="h-0 flex-1 flex flex-col overflow-y-auto">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <nav className="flex-1 px-2 py-4 bg-gray-800">
              <SidebarLink />
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar

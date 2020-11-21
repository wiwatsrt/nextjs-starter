import React from 'react'

interface Props {
  children: React.ReactNode
}

const Sidebar = ({ children }: Props) => {
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
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar

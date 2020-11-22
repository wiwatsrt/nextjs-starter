import React from 'react'
import { Transition } from '@headlessui/react'
import Logo from './Logo'

interface Props {
  children: React.ReactNode
  isSidebarOpen: boolean
  onHideSidebar: () => void
}

const SidebarMobileMenu = ({
  children,
  isSidebarOpen,
  onHideSidebar,
}: Props) => {
  return (
    <Transition show={isSidebarOpen} appear={true}>
      <div className="md:hidden">
        <div className="fixed inset-0 flex z-40">
          <Transition.Child
            className="fixed inset-0"
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="absolute inset-0 bg-gray-600 opacity-75" />
          </Transition.Child>
          <Transition.Child
            className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-800"
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="absolute top-0 right-0 -mr-14 p-1">
              <button
                onClick={onHideSidebar}
                className="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
                aria-label="Close sidebar"
              >
                <svg
                  className="h-6 w-6 text-white"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-shrink-0 flex items-center px-4">
              <Logo />
            </div>
            <div className="mt-4 flex-1 h-0 overflow-y-auto">
              <nav className="px-2">{children}</nav>
            </div>
          </Transition.Child>
        </div>
      </div>
    </Transition>
  )
}

export default SidebarMobileMenu

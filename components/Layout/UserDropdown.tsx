import React from 'react'
import { useRouter } from 'next/router'
import { Menu, Transition } from '@headlessui/react'
import { useAuth } from '../../context/authContext'

export const UserDropdown = () => {
  const { signOut } = useAuth()
  const router = useRouter()

  const handleClickSignOut = (event) => {
    event.preventDefault()

    signOut().then(() => {
      router.push('/login')
    })
  }

  return (
    <div className="relative">
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button className="flex items-center rounded-full focus:outline-none focus:shadow-focus">
              <img
                className="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </Menu.Button>
            <Transition
              show={open}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="w-56 mt-2 origin-top-right absolute right-0 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#support"
                        className={`${
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                        } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left focus:outline-none`}
                      >
                        Your Profile
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#support"
                        className={`${
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                        } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left focus:outline-none`}
                      >
                        Settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#signOut"
                        onClick={handleClickSignOut}
                        className={`${
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                        } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left focus:outline-none`}
                      >
                        Sign out
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  )
}

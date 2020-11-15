import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useAuth } from '../context/authContext'

const LoginPage = () => {
  const router = useRouter()
  const { auth, signInWithEmailAndPassword } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (auth) {
      router.push('/')
    }
  }, [auth])

  const handleSubmit = async (e: ChangeEvent<any>) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(email, password)
      router.push('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <Head>
        <title>Login Page</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow rounded-lg p-8"
          >
            <h2 className="mb-6 uppercase text-center text-3xl leading-9 font-medium text-gray-900">
              Login
            </h2>
            <div className="mb-4">
              <label
                className="block mb-2 font-bold text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                className="form-input mt-1 block w-full"
                type="email"
                value={email}
                autoComplete="email"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block mb-2 font-bold text-gray-700"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                className="form-input mt-1 block w-full"
                type="password"
                value={password}
                autoComplete="current-password"
                required
              />
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  v-model="form.rememberMe"
                  className="form-checkbox"
                  type="checkbox"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:text-primary-500 focus:outline-none focus:underline"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="button button-primary w-full transition duration-150 ease-in-out"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage

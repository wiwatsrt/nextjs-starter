import cookies from 'js-cookie'
import { AuthUser } from '../../types'

export const getUserFromCookie = (): JSON | void => {
  const cookie = cookies.get('auth')
  if (!cookie) {
    return
  }
  return JSON.parse(cookie)
}

export const setAuthCookie = (auth: AuthUser): void => {
  cookies.set('auth', auth, {
    expires: 1,
  })
}

export const removeAuthCookie = (): void => cookies.remove('auth')

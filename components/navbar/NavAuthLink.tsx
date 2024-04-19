
import React from 'react'
import NavLink from './NavLink'
import { Links } from './Links'
import { handleLogout } from '@/lib/actions'

const NavAuthLink = async (session: any) => {
  return (
    <>
      <NavLink items={Links} />
      {
        session?.user ? (
          <>
            {session.user?.isAdmin && <NavLink items={[{ title: 'Admin', path: '/admin' }]} />}
            <form action={handleLogout}>
              <button className='hover:text-red-500'>Logout</button>
            </form>
          </>
        ) : (
          <>
            <NavLink items={[{ title: 'Login', path: '/login' }]} />
            {!session?.user && <NavLink items={[{ title: 'Register', path: '/register' }]} />}
          </>
        )
      }
    </>
  )
}

export default NavAuthLink
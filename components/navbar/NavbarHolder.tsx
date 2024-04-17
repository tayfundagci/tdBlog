import React from 'react'
import Navbar from './Navbar'
import { auth } from '@/lib/auth'

const NavbarHolder = async () => {
  const session = await auth();
  return (
    <Navbar session={session} />
  )
}

export default NavbarHolder
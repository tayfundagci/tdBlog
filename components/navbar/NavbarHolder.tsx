import React from 'react'
import Navbar from './Navbar'
import { auth } from '@/lib/auth'

const NavbarHolder = async () => {
  const session = await auth();
  console.log("SESSION", session)
  return (
    <Navbar session={session} />
  )
}

export default NavbarHolder
"use client"
import Link from 'next/link'
import React from 'react'
import { Links } from './Links'
import NavLink from './NavLink'
import { BottomSheet } from 'react-spring-bottom-sheet'
import 'react-spring-bottom-sheet/dist/style.css'
import { handleLogout } from '@/lib/actions'
import { auth } from '@/lib/auth'
import { Session } from 'next-auth'
import NavAuthLink from './NavAuthLink'


const Navbar = ({ session }: { session: any }) => {
  const [open, setOpen] = React.useState<boolean>(false);
  console.log("sessionn", session)


  return (
    <div className='h-24 flex justify-between items-center'>
      <div className='left font-bold text-lg'>
        <Link href='/'>TD BLOG</Link>
      </div>
      <div className='right'>
        <div className='hidden md:block'>
          <div className=' flex gap-4 '>
            {NavAuthLink(session)}
          </div>
        </div>
        <div className='block md:hidden'>
          <button
            onClick={() => setOpen(!open)} className='text-2xl font-bold'>☰</button>
          <BottomSheet open={open} onDismiss={() => setOpen(false)} >
            <div className='flex flex-col gap-4 text-center py-4 bg-bgsecondary' >
              {NavAuthLink(session)}
            </div>
          </BottomSheet>
        </div>
      </div>
    </div>
  )
}

export default Navbar
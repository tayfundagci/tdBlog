"use client"
import Link from 'next/link'
import React from 'react'
import { Links } from './Links'
import { usePathname } from 'next/navigation'
import path from 'path'
import NavLink from './NavLink'
import { BottomSheet, BottomSheetRef } from 'react-spring-bottom-sheet'
import 'react-spring-bottom-sheet/dist/style.css'


function Navbar() {
  const [open, setOpen] = React.useState<boolean>(false);

  const session = true;
  const isAdmin = true;

  const links = () => {
    return (
      <>
        <NavLink items={Links} />
        {
          session ? (
            <>
              {isAdmin && <NavLink items={[{ title: 'Admin', path: '/admin' }]} />}
              <button className='hover:text-red-500'>Logout</button>
            </>
          ) : (
            <>
              {/* <NavLink items={[{ title: 'Login', path: '/login' }]} /> */}
            </>
          )
        }
      </>
    )
  }

  return (
    <div className='h-24 flex justify-between items-center'>
      <div className='left font-bold text-lg'>
        <Link href='/'>TD BLOG</Link>
      </div>
      <div className='right'>
        <div className='hidden md:block'>
          <div className=' flex gap-4 '>
            {links()}
          </div>
        </div>
        <div className='block md:hidden'>
          <button
            onClick={() => setOpen(!open)} className='text-2xl font-bold'>☰</button>
          <BottomSheet open={open} onDismiss={() => setOpen(false)} >
            <div className='flex flex-col gap-4 text-center py-4 bg-bgsecondary' >
              {links()}
            </div>
          </BottomSheet>
        </div>
      </div>
    </div>
  )
}

export default Navbar
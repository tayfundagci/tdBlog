"use client"
import { mdlLink } from '@/models/Link'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'

function NavLink(props: { items: mdlLink[] }) {
  const pathName = usePathname();
  return (
    <>
      {props.items.map((item, index) => (
        <Link href={item.path} key={index} className={item.path == pathName ? 'font-bold ' : ''}>
          {item.title}
        </Link>
      ))}
    </>
  )
}

export default NavLink
"use client"
import { mdlLink } from '@/models/Link'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'

function NavLink(props: { items: mdlLink[] }) {
  const pathName = usePathname();

  const getClassName = (path: string, title: string) => {

    if (pathName === path || pathName.includes(title.toLowerCase()))
      return 'font-bold';
    else
      return '';

  }

  return (
    <>
      {props.items.map((item, index) => (
        <Link href={item.path} key={index} className={getClassName(item.path, item.title)}>
          {item.title}
        </Link>
      ))}
    </>
  )
}

export default NavLink
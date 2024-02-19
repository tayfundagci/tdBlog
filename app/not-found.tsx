import Link from 'next/link'
import React from 'react'

function NotFound() {
  return (
    <div>
      <h1 className='font-bold text-red-500'>Not Found</h1>
      <p>Sorry, this page does not exist.</p>
      <Link href="/">Go back to the home page</Link>
    </div>
  )
}

export default NotFound
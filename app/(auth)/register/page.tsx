import { createUser } from '@/lib/actions'
import React from 'react'

function Register() {
  return (
    <div className='gap-2'>
      <form action={createUser} className='flex flex-col gap-4 justify-center items-center'>
        <input type="text" placeholder='Username' name='username' className='rounded p-2 w-2/4' />
        <input type="email" placeholder='Email' name='email' className='rounded p-2 w-2/4' />
        <input type="password" placeholder='Password' name='password' className='rounded p-2 w-2/4' />
        <input type="password" placeholder='Password again' name='passwordRepeat' className='rounded p-2 w-2/4' />
        <button className='h-10 rounded bg-bgsecondary text-textprimary px-4'>Register</button>
      </form>
    </div>
  )
}

export default Register
"use client"
import { createUser } from '@/lib/actions'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useFormState } from 'react-dom'

const RegisterForm = () => {
  const [state, formAction] = useFormState(createUser, undefined)
  const router = useRouter();

  useEffect(() => {
    console.log(state);

    state?.success && router.push("/login");
  }, [state?.success, router])

  return (
    <form action={formAction} className='flex flex-col gap-4 justify-center items-center'>
      <input type="text" placeholder='Username' name='username' className='rounded p-2 w-2/4' />
      <input type="email" placeholder='Email' name='email' className='rounded p-2 w-2/4' />
      <input type="password" placeholder='Password' name='password' className='rounded p-2 w-2/4' />
      <input type="password" placeholder='Password again' name='passwordRepeat' className='rounded p-2 w-2/4' />
      <button className='h-10 rounded bg-bgsecondary text-textprimary px-4'>Register</button>
      {state?.error && <p>{state.error}</p>}
      <Link href="/login">Have an account? <b>Login</b></Link>
    </form>
  )
}

export default RegisterForm
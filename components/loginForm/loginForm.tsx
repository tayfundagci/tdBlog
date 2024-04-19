"use client"
import { userLogin } from '@/lib/actions';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useFormState } from 'react-dom';

const LoginForm = () => {

  const [state, formAction] = useFormState(userLogin, undefined)
  const router = useRouter();

  useEffect(() => {
    console.log(state);

    state?.success && router.push("/");
  }, [state?.success, router])

  return (
    <form action={formAction} className='flex flex-col gap-4 justify-center items-center'>
      <input type="text" placeholder='Username' name='username' className='rounded p-2 w-2/4' />
      <input type="password" placeholder='Password' name='password' className='rounded p-2 w-2/4' />
      <button className='h-10 rounded bg-bgsecondary text-textprimary px-4'>Login</button>
      {state?.error && <p>{state.error}</p>}
      <Link href="/register">Don't have an account? <b>Register</b></Link>
    </form>
  )
}

export default LoginForm
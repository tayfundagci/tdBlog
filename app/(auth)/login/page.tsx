import { userLogin } from '@/lib/actions';
import { auth, signIn } from '@/lib/auth'
import { redirect } from 'next/navigation';
import { useRouter } from 'next/router';
import React from 'react'

const Login = async () => {
  const session = await auth();

  const handleGithubLogin = async () => {
    "use server"
    await signIn("github")
  }
  return (
    <div>
      <form action={userLogin} className='flex flex-col gap-4 justify-center items-center'>
        <input type="text" placeholder='Username' name='username' className='rounded p-2 w-2/4' />
        <input type="password" placeholder='Password' name='password' className='rounded p-2 w-2/4' />
        <button className='h-10 rounded bg-bgsecondary text-textprimary px-4'>Login</button>
      </form>
      <form action={handleGithubLogin} className='flex flex-col gap-4 justify-center items-center'>
        <button className='mt-6'>Login with GitHub</button>
      </form>
    </div>
  )
}

export default Login
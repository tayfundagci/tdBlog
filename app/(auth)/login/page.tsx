import LoginForm from '@/components/loginForm/loginForm';
import { userLogin } from '@/lib/actions';
import { auth, signIn } from '@/lib/auth'
import { redirect } from 'next/navigation';
import { useRouter } from 'next/router';
import React from 'react'

const Login = async () => {

  const handleGithubLogin = async () => {
    "use server"
    await signIn("github")
  }
  return (
    <div>
      <form action={handleGithubLogin} className='flex flex-col gap-4 justify-center items-center mb-4'>
        <button className='mt-6 '>Login with GitHub</button>
      </form>
      <LoginForm />
    </div>
  )
}

export default Login
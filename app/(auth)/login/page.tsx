import LoginForm from '@/components/loginForm/loginForm';
import { signIn } from '@/lib/auth'
import React from 'react'
import { FaGithub } from "react-icons/fa";

const Login = () => {

  const handleGithubLogin = async () => {
    "use server"
    await signIn("github")
  }
  return (
    <div>
      <form action={handleGithubLogin} className='flex flex-col gap-4 justify-center items-center mb-4'>
        <button className='mt-6 '> <span className='flex flex-row gap-2 mb-0' > Login with GitHub <span className='mt-1'> <FaGithub /></span></span> </button>
      </form>
      <LoginForm />
    </div>
  )
}

export default Login
import { createPost, deletePost } from '@/lib/data'
import { mdlPost } from '@/models/Post'
import React from 'react'

const ServerActionTestPage = () => {

  const addPost = async (formData: any) => {
    "use server"
    const { title, desc, slug, userId } = Object.fromEntries(formData);
    const newPost = new mdlPost(title, desc, userId, slug);
    await createPost(newPost);
    console.log("created");
  }

  const removePost = async (formData: any) => {
    "use server"
    const { id } = Object.fromEntries(formData);
    await deletePost(id);
    console.log('deleted');
  }

  return (
    <div className="gap-2 " >
      <form action={addPost} className='flex flex-col gap-4 justify-center items-center' >
        <input type="text" placeholder='title' name='title' className='rounded p-2 w-2/4' />
        < input type="text" placeholder='desc' name='desc' className='rounded p-2 w-2/4' />
        <input type="text" placeholder='slug' name='slug' className='rounded p-2 w-2/4' />
        <input type="text" placeholder='userId' name='userId' className='rounded p-2 w-2/4' />
        <button className='bg-blue-500 text-white p-2 rounded w-2/4'>Create Post</button>
      </form >

      <form action={removePost} className='flex flex-col gap-4 mt-10 justify-center items-center' >
        <input type="text" placeholder='id' name='id' className='rounded p-2 w-2/4' />
        <button className='bg-red-500 text-white p-2 rounded w-2/4'>Delete Post</button>
      </form>
    </div >
  )
}

export default ServerActionTestPage
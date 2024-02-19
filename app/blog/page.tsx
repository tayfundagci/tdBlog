import { createPost, getPosts } from '@/api/data'
import { mdlPost } from '@/models/Post'
import Link from 'next/link'
import React from 'react'



async function Blog() {
  const posts = await getPosts();

  return (
    <div>
      {
        posts?.map((post: mdlPost) => (
          <div key={post.slug} >
            <h2 className='text-3xl'>{post.title}</h2>
            <Link className='p-4' href={`/blog/${post.slug}`}>Read More</Link>
          </div>
        ))
      }
    </div >
  )
}

export default Blog
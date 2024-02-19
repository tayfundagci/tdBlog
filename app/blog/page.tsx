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
          <div key={post.slug} className='p-4 border-b'>
            <h2>{post.title}</h2>
            <Link href={`/blog/${post.slug}`}>Read More</Link>
          </div>
        ))
      }
    </div >
  )
}

export default Blog
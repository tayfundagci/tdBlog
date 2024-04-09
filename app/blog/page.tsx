import { createPost, getPosts } from '@/api/data'
import { mdlPost } from '@/models/Post'
import { Metadata } from 'next';
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
  title: "Blogs",
  description: "Blog posts about game world"
};

async function Blog() {
  const posts = await getPosts();
  console.log(posts);

  return (
    <div className='flex gap-10'>
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
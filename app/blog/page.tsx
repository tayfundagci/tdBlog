import { createPost, getPosts } from '@/lib/data'
import { mdlPost } from '@/models/Post'
import { Metadata } from 'next';
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
  title: "Blogs",
  description: "Blog posts about game world"
};

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", { next: { revalidate: 3600 } });
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
}

async function Blog() {
  const posts = await getData();

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
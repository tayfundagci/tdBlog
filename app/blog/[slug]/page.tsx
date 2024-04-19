'use server'
import { getPost } from '@/lib/data';
import PostUser from '@/components/postUser/PostUser'
import React, { Suspense } from 'react'

const getData = async (slug: string) => {
  const res = await fetch(`${process.env.BASE_URL}/api/blog/${slug}`,);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
}

export const generateMetadata = async ({ params }: { params: any }) => {
  const { slug } = params;
  const post = await getPost(slug);
  if (post != null) {
    return {
      title: post.title,
      description: post.desc
    }
  }
}

const BlogDetail = async ({ params }: { params: any }) => {
  const { slug } = params;
  const post = await getData(slug);
  return (
    <div>
      {post && (
        <>
          <h1 className='text-3xl'>{post.title}</h1>
          <p>{post.desc}</p>
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} post={post} />
          </Suspense>
        </>
      )}
    </div>
  )
}

export default BlogDetail
'use server'
import { getPost } from '@/api/data';
import PostUser from '@/components/postUser/PostUser'
import React, { Suspense } from 'react'

export const generateMetadata = async ({ params }: { params: any }) => {
  const { slug } = params;
  console.log(slug);
  const post = await getPost(slug);
  console.log(post);

  if (post != null) {
    return {
      title: post.title,
      description: post.desc
    }
  }
}

const BlogDetail = async ({ params }: { params: any }) => {

  const { slug } = params;
  const post = await getPost(slug);
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
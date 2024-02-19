import { getPost } from '@/api/data';
import PostUser from '@/components/postUser/PostUser'
import React, { Suspense } from 'react'

async function BlogDetail({ params }: { params: any }) {

  const { slug } = params;
  const post = await getPost(slug);
  return (
    <div>
      {post && (
        <>
          <h1 className='text-3xl'>{post.title}</h1>
          <p>{post.desc}</p>
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
        </>
      )}
    </div>
  )
}

export default BlogDetail
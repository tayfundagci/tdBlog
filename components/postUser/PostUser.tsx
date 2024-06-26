import { getUser } from '@/lib/data'
import { mdlPost } from '@/models/Post'
import { get } from 'http'
import moment from 'moment'
import React from 'react'

const PostUser = async ({ userId, post }: { userId: string, post: mdlPost }) => {

  const user = await getUser(userId)
  return (
    <div className='p-4 '>
      <h1>{user?.username}</h1>
      <p className=''>Created At : {moment(post.createdAt).format("DD-MM-YYYY HH:mm:ss")}</p>
    </div>
  )
}

export default PostUser
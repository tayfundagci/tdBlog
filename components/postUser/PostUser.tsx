import { getUser } from '@/api/data'
import { get } from 'http'
import React from 'react'

const PostUser = async ({ userId }: { userId: string }) => {

  const user = await getUser(userId)
  return (
    <div>
      <h1>{user?.username}</h1>
      <p>{user?.email}</p>
    </div>
  )
}

export default PostUser
import React, { useEffect, useState } from 'react'
import PostItem from './PostItem'
import PostModal from './PostModal'

function Posts({ posts }) {
  const [post, setPost] = useState({ desc: 'lorem upsu', title: 'title dummy' })
  useEffect(() => {
    console.log('Posts', posts)
  }, [])

  return (
    <div>
      <PostModal post={post} />
      <div
        className="grid grid-cols-1 
    sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
    gap-5 mt-5 px-10"
      >
        {posts.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              window.my_modal_2.showModal()
              setPost(item)
            }}
          >
            <PostItem post={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Posts

import React from 'react'
import PostItem from './PostItem'

const PostModal = ({ post }) => {
  return (
    <div>
      <dialog id="my_modal_2" className="modal p-0 rounded-xl">
        <form method="dialog" className="modal-box">
          <button className="hover:bg-slate-500/50 px-2 py-1 rounded-full  absolute right-3 top-3 text-white ">
            ✕
          </button>
          <PostItem post={post} />
        </form>
      </dialog>
    </div>
  )
}

export default PostModal

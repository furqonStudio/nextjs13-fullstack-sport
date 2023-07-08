'use client'
import { signIn, useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  query,
  where,
} from 'firebase/firestore'
import PostItem from '../components/Home/PostItem'
import app from '../shared/FirebaseConfig'
import { useRouter } from 'next/navigation'

function Profile() {
  const { data: session } = useSession()
  const [userPost, setUserPost] = useState([])
  const db = getFirestore(app)
  const [showToast, setShowToast] = useState(false)
  const router = useRouter()

  const getUserPost = async () => {
    setUserPost([])
    if (session?.user.email) {
      const q = query(
        collection(db, 'posts'),
        where('email', '==', session?.user.email)
      )
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        let data = doc.data()
        data.id = doc.id
        setUserPost((userPost) => [...userPost, data])
      })
    }
  }

  useEffect(() => {
    getUserPost()
  }, [session])

  if (!session) {
    return signIn()
  }

  const onDeletePost = async (id) => {
    await deleteDoc(doc(db, 'posts', id))
    setShowToast(true)
    window.location.reload()
  }

  //jika tidak ada session arahkan ke home

  return (
    <div className="p-6 mt-8">
      <h2 className="text-[35px] font-extrabold text-blue-500">Profile</h2>
      <p>Manage Your Post</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 px-10">
        {userPost &&
          userPost?.map((item, index) => (
            <div key={index}>
              <PostItem post={item} modal={true} />
              <button
                className="bg-red-400 w-full p-1 mt-1 rounded-md text-white"
                onClick={() => onDeletePost(item.id)}
              >
                Delete
              </button>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Profile

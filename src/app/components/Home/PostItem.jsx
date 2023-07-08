import Image from 'next/image'
import {
  HiArrowLongRight,
  HiMiniCalendar,
  HiOutlineMapPin,
} from 'react-icons/hi2'

const PostItem = ({ post }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <Image
        className="rounded-t-lg"
        src={post.image}
        alt=""
        width={400}
        height={300}
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
          {post.title}
        </h5>
        <div className="flex items-center mb-2 text-sm font-medium text-gray-500">
          <HiMiniCalendar className="mr-1 text-gray-600" />
          <p>{post.date}</p>
        </div>
        <div className="flex items-center mb-2 text-sm font-medium text-gray-500">
          <HiOutlineMapPin className="mr-1 text-gray-600" />
          <p>{post.location}</p>
        </div>
        <p className="mb-3 font-normal text-gray-700 ">{post.desc}</p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
        >
          Read more
          <HiArrowLongRight className="ml-2 text-xl" />
        </a>
      </div>
    </div>
  )
}

export default PostItem

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Image = {
    id: number;
    created_at: string;
    username: string;
    source: string;
    url: string;
    };

const Card = ({ id, source, url, created_at, username}: Image) => {
  return (
    <Link key={id} href={source} className="group">
    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
      <Image
        className="hover:opacity-80 hover:scale-105 transition-all ease-in-out duration-300 object-cover shadow-2xl"
        alt=""
        src={url}
        width={300}
        height={300}
        priority={true}
      />
    </div>
    <h3 className="mt-4 text-sm text-gray-300">{new Date(created_at).toLocaleDateString()}</h3>
    <p className="mt-1 text-lg font-medium text-gray-100">{username}</p>
  </Link>
  )
}

export default Card
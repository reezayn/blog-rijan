'use client'

import { getPostBySlug } from '@/lib/requests'
import { formatDateString } from '@/lib/utils'
import { useQuery } from '@tanstack/react-query'
import { notFound } from 'next/navigation'
import { HiMiniUserGroup } from 'react-icons/hi2'
import { PiBookOpen } from 'react-icons/pi'

type Props = {
  slug: string
}

export default function Post({ slug }: Props) {
  const { data } = useQuery({
    queryKey: ['post', slug],
    queryFn: () => getPostBySlug(slug),
  })

  if (!data) return notFound()

  return (
    <div>
      <img src={data?.coverImage.url} alt="" className="w-full rounded-2xl" />
      <div className='mx-auto max-w-[900px]'>
        <h1 className="text-4xl lg:text-6xl text-center leading-relaxed font-bold mt-5">
          {data?.title}
        </h1>
        <p className="my-5 text-center text-xl text-gray-400">
          {data?.subtitle}
        </p>
        <div className="my-5 flex items-center justify-center text-lg">
          {data?.author.profilePicture && (
            <img
              src={data?.author.profilePicture}
              alt={data?.author.name}
              className="rounded-full h-10 w-10 mr-5"
            />
          )}
          <span>{data?.author.name}</span>
          <span className='font-extrabold text-2xl'>﹒</span>
          <span>{formatDateString(data?.publishedAt)}</span>
          <span className='font-extrabold text-2xl'>﹒</span>
          <span className='flex items-center justify-center'><PiBookOpen className='mr-2' />{data?.readTimeInMinutes} min read</span>
          <span className='font-extrabold text-2xl'>﹒</span>
          <span className='flex items-center justify-center'><HiMiniUserGroup className='mr-2' />{data?.views} views</span>
        </div>
        <div
          className="blog-content text-xl leading-loose flex flex-col gap-5 mt-5"
          dangerouslySetInnerHTML={{ __html: data!.content.html }}
        ></div>
      </div>
    </div>
  )
}

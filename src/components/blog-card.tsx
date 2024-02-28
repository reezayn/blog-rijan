import { PostMetadata } from '@/lib/types'
import { Card, CardContent, CardHeader } from './ui/card'
import Link from 'next/link'
import { PiBookOpen } from 'react-icons/pi'
import { HiMiniUserGroup } from 'react-icons/hi2'

type Props = {
  post: PostMetadata
}

export default function BlogCard({ post }: Props) {
  return (
    <Link href={`/${post.slug}`} className="flex">
      <Card className="flex flex-col bg-transparent border-none shadow-none">
        <CardHeader>
          <img
            className="rounded-lg h-full"
            src={post.coverImage.url}
            alt={post.title}
          />
        </CardHeader>
        <CardContent>
          <h2 className="text-xl font-bold">
            <span className="">{post.title}</span>
          </h2>
          <div className="mt-3 flex gap-3 items-center">
            {post?.author.profilePicture && (
              <img
                src={post.author.profilePicture}
                className="h-9 w-9 rounded-full"
              />
            )}
            <div className="flex flex-col">
              <div className="text-sm mb-1">{post.author.name}</div>
              <div className="flex">
                <div className="flex items-center justify-center">
                  <PiBookOpen />
                  <span className="text-xs mx-2">
                    {post?.readTimeInMinutes} min read
                  </span>
                </div>
                <div className="flex items-center justify-center mx-1">
                  <HiMiniUserGroup />
                  <span className="text-xs mx-2">{post?.views} views</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-gray-500 line-clamp-2 mt-3">
            {post.subtitle || post.content.text}
          </p>
        </CardContent>
      </Card>
    </Link>
  )
}

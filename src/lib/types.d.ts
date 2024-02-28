import type { QueryFunctionContext } from '@tanstack/react-query'
import { Url } from 'next/dist/shared/lib/router/router'

export type PublicationName = {
  publication: Publication
}

export type Publication = {
  title: string
  displayTitle?: string
  favicon?: string
  author: {
    name: string
    socialMediaLinks: {
      instagram: Url
      facebook: Url
      linkedin: Url
      github: Url
      youtube: Url
    }
  }
  preferences: {
    logo?: string
    darkMode: {
      logo?: string
    }
  }
}

export type PostMetadata = {
  title: string
  subtitle?: string
  slug: string
  readTimeInMinutes: number
  views: number
  publishedAt: string
  content: {
    text: string
  }
  coverImage: {
    url: string
  }
  author: {
    name: string
    profilePicture?: string
  }
}

type GetPostsResponse = {
  publication: {
    posts: {
      edges: {
        node: PostMetadata
        cursor: string
      }[]
    }
  }
}

type GetPostsFunctionArgs = {
  first: number
  after: string
}

export type GetPostsArgs = QueryFunctionContext & GetPostsArgs

export type SubscribeToNewsletterResponse = {
  data?: {
    subscribeToNewsletter: {
      status: string
    }
  }

  errors?: { message: string }[]
}

export type GetPostBySlugResponse = {
  publication: {
    post: {
      title: string
      subtitle?: string
      publishedAt: string
      readTimeInMinutes: number
      views: number
      coverImage: {
        url: string
      }
      content: {
        html: string
      }
      author: {
        name: string
        profilePicture?: string
      }
    }
  }
}

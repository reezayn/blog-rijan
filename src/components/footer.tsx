import { getBlogName } from '@/lib/requests'
import Image from 'next/image'
import Link from 'next/link'
import PublicationLogo from './PublicationLogo'

export default async function Footer() {
  const blogBrandDetails = await getBlogName()

  return (
    <footer className="bg-[#F1F5F9] dark:bg-gray-900 flex flex-col items-center justify-center w-full py-3 mt-10 h-80">
      <div className="mb-12 flex flex-col flex-wrap items-center">
        <p className="mb-2 text-slate-600 dark:text-slate-300">
          &copy;{new Date().getFullYear()}{' '}
          {blogBrandDetails.title || `${blogBrandDetails.author.name}'s Blog`}
        </p>
        <div className="flex flex-row items-center text-slate-600 dark:text-slate-300">
          <a
            href="https://rijanshrestha.com.np"
            className="mx-2 hover:underline"
          >
            About me
          </a>
          <span className="font-extrabold text-black opacity-20 dark:text-white">
            &middot;
          </span>
          <a
            className="mx-2 hover:underline"
            href="mailto:contact@rijanshrestha.com.np"
          >
            contact@rijanshrestha.com.np
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <Link href="/" className="relative block h-10 w-40">
          <PublicationLogo blogBrandDetails={blogBrandDetails} />
        </Link>
      </div>
    </footer>
  )
}

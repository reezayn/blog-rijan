import Link from 'next/link'
import ThemeToggler from './theme-toggler'
import { Button } from './ui/button'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { getBlogName } from '@/lib/requests'
import Image from 'next/image'
import PublicationLogo from './PublicationLogo'
import HamburgerDropdown from './HamburgerDropdown'

const GITHUB_URL = 'https://github.com/reezayn/blog-rijan'

export default async function Navbar() {
  const blogBrandDetails = await getBlogName()

  return (
    <div className="w-full border-b mb-5 ">
      <div className="max-w-[1200px] mx-auto px-3 xl:p-0 my-5 flex justify-between items-center">
        <div className="text-xl font-bold">
          {/* <Link href="/">{blogBrandDetails.displayTitle || blogBrandDetails.title}</Link> */}
          <Link href="/">
            <PublicationLogo blogBrandDetails={blogBrandDetails} />
          </Link>
        </div>
        <div className="flex items-center gap-5">
          <ThemeToggler />
          <HamburgerDropdown blogBrandDetails={blogBrandDetails} />

          {/* <Button variant="secondary">
            <Link
              className="gap-2 flex items-center"
              href={GITHUB_URL}
              target="_blank"
            >
              <GitHubLogoIcon /> GitHub
            </Link>
          </Button> */}
        </div>
      </div>
    </div>
  )
}

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Publication } from '@/lib/types'
import Link from 'next/link'
import { FaGithub, FaInfoCircle, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { GoHomeFill } from 'react-icons/go'
import { HiMenu } from 'react-icons/hi'

const HamburgerDropdown = ({
  blogBrandDetails,
}: {
  blogBrandDetails: Publication
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none">
        <HiMenu size={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="my-3">
        <DropdownMenuLabel className="">Navigations</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="h-9">
          <Link
            href="/"
            className="w-full h-full flex items-center justify-start"
          >
            <GoHomeFill className="mr-3" />
            Home
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="h-9">
          <Link
            href="https://rijanshrestha.com.np/about"
            target="_blank"
            className="w-full h-full flex items-center justify-start"
          >
            <FaInfoCircle className="mr-3" /> About
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel className="">Socials</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {blogBrandDetails.author.socialMediaLinks.github && (
          <DropdownMenuItem className="h-9">
            <Link
              href={blogBrandDetails.author.socialMediaLinks.github}
              target="_blank"
              className="w-full h-full flex items-center justify-start"
            >
              <FaGithub className="mr-3" />
              Github
            </Link>
          </DropdownMenuItem>
        )}
        {blogBrandDetails.author.socialMediaLinks.linkedin && (
            <DropdownMenuItem className="h-9">
            <Link
              href={blogBrandDetails.author.socialMediaLinks.linkedin}
              target="_blank"
              className="w-full h-full flex items-center justify-start"
            >
              <FaLinkedin className="mr-3" />
              Linkedin
            </Link>
          </DropdownMenuItem>
        )}
        
        {blogBrandDetails.author.socialMediaLinks.instagram && (
            <DropdownMenuItem className="h-9">
            <Link
              href={blogBrandDetails.author.socialMediaLinks.instagram}
              target="_blank"
              className="w-full h-full flex items-center justify-start"
            >
              <FaInstagram className="mr-3" />
              Instagram
            </Link>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default HamburgerDropdown

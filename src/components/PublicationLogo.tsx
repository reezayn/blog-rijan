'use client'

import { Publication } from '@/lib/types'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import RijanLogo from '@/public/rijanLogo.png'

const PublicationLogo = ({
  blogBrandDetails,
}: {
  blogBrandDetails: Publication
}) => {
  const { setTheme, resolvedTheme } = useTheme()

  return (
    <div>
      {resolvedTheme === 'light' ? (
        <Image src={blogBrandDetails?.preferences.logo || RijanLogo} alt="logo" width={200} height={200} />
      ) : (
        <Image src={blogBrandDetails?.preferences.darkMode.logo || RijanLogo} alt="logo" width={200} height={200} />
      )}
    </div>
  )
}

export default PublicationLogo

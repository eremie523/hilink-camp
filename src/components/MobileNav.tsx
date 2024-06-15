import { NAV_LINKS } from '@/constants'
import Link from 'next/link'
import React from 'react'

type Props = {}

const MobileNav = (props: Props) => {
  return (
    <div>
        <ul>
            {
                NAV_LINKS.map(({href, key, label}) => {
                    return (
                        <li key={key}>
                            <Link href={href} className='text-gray-500'>
                                {label}
                            </Link>
                        </li>   
                    )
                })
            }
        </ul>
    </div>
  )
}

export default MobileNav
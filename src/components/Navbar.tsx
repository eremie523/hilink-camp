import Link from 'next/link'
import Image from "next/image"
import React from 'react'
import { NAV_LINKS } from '@/constants'
import Button from './Button'
import MobileNav from './MobileNav'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className='flexBetween max-container padding-container relative z-30 py-5'>
        <Link href="/">
            <Image src={"/hilink-logo.svg"} alt="logo" width={74} height={29}></Image> 
        </Link>
        <ul className='hidden h-full gap-12 lg:flex'>
            {
                NAV_LINKS.map((link) => {
                    return (
                        <li key={link.key}>
                            <Link href={link.href} className='regular-16  cursor-pointer text-gray-50 pb-1.5 transition-all hover:font-bold'>{link.label}</Link>
                            {/* <MobileNav /> */}
                        </li>
                    )
                })
            }
        </ul>
        <div className='lg:flexCenter hidden'>
            <Button label="Login" btnType="button" ico='/user.svg' variant="btn_dark_green" />
        </div>
        <div className={'lg:hidden inline-block cursor-pointer'}>
            <Image src={"/menu.svg"} alt='hamburger' width={24} height={30}></Image>
        </div>
        
    </nav>
  )
}

export default Navbar
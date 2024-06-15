import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='flexCenter mb-24'>
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div>
          <Link href={"#"}><Image src={"/hilink-logo.svg"} alt='logo' width={79} height={29}></Image></Link>
          <ul className='flex flex-row flex-wrap gap-4 mt-5'>
            {SOCIALS.links.map((link, index) => (
              <li key={index}>
                <Link href={link}>
                  <Image src={link} alt='social' width={30} height={30}></Image>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap justify-between items-start gap-6">
          {FOOTER_LINKS.map((linkGroup, index) => (
            <div key={index} className={'lg:w-1/3 md:w-1/2 w-full flex-1 flex-col items-start justify-start'}>
              <h6 className='bold-20 lg:bold-32'>{linkGroup.title}</h6>
              <ul className='flex flex-col gap-4 text-gray-30 mt-5'>
                {linkGroup.links.map(link => (
                  <li key={link}>
                    <Link href={`#${link}`} className='whitespace-nowrap'>{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className={'lg:w-1/3 md:w-1/2 w-full flex-1 flex-col items-start justify-start'}>
            <h6 className='bold-20 lg:bold-32'>{FOOTER_CONTACT_INFO.title}</h6>
            <ul className='text-gray-30 flex flex-col gap-4 mt-5'>
                {FOOTER_CONTACT_INFO.links.map((link, index) => (
                  <li key={index}>
                    <Link href={`#${link.label}`} className='whitespace-nowrap'>{link.label}: <span className='text-black bold-16'>{link.value}</span></Link>
                  </li>
                ))}
              </ul>
          </div>
        </div>
        <div className={'border-t border-gray-600 py-5'}>
            <p className='text-center'>
                &copy; 2014 Hilink | All rights reserved
            </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
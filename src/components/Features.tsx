import React from 'react'
import FeaturesCard from './FeaturesCard'
import { FEATURES } from '@/constants'
import Image from 'next/image'

type Props = {}

const Features = (props: Props) => {
  return (
    <section className='max-container padding-container relative overflow-hidden bg-feature-bg bg-center flex bg-no-repeat py-24'>
      <div className={'flex flex-1 lg:min-h-[900px]'}>
        <Image src={'/phone.png'} alt='phone' width={440} height={1000} className='feature-phone'></Image>
      </div>
      <div className={'z-20 w-full lg:w-[60%]'}>
        <div className="relative">
          <Image src={'/camp.svg'} alt='camp' width={50} height={50} className='absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]'></Image>
          <h2 className={'bold-40 lg:bold-64'}>Our Features</h2>
        </div>
        <ul className={'grid sm:grid-cols-2 grid-cols-1 sm:gap-20 lg:mt-20 mt-10'}>
          {
            FEATURES.map((feature, index) => {
              return (
                <FeaturesCard key={index} label={feature.title} variance={feature.variant} icon={feature.icon} subLabel={feature.description} />
              )
            })
          }
        </ul>
      </div>
    </section>
  )
}

export default Features
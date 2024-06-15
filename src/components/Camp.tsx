import React from 'react'
import CampSite from './CampSite'
import Image from 'next/image'
import styles from "./camp.module.css"

type Props = {}

const Camp = (props: Props) => {
  return (
    <section className='2xl:max-container relative flex flex-col py-10 lg:mb-10 xl:mb-20'>
       <div className={'hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]'}>
        <CampSite backgroundImage={"bg-bg-img-1"} label={"Putuk Truno Camp"} subLabel={"Prigen, Pasuruan"} peopleJoined={"50+ Joined"} />
        <CampSite backgroundImage={"bg-bg-img-2"} label={"Mountain View"} subLabel={"Somewhere in the wild"} peopleJoined={"50+ Joined"} />
       </div>
       <div className={'flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6'}>
        <div className={`bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl ${styles.campLabel}`}>
          <h2 className={'regular-24 md:regular-32 2xl:regular-64 capitalize text-white'}><span className={'font-bold'}>Feeling Lost</span> And Not Knowing The Way?</h2>
          <p className={'text-white mt-5 regular-14 xl:regular-18'}>starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure</p>
        </div>
       </div>
    </section>
  )
}

export default Camp
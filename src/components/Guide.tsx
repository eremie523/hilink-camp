import Image from 'next/image'
import React from 'react'

type Props = {}

const Guide = (props: Props) => {
  return (
    <section className={'lg:max-container padding-container w-full pb-24 flex flex-col gap-y-12'}>
      <div className={'w-full flex lg:flex-row justify-between flex-col items-end'}>
        <div>
          <Image src={"/camp.svg"} alt='camp' width={50} height={50}></Image>
          <p className={'uppercase text-green-50 mb-3 regular-16'}>We are here for you</p>
          <h2 className={'bold-40 lg: lg:bold-64 mb-4 xl:max-w-[390px]'}>Guide You to Easy Path</h2>
        </div>
        <p className={'text-slate-500 -mt-1 xl:max-w-[520px] capitalize'}>Only with the hilink application, you will no longer get lost and get lost again because we already suport offline maps when there is no internet connection in the field. Invite your friends to have fun in the wilderness through the valley and reach the top of the mountain.</p>
      </div>

      <div className='flex w-full items-center justify-center relative'>
        <Image src={"/boat.png"} alt='boat' width={1440} height={580} className='w-full object-cover object-center 2xl:rounded-5xl'></Image>
        <div className={'rounded-3xl flex bg-white shadow-md shadow-gray-20 py-4 pl-5 pr-7 gap-3 md:left-[5%] lg:top-20 absolute'}>
          <div className={''}>
            <Image src={'meter.svg'} alt='meter' width={16} height={158} className='h-full w-auto'>

            </Image>
          </div>
          <div className="flex flex-col gap-8">
            <div className={'flex w-full flex-col'}>
              <div className={'flex justify-between w-full'}>
                <p className={'regular-14 text-slate-500'}>Destination</p>
                <span className={'text-green-50 bold-16'}>48 min</span>
              </div>
              <p className='bold-20'>Aguas Calientes</p>
            </div>
            <div className={'flex w-full flex-col'}>
              <p className={'regular-14 text-slate-500'}>Start track</p>
              <h4 className='bold-20 mt-2'>Wonorejo Pasuruan</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide
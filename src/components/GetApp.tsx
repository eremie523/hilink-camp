import React from 'react'
import Button from './Button'
import Image from 'next/image'

type Props = {}

const GetApp = (props: Props) => {
  return (
    <section className='flex items-start justify-center w-full flex-col pb-[100px]'>
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className='text-white bold-40 lg:bold-64 xl:max-w-[590px]'>Get For Free Now</h2>
          <p className='text-slate-300 regular-14 lg:regular-18'>Available on iOS and android, download now!</p>

          <div className='flex lg:flex-row flex-col w-full gap-3'>
            <Button label='App store' variant='btn_white' full ico='/apple.svg'></Button>
            <Button label='Play store' variant='btn_dark_green_outline' full ico='/android.svg'></Button>
          </div>
        </div>
        <div className='z-20 w-full flex-1 flex justify-center items-center'>
          <Image src={'/phones.png'} alt='phones' width={550} height={870}></Image>
        </div>
      </div>
    </section>
  )
}

export default GetApp
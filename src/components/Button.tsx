"use client";

import Image from 'next/image'
import React, { ReactNode } from 'react'

type Props = {
    label: string,
    clickFunc?: Function,
    btnType?: "button" | "submit" | "reset",
    ico?: string,
    full?: boolean;
    variant?: "btn_dark_green" | "btn_green" | "btn_white_text" | "btn_dark_green_outline" | "btn_white",
    children?: ReactNode
}

const Button = ({label, btnType, clickFunc, ico, children, variant, full }: Props) => {
  return (
    <button className={`flexCenter gap-3 rounded-full border ${variant } ${full && 'w-full'}`} type={btnType ? btnType : "button"} onClick={(e) => {
      clickFunc? clickFunc : () => {
        console.log("Working");
        
      }
    }}>
        {
            ico && (
                 <Image src={ico} alt={label} width={24} height={24}></Image>
            )
        }
        <label className='bold-16 whitespace-nowrap'>{label}</label>
    </button>
  )
}

export default Button
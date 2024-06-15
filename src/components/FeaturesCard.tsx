import Image from 'next/image';
import React from 'react'

interface FeaturesCardProps {
    label: string;
    subLabel: string;
    variance?: string;
    icon: string;
    key: number;
}

const FeaturesCard = ({label, subLabel, icon, variance, key}: FeaturesCardProps) => {
  return (
    <li className={'flex flex-col gap-5 w-full items-start'} key={key}>
        <div className={'flex'}>
            <div className={`rounded-full flex p-3 ${variance ? `bg-green-50` : "bg-gray-900"}`}>
                <Image src={icon} alt='feature' width={28} height={28}></Image>
            </div>
        </div>
        <h5 className={'bold-20 lg:bold-32 capitalize'}>{label}</h5>
        <p className={'text-gray-30 regular-16 bg-white/80 lg:mt-30 lg:bg-none'}>{subLabel}</p>
    </li>
  )
}

export default FeaturesCard
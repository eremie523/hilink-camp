import { PEOPLE_URL } from '@/constants';
import Image from 'next/image';
import React from 'react'

interface CampProps {
    backgroundImage: string;
    label: string;
    subLabel: string;
    peopleJoined: string;
}

const CampSite = ({ backgroundImage, label, subLabel, peopleJoined }: CampProps) => {
    return (
        <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
            <div className={'lg:px-20 px-8 lg:py-10 p-6 h-full flex flex-col justify-between'}>
                <div className={'flex lg:gap-6 gap-4 items-center'}>
                    <div className={'rounded-full bg-green-50 p-4'}>
                        <Image src={"/folded-map.svg"} alt={"camp"} width={30} height={30}></Image>
                    </div>
                    <div>
                        <h3 className={'text-white bold-18'}>{label}</h3>
                        <p className={'regular-14 text-white'}>{subLabel}</p>
                    </div>
                </div>
                <div className={'flex items-center justify-start gap-6'}>
                    <span className={'flex -space-x-4 overflow-hidden'}>
                        {PEOPLE_URL.map((url, index) => {
                            return (
                                <Image key={index} src={url} alt={`person${index}`} width={52} height={52} className={'inline-block h-10 w-10 rounded-full'} ></Image>
                            )
                        })}
                    </span>
                    <span className={'text-white bold-16 md:bold-20'}>{peopleJoined}</span>
                </div>
            </div>
        </div>
    )
}

export default CampSite
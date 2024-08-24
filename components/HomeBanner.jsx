'use client'

import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { RegisterLink } from '@kinde-oss/kinde-auth-nextjs'

const HomeBanner = () => {
    return (
        <div className='gap-6 max-h-screen grid grid-cols-1 md:grid-cols-2'>
            <div className='flex flex-col  justify-center items-center'>
                <h1 className='text-[60px] font-semibold text-center'>
                    Run <span className='text-primary'>Standup Meetings</span> <br /> Setup in Seconds
                </h1>
                <p className='text-[25px] mb-[40px] leading-8 text-secondary '>
                    Join thousands of teams that use <span className='text-primary font-bold'>Firmscheduler</span> to automate daily standups meetings.
                </p>
                <div className='flex'>
                    <RegisterLink><Button className="py-6 text-white w-[200px] text-[20px]">Get Started</Button></RegisterLink>
                    {/* <Image
                        src="/down-arrow-img.png"
                        alt="image"
                        width={144}
                        height={80}
                        className='h-fit'
                    /> */}
                </div>
            </div>
            <div>
                <Image
                    src="/social-media.png"
                    alt="image"
                    width={1000}
                    height={1000}
                    className='h-fit'
                />
            </div>
        </div>
    )
}

export default HomeBanner
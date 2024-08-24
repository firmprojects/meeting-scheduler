import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const HomeBanner = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-h-screen'>
            <div className='flex flex-col pt-[130px]'>
                <h1 className='text-[60px] font-semibold'>
                    Run <span className='text-primary'>Standup Meetings</span> <br /> Setup in Seconds
                </h1>
                <p className='text-[20px] mb-[40px] leading-8 text-secondary'>
                    Join thousands of teams that use Geekbot to automate daily standups, retros and more workflows.
                </p>
                <div className='flex'>
                    <Button className="py-6 text-white w-[200px] text-[20px]">Get Started</Button>
                    <Image
                        src="/down-arrow-img.png"
                        alt="image"
                        width={144}
                        height={80}
                        className='h-fit'
                    />
                </div>
            </div>
            <div className=' flex justify-center'>
                <Image
                    src="/banner-img-2.png"
                    alt="image"
                    width={460}
                    height={460}
                    className='h-fit'
                />

            </div>

        </div>
    )
}

export default HomeBanner
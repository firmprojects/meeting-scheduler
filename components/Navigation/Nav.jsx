'use client'

import Image from 'next/image'
import { menulinks } from '@/data/app-data'
import { Button } from '../ui/button'
import Link from 'next/link'
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs'


const Navigation = () => {
    return (
        <div className='py-4 shadow-sm'>
            <div className='container  flex justify-between items-center '>
                <Image
                    src="/logo-2.png"
                    alt='svg'
                    width={200}
                    height={80}
                    className='h-fit'
                />
                {/* <div className='flex gap-12'>
                    {menulinks.map((link, index) => (
                        <Link
                            href={link.href}
                            key={index}
                            className='text-lg font-semibold capitalize'
                        >{link.name}</Link>
                    ))}
                </div> */}
                <div className='flex gap-3'>
                    <LoginLink><Button variant="outline" className="bg-white">Login</Button></LoginLink>
                    <RegisterLink><Button className="bg-primary text-white">Sign Up</Button></RegisterLink>

                </div>
            </div>
        </div>
    )
}

export default Navigation
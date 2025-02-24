'use client';
import { Button } from '@/components/ui/button'
import { APP_NAME } from '@/lib/constants'
import Image from 'next/image'
import React from 'react'
import logo from '../../public/images/logo.svg'

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
        <Image 
        src={logo}
        width={48}
        height={48}
        alt={`${APP_NAME} logo`}
        priority={true}
        />
        <div className="p-6 w-1/3 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4">Not Found</h1>
        <p className="text-destructive">Requested page not found</p>
        <Button variant='outline' className='mt-4 ml-2' onClick={()=>window.location.href = '/'}>Back to Home</Button>
        </div>
    </div>
  )
}

export default NotFound
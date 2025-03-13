import Image from 'next/image'
import React from 'react'

export default function page() {
    return (
        <div className='!bg-[#000]'>

            <Image
                className='!object-fit !h-[auto] !mx-auto !w-1/2'
                src={"/assets/pledge.png"}
                height={768}
                width={1920}
                alt='Fraternal Pledge'
            />
        </div>
    )
}

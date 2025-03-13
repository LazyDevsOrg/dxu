import React from 'react'
import { Link, Typography } from '@mui/joy'
import { NavLinks } from '@/constants/app'

export default function HeaderNav() {
    return (
        <div className="!bg-[#3E1717] !h-[10vh] flex justify-between items-center p-5">

            <div className="flex flex-row gap-10 items-center">
                <Link className="!text-[#fff] !font-bold !text-[40px]" href="/">DXU</Link>
            </div>

            <div className="flex flex-row gap-6 items-center">
                {NavLinks.map((nav, index) => (
                    <Link key={index} className="!text-[#fff] !font-light !text-[20px]" href={nav.url}>{nav.name}</Link>
                ))}
            </div>

            <div className="flex flex-row gap-3 items-center !text-[#fff]">
                <Link className="!text-[#fff] !font-light !text-[20px]" href="/login">Login</Link>
                |
                <Link className="!text-[#fff] !font-light !text-[20px]" href="/register">Register</Link>
            </div>

        </div>
    )
}

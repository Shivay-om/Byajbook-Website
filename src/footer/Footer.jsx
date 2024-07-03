import React from 'react'
import logo from '../assets/images/byajbook_logo_!.png'
import { learnList, legalList, socialLinks } from '.'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='bg-[#673DCB] p-5'>
            <div className='p-5 md:w-4/5 mx-auto md:flex justify-between items-center'>
                <div>
                    <div className='flex flex-col justify-center items-center gap-4 py-5 border-b-2 border-gray-600 md:border-none'>
                        <div className='md:p-4 md:border-b-2 border-gray-400'>
                            <img className='h-10 md:h-12' src={logo} alt="" />
                        </div>
                        <div className='flex justify-center items-center gap-4 text-white'>
                            {
                                socialLinks.map((data, i) => {
                                    return (
                                        <div key={i} className={`p-1 ${data.sizeClass}`}>
                                            {data.social}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='flex justify-between gap-12 text-sm text-white mt-5 md:mt-0'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='hidden md:block text-xl font-semibold'>LEARN MORE</h1>
                        {learnList.map((data, i) => {
                            return (
                                <div key={i} className=''>
                                    <Link to={data.path}>{data.name}</Link>
                                </div>
                            )
                        })}
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h1 className='hidden md:block text-xl font-semibold'>LEGAL</h1>
                        {legalList.map((data, i) => {
                            return (
                                <div key={i} className=''>
                                    {data.name}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

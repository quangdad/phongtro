import React, { memo } from 'react'
import anonAvatar from '../assets/anon-avatar.png'
import icons from '../ultils/icons'

const { BsDot, BsTelephoneFill, SiZalo } = icons

const BoxInfo = ({ userData }) => {
    return (
        <div className='w-full bg-yellow-500 rounded-md flex flex-col items-center p-4 gap-4'>
            <img src={anonAvatar} alt="avatar" className='w-16 h-16 object-contain rounded-full' />
            <h2 className='font-medium text-xl'>Tên: {userData?.name}</h2>
            <h3 className='font-medium text-xl'>SĐT: {userData?.phone}</h3>
            <h4 className='font-medium text-xl'>Zalo: {userData?.phone}</h4>
            {/* <a className='bg-[#13BB7B] py-2 flex items-center justify-center gap-2 w-full rounded-md text-white font-bold text-lg' href="/">
                <BsTelephoneFill />{userData?.phone}
            </a>
            <a className='bg-white py-2 flex items-center justify-center gap-2 w-full rounded-md font-bold text-lg' href={`https://zalo.me/${userData?.zalo}`}>
                <SiZalo color='blue' size={35} />
            </a> */}

        </div>
    )
}

export default memo(BoxInfo)
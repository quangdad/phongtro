import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { formatVietnameseToString } from '../../ultils/Common/formatVietnameseToString'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../store/actions'
import { path } from '../../ultils/constant'
import icons from '../../ultils/icons'

const notActive = 'hover:bg-secondary2 px-4 h-full flex items-center bg-[#febb02]'
const active = 'hover:bg-secondary2 px-4 h-full flex items-center  bg-secondary2'
const {FaHome, BsChevronRight} = icons

const Navigation = ({ isAdmin }) => {

    const dispatch = useDispatch()
    const { categories } = useSelector(state => state.app)
    const { currentData } = useSelector(state => state.user)
    useEffect(() => {
        dispatch(actions.getCategories())
    }, [])
    return (
        <div className={`w-full flex ${isAdmin ? 'justify-center' : 'justify-center'} items-center h-[40px] bg-[#febb02] text-white`}>
            <div className='w-4/5 flex h-full items-center justify-center text-sm font-medium gap-5'>
                <div className='flex flex-col  h-full'>
                <NavLink
                    to={`/`}
                    className={({ isActive }) => isActive ? active : notActive}
                >
                    <FaHome />
                    Trang chủ
                </NavLink>
                </div>
                
                {categories?.length > 0 && categories.map(item => {
                    return (
                        <div key={item.code} className='h-full flex justify-center items-center' >
                            <NavLink
                                to={`/${formatVietnameseToString(item.value)}`}
                                className={({ isActive }) => isActive ? active : notActive}
                            >
                                {item.value}
                            </NavLink>
                        </div>
                    )
                })}
                {currentData.id && <NavLink
                    to={`/${path.WISHLIST}`}
                    className={({ isActive }) => isActive ? active : notActive}
                >
                    Bài đăng yêu thích
                </NavLink>}
                <NavLink
                    to={path.CONTACT}
                    className={({ isActive }) => isActive ? active : notActive}
                >
                    Liên hệ
                </NavLink>
            </div>
        </div>
    )
}

export default Navigation

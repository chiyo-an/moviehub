import { Link } from 'react-router-dom'
import React from 'react'

const NavBar = () => {
  return ( // Link로 간단히 연결
    <nav className="w-full bg-black text-white p-4 fixed top-0">
      <div className="max-w-[1600px] mx-auto flex justify-between items-center">
        <Link to="/" className="text-[30px] font-bold">movieHUB</Link>
        <div className="flex-1 mx-[32px]">
          <input 
            type="text"
            placeholder="보고 싶은 영화를 검색하세요"
            className="w-[350px] p-[4px] rounded-[8px] text-gray-900"
          />
        </div>
        <div className="flex gap-[16px]">
          <button className="w-[80px] h-[36px] bg-violet-500 rounded-[8px]">
            로그인
          </button>
          <button className="w-[80px] h-[36px] bg-violet-500 rounded-[8px]">
            회원가입
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
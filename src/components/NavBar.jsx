import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { searchMovies } from '../api/tmdb';
import { useDebounce } from '../hooks/useDebounce';

// 검색결과를 상위 컴포넌트로 전달하는 함수를 props로 받음
const NavBar = ({ onSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState(''); // 검색어 저장할 상태와 상태 갱신함수 선언
  const debouncedValue = useDebounce(searchTerm, 500); // 5초동안 추가 입력이 없을 때만 api호출

  useEffect(() => {
  const searchMoviesData = async () => {
    if (debouncedValue) {
      const results = await searchMovies(debouncedValue);
      onSearchResults(results.length > 0 ? results : null);
    } else {
      onSearchResults(null);
    }
  };

  searchMoviesData();
}, [debouncedValue, onSearchResults]); // 검색어가 변경될 때마다 실행

  
  return (
    <nav className="w-full bg-black text-white p-4 fixed top-0">
    <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
      <Link to="/" className="text-2xl sm:text-[30px] font-bold">movieHUB</Link>
      <div className="w-full sm:flex-1 sm:mx-[32px]">
        <input 
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="보고 싶은 영화를 검색하세요"
          className="w-full sm:w-[350px] p-[4px] rounded-[8px] text-gray-900"
        />
      </div>
      <div className="flex gap-[16px]">
        <button className="w-[80px] h-[36px] bg-violet-500 rounded-[8px] text-sm">
          로그인
        </button>
        <button className="w-[80px] h-[36px] bg-violet-500 rounded-[8px] text-sm">
          회원가입
        </button> 
      </div>
    </div>
  </nav>
  );
};

export default NavBar;
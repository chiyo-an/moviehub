import React, { useState } from 'react'

import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  // 검색결과를 저장할 상태와 갱신 함수 선언
  const [searchResults, setSearchResults] = useState(null);
  
  return (
    <>
      <NavBar onSearchResults={setSearchResults}/>
      <main className="pt-32 sm:pt-20 px-4">
        <Outlet context={[searchResults, setSearchResults]}/>
      </main>
    </>
  )
}

export default Layout
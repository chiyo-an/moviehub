import React, { useEffect, useState } from 'react'

import Layout from './components/Layout'
import MovieCard from './components/MovieCard'

const App = () => {
  
  // 영화 데이터를 저장할 상태와 상태 갱신 함수 선언. 초기값은 빈 배열
  const [movies, setMovies] = useState([]);
  
  // async, await로 비동기 처리
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch('/src/assets/data/movieListData.json'); // 로컬 JSON 파일에서 데이터 fetch
      const data = await response.json(); // 받아온 JSON파일을 바로 사용할 수 있도록 javascript 객체로 변환
      setMovies(data.results);
    }

    fetchMovies();
  }, []); // 컴포넌트 마운트 시 1번만 실행

  
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[1600px]">
        <h1 className="text-[30px] font-extrabold">영화 전체 보기</h1>
        <div className="flex flex-wrap justify-start gap-[33px]">
        {movies.map((movie) => ( // map을 이용하여 movies 배열의 각 영화 데이터를 MovieCard 컴포넌트로 변환
          // MovieCard에 props로 전달
          <MovieCard
            key={movie.id}
            title={movie.title} // 제목
            posterPath={movie.poster_path} // 이미지 경로
            voteAverage={movie.vote_average} // 평점
          />
        ))}
        </div>
      </div>
    </div>
  );
}

export default App

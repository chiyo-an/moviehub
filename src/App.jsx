import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout'
import MovieCard from './components/MovieCard'
import MovieDetail from './components/MovieDetail'
import { getPopularMovies } from './api/tmdb';

const App = () => {
  
  // 영화 데이터를 저장할 상태와 상태 갱신 함수 선언. 초기값은 빈 배열
  const [movies, setMovies] = useState([]);
  
  // async, await로 비동기 처리
  useEffect(() => {
    const fetchMovies = async () => {
      const movieData = await getPopularMovies();
      setMovies(movieData);
    }

    fetchMovies();
  }, []);
  

  
  return (
    <Routes>
      <Route path="/" element={
        <div className="flex justify-center">
          <div className="w-full max-w-[1600px]">
            <h1 className="text-[30px] font-semibold">인기 영화</h1>
            <div className="flex flex-wrap justify-start gap-[33px]">
              {movies.map((movie) => ( // movies 배열의 각 영화 데이터를 MovieCard 컴포넌트로 변환
                // MovieCard에 props로 전달
                <MovieCard
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  poster_path={movie.poster_path}
                  vote_average={movie.vote_average}
                />
              ))}
            </div>
          </div>
        </div>
      } />
      <Route path="/movie/:id" element={<MovieDetail />} />
    </Routes>
  );
}

export default App

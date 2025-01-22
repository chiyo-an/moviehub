import React, { useEffect, useState } from 'react';

import MovieCard from './components/MovieCard';
import { getPopularMovies } from './api/tmdb';
import { useOutletContext } from 'react-router-dom';

const App = () => {
  // 인기 영화 목록 저장할 상태와 상태 갱신 함수 선언, 상태 초기값 빈배열
  const [movies, setMovies] = useState([]);
  const [searchResults] = useOutletContext() || []; // undefined일 경우 대비 기본값 []

  useEffect(() => { 
    const fetchMovies = async () => {
      const movieData = await getPopularMovies();
      setMovies(movieData);
    }

    fetchMovies();
  }, []);

  // searchResults가 있으면 그것을 사용하고, 없으면 인기영화 목록 사용
  const moviesToDisplay = searchResults || movies;

  return (
    <div className="flex justify-center">
    <div className="w-full max-w-[1600px]">
      <h1 className="text-[30px] font-semibold px-4">
        {searchResults ? '검색 결과' : '인기 영화'} 
      </h1>
      <div className="flex flex-wrap justify-start sm:justify-between gap-4 md:gap-[33px] px-4">
        {moviesToDisplay.map((movie) => ( // 영화정보를 props로 전달
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
  );
};

export default App;
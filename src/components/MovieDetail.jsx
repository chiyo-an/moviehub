import React, { useEffect, useState } from 'react'
import { getMovieDetail, getPopularMovies } from '../api/tmdb';

import { useParams } from 'react-router-dom';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500'


const MovieDetail = () => {
  // 영화 디테일 데이터를 저장할 상태와 상태 갱신함수를 선언, 상태 초기값은 null
  const [movieDetail, setMovieDetail] = useState(null);
  const { id } = useParams(); // URL에서 영화 id 가져오기

  useEffect(() => {
    const fetchMovieDetail = async () => {
      const movieData = await getMovieDetail(id); // id로 해당 영화의 상세 정보만 가져오기
      if (!movieData.adult) {  // 성인 필터링
        setMovieDetail(movieData);
      }
    };

    fetchMovieDetail();
  }, [id]); // id가 바뀔때마다 실행

  return (
    <div className="max-w-[1200px] mx-auto p-[24px]">
      <div className="flex gap-[24px]">
        <div className="w-[500px] h-[700px]">
          <img 
            src={`${IMG_BASE_URL}${movieDetail?.poster_path}`} 
            alt={movieDetail?.title} 
            className="w-full h-full object-cover rounded-[8px]"
          />
        </div>
        <div className="flex-1 flex flex-col">
          <h3 className="text-[50px] p-[20px] font-extrabold">{movieDetail?.title}</h3>
          <p className="text-[20px] p-[20px]">평점: {movieDetail?.vote_average}</p>

          <div className="p-[20px]">
            {movieDetail?.genres?.map(genre => (
              <span className="inline-block rounded-[30px] pl-[10px] pr-[10px] mr-[10px] text-white bg-violet-500" key={genre.id}>
                {genre.name}
              </span>
            ))}
          </div>
          <div className="p-[20px]">
            <p className="text-[20px]">{movieDetail?.overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail
import React from 'react'
import { useNavigate } from 'react-router-dom'

// TMDB API의 이미지 기본 URL 선언
const IMG_BASIC_URL = 'https://image.tmdb.org/t/p/w500'

const MovieCard = ({title, posterPath, voteAverage}) => { // 카드에 표시할 제목, 포스터 이미지 경로, 평점 props로 받음
  
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/details');
  }
  
  return (
    <div onClick={handleClick} className="w-[200px]">
      <img src={`${IMG_BASIC_URL}${posterPath}`} alt={title} className="h-[300px]" />
      <h3 className="text-center">{title}</h3>
      <p className="text-center">평점: {voteAverage}</p>
    </div>
  )
}

export default MovieCard
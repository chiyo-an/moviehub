import React from 'react'
import { useNavigate } from 'react-router-dom'

// TMDB API의 이미지 기본 URL 선언
const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500'

const MovieCard = (props) => {
  // 카드에 표시할 제목, 아이디, 포스터 이미지 경로, 평점 props로 받음
  const { id, title, poster_path, vote_average } = props;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/movie/${id}`);
  }
  return (
    <div onClick={handleClick} className="w-[200px]">
      <img src={`${IMG_BASE_URL}${poster_path}`} alt={title} className="h-[300px]" />
      <h3 className="text-center">{title}</h3>
      <p className="text-center">평점: {vote_average}</p>
    </div>
  )
}

export default MovieCard
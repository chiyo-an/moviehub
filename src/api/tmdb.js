// API 주소, KEY값
const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_APP_TMDB_API_KEY; // 환경변수 사용

// 인기영화 호출
export const getPopularMovies = async () => { 
  const response = await fetch(
    `${TMDB_BASE_URL}/movie/popular?api_key=${API_KEY}&language=ko-KR&include_adult=false` // 성인필터 파라미터 추가
  );
  const data = await response.json();
  console.log("★=======데이터 확인:", data);

  return data.results;
  
}

// 영화 상세정보 호출
export const getMovieDetail = async (movieId) => { 
  const response = await fetch(
    `${TMDB_BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=ko-KR`
  );
  return response.json();
}

// 검색 기능
export const searchMovies = async (query) => {
  const response = await fetch(
    `${TMDB_BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=ko-KR&include_adult=false` // 성인필터 파라미터 추가
  );
  const data = await response.json();
  return data.results;
};
// API 주소, KEY값
const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_APP_TMDB_API_KEY; // 환경변수 사용

// 인기영화 호출
export const getPopularMovies = async () => { 
  const response = await fetch(
    `${TMDB_BASE_URL}/movie/popular?api_key=${API_KEY}&language=ko-KR`
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
  const data = await response.json();
  return data;
}

// 성인필터 adult false인것만
const filterAdultContent = (movies) => {
  return movies.filter(movie => !movie.adult);
}
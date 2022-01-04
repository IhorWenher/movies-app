const getMovies = state => state.movies.movies;
const getOneMovie = state => state.movies.oneMovie;
const getLoading = state => state.movies.loading;
const getError = state => state.movies.error;

const moviesSelectors = {
  getMovies,
  getOneMovie,
  getLoading,
  getError,
};

export default moviesSelectors;

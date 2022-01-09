const getMovies = state => state.movies.movies.items;
const getMoviesCount = state => state.movies.movies.count;
const getOneMovie = state => state.movies.oneMovie;
const getLoading = state => state.movies.loading;
const getError = state => state.movies.error;

const moviesSelectors = {
  getMovies,
  getMoviesCount,
  getOneMovie,
  getLoading,
  getError,
};

export default moviesSelectors;

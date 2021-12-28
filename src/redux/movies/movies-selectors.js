const getMovies = state => state.movies.movies;
const getLoading = state => state.movies.loading;
const getError = state => state.movies.error;

const moviesSelectors = {
  getMovies,
  getLoading,
  getError,
};

export default moviesSelectors;

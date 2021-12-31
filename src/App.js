import { Routes, Route } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userSelectors } from './redux/user';
import { moviesOperations } from './redux/movies';

import Container from './components/Container';
import { Spinner } from 'react-bootstrap';

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const MoviesView = lazy(() => import('./views/MoviesView'));
const LogoutView = lazy(() => import('./views/LogoutView'));

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    userSelectors.getIsFetchingCurrentUser,
  );
  const isLoginIn = useSelector(userSelectors.getIsLoggedIn);
  const token = useSelector(userSelectors.getUserToken);
  console.log(isFetchingCurrentUser, isLoginIn, token);

  useEffect(() => {
    if (isLoginIn) {
      dispatch(moviesOperations.getList);
    }
  }, [dispatch, isLoginIn]);
  return (
    <Container>
      {isFetchingCurrentUser ? (
        <Spinner />
      ) : (
        <>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route
                path="/"
                element={
                  <PublicRoute redirectTo="/movies" restricted>
                    <HomeView />
                  </PublicRoute>
                }
              />
              <Route
                exact
                path="/movies"
                element={
                  <PrivateRoute redirectTo="/">
                    <MoviesView />
                  </PrivateRoute>
                }
              />

              <Route
                path="/register"
                exact
                element={
                  <PublicRoute redirectTo="/login" restricted>
                    <RegisterView />
                  </PublicRoute>
                }
              />

              <Route
                path="/login"
                exact
                element={
                  <PublicRoute redirectTo="/" restricted>
                    <LoginView />
                  </PublicRoute>
                }
              />

              <Route
                path="/logout"
                element={
                  <PrivateRoute redirectTo="/login">
                    <LogoutView />
                  </PrivateRoute>
                }
              />
            </Routes>
          </Suspense>
        </>
      )}
    </Container>
  );
}

export default App;

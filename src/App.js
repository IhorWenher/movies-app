import { Routes, Route } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userOperations, userSelectors } from './redux/user';

import Container from './components/Container';
import { Spinner } from 'react-bootstrap';

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const MoviesView = lazy(() => import('./views/MoviesView'));

function App() {
  return (
    <Container>
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
                <PublicRoute redirectTo="/movies" restricted>
                  <LoginView />
                </PublicRoute>
              }
            />
          </Routes>
        </Suspense>
      </>
    </Container>
  );
}

export default App;

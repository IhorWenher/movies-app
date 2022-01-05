Hi, this is a movies-app!

I. To run successfully, you need to mount the docker image, which can be found
here https://hub.docker.com/r/webbylabhub/movies

1. Enter the command to copy the docker image "docker pull webbylabhub/movies".
2. Enter the command to run image "docker run --name movies -p 8000:8000
   webbylabhub/movies".

Congratulations, the server part is ready to use!

II. To successfully run a frontend, go to the site where the running application
is already compiled https://imv-movie-app.netlify.app/ , or follow the image
here

1. Enter the command to copy the docker image "docker pull venherihor/movies".
2. Enter the command to run image "docker run --name moviesfront -p 3000:3000
   venherihor/movies".

Project structure.

The project is implemented as a single-page application, so the App file has
routing and connection of six views through lazy loading (name, login, register,
movies, movieDetail, logout views).

Each view renders the required components located in the components folder.

All work with the global state is implemented through Redux, Redux-toolkit.

Redax is divided into authorization and work with movies (user, movies).

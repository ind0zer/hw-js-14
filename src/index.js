import { initGetMovies } from './actions/getMoviesAction.js';
import { initAddMovie } from './actions/addMovieAction.js';
import { initUpdateMovie } from './actions/updateMovieAction.js';
import { initPatchMovie } from './actions/patchMovieAction.js';
import { initDeleteMovie } from './actions/deleteMovieAction.js';

initGetMovies();
initAddMovie();
initUpdateMovie();
initPatchMovie();
initDeleteMovie();
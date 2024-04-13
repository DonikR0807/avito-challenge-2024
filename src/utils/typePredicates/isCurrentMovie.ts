import { CurrentMovie } from "../../Redux/Entities/CurrentMovie/currentMovieSlice";
import { isLinkedMovie } from "./isLinkedMovie";
import { isMovie } from "./isMovie";
import { isMovieRating } from "./isMovieRating";
import { isPersonInMovie } from "./isPersonInMovie";

export function isCurrentMovie(data: unknown): data is CurrentMovie {
  const currentMovie = data as CurrentMovie;

  if (!currentMovie) {
    return false;
  }

  const movie = isMovie(currentMovie);

  const hasIsSeries =
    typeof currentMovie.isSeries === "boolean" || currentMovie.isSeries == null;

  const hasRating = isMovieRating(currentMovie.rating);

  const hasPersons =
    Array.isArray(currentMovie.persons) &&
    (currentMovie.persons.length === 0 ||
      isPersonInMovie(currentMovie.persons[0]));

  const hasSimilarMovies =
    currentMovie.similarMovies == null ||
    (Array.isArray(currentMovie.similarMovies) &&
      (currentMovie.similarMovies.length === 0 ||
        isLinkedMovie(currentMovie.similarMovies[0])));

  return movie && hasRating && hasPersons && hasSimilarMovies && hasIsSeries;
}

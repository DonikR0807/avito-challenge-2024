import { Movie } from "../../Redux/Entities/Movies/moviesSlice";

export function isMovie(data: unknown): data is Movie {
    const movie = data as Movie;

    if (!movie) {
        return false;
    }

    const hasId = typeof movie.id === "number";

    const hasName = typeof movie.name === "string" || movie.name == null;

    const hasDescription =
      typeof movie.description === "string" || movie.description == null;

    const hasUrl =
      movie.poster &&
      (typeof movie.poster.url === "string" || movie.poster.url == null);

    const hasYear = typeof movie.year === "number" || movie.year == null;

    const hasAgeRating =
      typeof movie.ageRating === "number" || movie.ageRating == null;

    return (
      hasName && hasDescription && hasUrl && hasId && hasYear && hasAgeRating
    );
}
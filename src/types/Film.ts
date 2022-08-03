interface Country {
  country: string;
}

interface Genre {
  genre: string;
}

export interface FilmInTopFilms {
  filmId: number;
  nameRu: string;
  nameEn?: string;
  year: string;
  filmLength?: string;
  countries: Country[];
  genres: Genre[];
  rating: string;
  ratingVoteCount: number;
  posterUrl: string;
  posterUrlPreview: string;
  ratingChange?: any;
}

export interface Film {
  kinopoiskId: number;
  imdbId?: any;
  nameRu: string;
  nameEn?: string;
  nameOriginal: string;
  posterUrl: string;
  posterUrlPreview: string;
  coverUrl?: string;
  logoUrl?: string;
  reviewsCount: number;
  ratingGoodReview?: number;
  ratingGoodReviewVoteCount: number;
  ratingKinopoisk: number;
  ratingKinopoiskVoteCount: number;
  ratingImdb: number;
  ratingImdbVoteCount: number;
  ratingFilmCritics: number;
  ratingFilmCriticsVoteCount: number;
  ratingAwait?: number;
  ratingAwaitCount: number;
  ratingRfCritics: number;
  ratingRfCriticsVoteCount: number;
  webUrl: string;
  year: number;
  filmLength: number;
  slogan: string;
  description: string;
  shortDescription?: string;
  editorAnnotation?: string;
  isTicketsAvailable: boolean;
  productionStatus?: string;
  type: string;
  ratingMpaa: string;
  ratingAgeLimits: string;
  countries: Country[];
  genres: Genre[];
  startYear?: number;
  endYear?: number;
  serial: boolean;
  shortFilm: boolean;
  completed: boolean;
  hasImax: boolean;
  has3D: boolean;
  lastSync: Date;
}

export interface TopFilms {
  films: FilmInTopFilms[];
  pagesCount: number;
}

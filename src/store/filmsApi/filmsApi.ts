import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Film, TopFilms } from "../../types/Film";

export const filmsApi = createApi({
  reducerPath: "api/films",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://kinopoiskapiunofficial.tech/api/",
    prepareHeaders: (headers) => {
      headers.set("X-API-KEY", "96b4ddd4-36fc-4d20-9f53-256121c9af78");
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),

  endpoints: (build) => ({
    getFilm: build.query<Film, number>({
      query: (filmId: number) => `v2.2/films/${filmId}`,
    }),
    getTopPopularFilms: build.query<TopFilms, number>({
      query: (page: number) => `v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=${page}`,
    }),
  }),
});

export const { useGetFilmQuery, useGetTopPopularFilmsQuery } = filmsApi;

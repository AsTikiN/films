import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IFilm, ISimilarFilms, ITopFilms } from "../../types/IFilm";
import { HYDRATE } from "next-redux-wrapper";

export const filmsApi = createApi({
  reducerPath: "api/films",
  extractRehydrationInfo(action) {
    if (action.type === HYDRATE) {
      return action.payload.api;
    }
  },
  baseQuery: fetchBaseQuery({
    baseUrl: "https://kinopoiskapiunofficial.tech/api/",
    prepareHeaders: (headers) => {
      headers.set("X-API-KEY", "96b4ddd4-36fc-4d20-9f53-256121c9af78");
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),

  endpoints: (build) => ({
    getFilm: build.query<IFilm, number>({
      query: (filmId: number) => `v2.2/films/${filmId}`,
    }),
    getTopPopularFilms: build.query<ITopFilms, number>({
      query: (page: number) => `v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=${page}`,
    }),
    getSimilarFilms: build.query<ISimilarFilms, number>({
      query: (filmId: number) => `v2.2/films/${filmId}/similars`,
    }),
  }),
});

export const { useGetFilmQuery, useGetTopPopularFilmsQuery, useGetSimilarFilmsQuery } = filmsApi;

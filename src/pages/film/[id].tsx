import React from "react";
import MainLayout from "../../MainLayout";
import { useRouter } from "next/router";
import { useGetFilmQuery } from "../../store/filmsApi/filmsApi";
import { GetServerSideProps } from "next";

const CurrentFilm = () => {
  return (
    <MainLayout>
      <h1>123</h1>
    </MainLayout>
  );
};

export default CurrentFilm;

// export const getServerSideProps: GetServerSideProps = async (params) => {
//   const store = initStore()
//
//   await store.dispatch(getFilmById.initiate(params.query.id))
//
//   return {props: { initialReduxState: store.getState()}
//   }}

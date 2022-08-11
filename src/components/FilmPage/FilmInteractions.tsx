import React, { FC, useEffect, useState } from "react";
import PrimaryButton from "../UI/Buttons/PrimaryButton";
import { BsBookmark, BsBookmarkFill, BsStar, BsStarFill } from "react-icons/bs";
import { Stack } from "@mui/material";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface FilmInteractionsProps {
  kinopoiskId: number;
}

const FilmInteractions: FC<FilmInteractionsProps> = ({ kinopoiskId }) => {
  const [isSaved, setIsSaved] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const { addSavedFilm, addFavoriteFilm, removeSavedFilm, removeFavoriteFilm } = useActions();
  const savedFilms = useTypedSelector((state) => state.film.savedFilms);
  const favoriteFilms = useTypedSelector((state) => state.film.favoriteFilms);

  const handleToggleSavedFilm = () => {
    const filmId = kinopoiskId;
    if (!filmId) return;

    if (!savedFilms.includes(filmId)) {
      addSavedFilm(filmId);
    } else {
      removeSavedFilm(filmId);
    }
  };

  const handleToggleFavoriteFilm = () => {
    const filmId = kinopoiskId;
    if (!filmId) return;

    if (!favoriteFilms.includes(filmId)) {
      addFavoriteFilm(filmId);
    } else {
      removeFavoriteFilm(filmId);
    }
  };

  useEffect(() => {
    const localeSavedFilms = JSON.parse(localStorage.getItem("savedFilms"));
    const localeFavoriteFilms = JSON.parse(localStorage.getItem("favoriteFilms"));

    if (localeSavedFilms) {
      for (let elem of localeSavedFilms) {
        if (!savedFilms.includes(elem)) {
          addSavedFilm(elem);
        }
      }
    }
    if (localeFavoriteFilms) {
      for (let elem of localeFavoriteFilms) {
        if (!favoriteFilms.includes(elem)) {
          addFavoriteFilm(elem);
        }
      }
    }
  }, []);

  useEffect(() => {
    if (kinopoiskId) {
      setIsSaved(savedFilms.includes(kinopoiskId));
      localStorage.setItem("savedFilms", JSON.stringify(savedFilms));
    }
  }, [savedFilms]);

  useEffect(() => {
    if (kinopoiskId) {
      setIsFavorite(favoriteFilms.includes(kinopoiskId));
      localStorage.setItem("favoriteFilms", JSON.stringify(favoriteFilms));
    }
  }, [favoriteFilms]);

  return (
    <Stack direction={"row"} spacing={"10px"}>
      <PrimaryButton size={"medium"} color={"gradient"}>
        Смотреть
      </PrimaryButton>
      <PrimaryButton onClick={handleToggleSavedFilm} size={"small"}>
        {isSaved ? <BsBookmarkFill /> : <BsBookmark />}
      </PrimaryButton>
      <PrimaryButton onClick={handleToggleFavoriteFilm} size={"small"}>
        {isFavorite ? <BsStarFill /> : <BsStar />}
      </PrimaryButton>
    </Stack>
  );
};

export default FilmInteractions;

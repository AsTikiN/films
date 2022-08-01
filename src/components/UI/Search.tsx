import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import SearchIcon from "../icons/Search";
import FilledCloseSvg from '../icons/FilledCloseSvg';

interface Props {
  placeholder?: string,
  disabled?: boolean,
  ariaLabel?: string,
  onClick?: any,  
}

const Search = ({
  placeholder,
  disabled = false,
  ariaLabel,
  onClick
} : Props ) => {

  const [searchValue, setSearchValue] = useState("");

  const handleSearchCnage = (e: any) : void => {
    setSearchValue(e.target.value);
  }

  const handleCloseSearchClick = (e: any) : void => {
    setSearchValue("");
  }

  const SearchWrapper = styled("div")(({theme}): any =>({
    width: "300px",
    position: "relative",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "transparent",
    borderRadius: "12px",
  }))

  const SearchField = styled("input")(({ theme }): any => ({
    border: "1px solid transparent",
    borderRadius: "12px",
    padding: "15px 45px",
    lineHeight: "18px",
    width: "100%",
    backgroundColor: theme.palette.search.main,
    color: theme.palette.textColor.main,
    fontSize: "14px",
    outline: "none",
    fontWeight: 500,
    fontFamily: theme.typography.secondaryFont,

    "&::placeholder": {
      color: theme.palette.buttonsInactive.main, 
    },

    "&:hover": {
      borderColor: theme.palette.primary.main, 
    },

    "&:focus": {
      border: `1px solid ${theme.palette.primary.main}`,
    }
  })) 

  const SearchIconWrapper = styled("div")(({theme}): any =>({
    position: "absolute",
    left: "12px",
    top: "12px",
    pointerEvents: "none"
  }))

  const CloseIconWrapper = styled("div")(({theme}): any =>({
    position: "absolute",
    right: "12px",
    top: "12px",
    cursor: "pointer",
  }))

  return (
    <SearchWrapper>
      <SearchIconWrapper> 
        <SearchIcon />
      </SearchIconWrapper>
      <SearchField
      placeholder={placeholder}
      disabled={disabled}
      aria-label={ariaLabel}
      onClick={onClick}
      value={searchValue}
      autoFocus
      onChange={handleSearchCnage}
      />
      {
        searchValue &&
        <CloseIconWrapper onClick={handleCloseSearchClick}>
          <FilledCloseSvg />
        </CloseIconWrapper>
      }
      
    </SearchWrapper>
  )
}

export default Search;
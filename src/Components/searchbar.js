import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import BasicSelect from "./select";
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';

export default function CustomizedInputBase() {
    const Input = styled('input')({
        display: 'none',
      });
      
  return (
    <Paper
      className="searchBar"
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 700,border: "2px solid #ed6c02",height:"35px",borderRadius:'30px', display: { xs: "none",sm:'flex'} }}
    >
      <BasicSelect />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

      <InputBase
        sx={{ ml: 1, flex: 2 }}
        placeholder="What are you looking for..."
        inputProps={{ "aria-label": "What are you looking for..." }}
      />
      <label htmlFor="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" />
        <IconButton color="warning" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
      <IconButton type="submit" className="searchBtn" aria-label="search">
        <SearchIcon />
        <p>Search</p>
      </IconButton>
    </Paper>
  );
}

import { MenuItem, Select } from "@mui/material";
import React from "react";
import styled from "styled-components";

const SortSelect = ({ onChange }) => {
  return (
    <CustomSelect variant="outlined" value="" onChange={onChange}>
      <MenuItem value={"ASC"}>ASC</MenuItem>
      <MenuItem value={"DSC"}>DSC</MenuItem>
    </CustomSelect>
  );
};

export default SortSelect;

const CustomSelect = styled(Select)(() => ({
  width: 30,
  "&.MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
    },
  },
}));

import React, {useEffect, useState} from "react";
import { Pagination } from "@mui/material";
import {Box, Stack, Typography } from "@mui/material"
import { exerciseOptions, fetchData } from "../utils/fetchData";

const Exercises = ({exercises, setExercises, bodyPart}) => {
  return (
    <div>
      <Box id="exercises" sx={{mt: {
        lg:"100px"
      }}} mt="50px" p="20px"></Box>
      <Typography variant="h4">
        Showing Results
      </Typography>
    </div>
  )
}

export default Exercises

import React, {useEffect, useState} from "react";
import { Pagination } from "@mui/material";
import {Box, Stack, Typography } from "@mui/material"
import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "../components/ExerciseCard"
const Exercises = ({exercises, setExercises, bodyPart}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const exercisePerPage = 9
  console.log(exercises)
  const paginate = (e, value) => {
setCurrentPage(value)
window.scrollTo({top: 1800, behavior: "smooth"})
  }
  return (
      <Box id="exercises" sx={{mt: {
        lg:"100px"
      }}} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack direction="row" sx={{ gap: {lg:"100px", xs: "50px"}}} flexWrap="wrap" justifyContent="center">
        {exercises.map((
          exercise,index) => (
            <ExerciseCard key={index} exercise={exercise}/>
          )
        )}
      </Stack>
      <Stack mt="100px" alignItems="enter">
        <Pagination
        color="standard" shape="rounded"
        defaultPage={1}
        count={Math.ceil(exercisePerPage)}
        page={currentPage}
        onChange={paginate}
        size="large"

        />
      </Stack>

      </Box>
  )
}

export default Exercises

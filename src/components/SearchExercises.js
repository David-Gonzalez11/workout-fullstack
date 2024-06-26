import React, { useState, useEffect } from "react"
import { Box, Button, Stack, Typography, TextField } from "@mui/material"
import { exerciseOptions, fetchData } from "../utils/fetchData"
import HorizontalScrollBar from "./HorizontalScrollBar"
const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("")
  const [bodyParts, setBodyParts] = useState([])
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      )
      setSearch("")
      // setExercises(searchedExercises)
      setBodyParts(["all", ...bodyPartsData])
    }
    fetchExercisesData()
  }, [bodyParts])
  const handleSearch = async () => {
    if (search) {
    const exerciseData = async () => {}
      console.log(exerciseData)
      const searchedExercises = exerciseData.filter((exercise) => {
        return (
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
        )
      })
      setSearch("")
      setExercises(searchedExercises)
    }
  }
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome exercises you should know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="search exercises"
          sx={{
            input: { fontWeight: "700px", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTranform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: {
              lg: "20px",
              xs: "14px",
              height: "56px",
              position: "absolute",
              right: "0",
            },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollBar
          setBodyPart={setBodyPart}
          data={bodyParts}
          bodyPart={bodyPart}
          isBodyParts
        />
      </Box>
      <Box sx={{position: "relative", width: "100%", p: "20px"}}>
<HorizontalScrollBar data={bodyParts} />
      </Box>
    </Stack>
  )
}
export default SearchExercises

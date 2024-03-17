import React, { useState, useEffect } from "react"
import { Box } from "@mui/material"
import HeroBanner from "../components/HeroBanner"
import SearchExercises from "../components/SearchExercises"
import Exercises from "../components/Exercises"

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all")
    const [exercises, setExercises] = useState([])


  return (
    <Box>
      <HeroBanner />

      <SearchExercises setExercises={setExercises}
      bodyPart={bodyPart}
      setBodyParts={setBodyPart}
      />
      <Exercises setExercises={setExercises}
      bodyPart={bodyPart}
      setBodyParts={setBodyPart}/>
    </Box>
  )
}

export default Home

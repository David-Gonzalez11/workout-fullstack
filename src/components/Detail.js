import React from "react"
import { Typography, Stack, Button } from "@mui/material"
import bodyPart from "../icons/body-part.png"
import equipment from "../icons/equipment.png"
import Target from "../icons/target.png"
const Details = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, equipment, target } = exerciseDetail
  console.log(gifUrl)
  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{gap:{ lg:"35px", xs:"20px"}}}>
        <Typography>{name}</Typography>
        <Typography>
          Exercises keep ypu strong.
           {name} is one of the best exercises to target your abs. It will help you improve your mood and gain energy.
        </Typography>
      </Stack>
    </Stack>
  )
}

export default Details

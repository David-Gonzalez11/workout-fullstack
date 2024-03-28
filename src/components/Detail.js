import React from "react"
import { Typography, Stack, Button } from "@mui/material"
import bodyPartImage from "../icons/body-part.png"
import Equipment from "../icons/equipment.png"
import Target from "../icons/target.png"
const Details = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, equipment, target } = exerciseDetail
  const extraDetail = [
    {
      icon: bodyPartImage,
      name: bodyPart,
    },
    {
      icon: Target,
      name: target,
    },
    {
      icon: Equipment,
      name: equipment,
    },
  ]
  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography varinat="h3">{name}</Typography>
        <Typography variant="h6">
          Exercises keep ypu strong.
          {name} {` `}is one of the best exercises to target your {target}. It
          will help you improve your mood and gain energy.
        </Typography>
        {extraDetail.map((item) => {
          return (
            <Stack
              key={item.name}
              direction="row"
              gap="24px"
              alignItems="center"
            >
              <Button
                sx={{
                  background: "#fff2db",
                  borderRadius: "50%",
                  height: "100px",
                  width: "100px",
                }}
              >
                <img src={item.icon} alt={bodyPart} style={{ width: "50px" }} />{" "}
              </Button>
              <Typography variant="h5" textTransform="capitalize">{item.name}</Typography>
            </Stack>
          )
        })}
      </Stack>
    </Stack>
  )
}

export default Details

import React from "react"
import { Box, Stack, Typography, Button } from "@mui/material"
import Banner from "../images/banner.png"
const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px", ml: { sm: "50px" } } }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
        Check out the most effective exercises personalized to you
      </Typography>
      <Stack>
        <a
          href="#exercises"
          style={{
            marginTop: "45px",
            textDecoration: "none",
            width: "200px",
            textAlign: "center",
            background: "#FF2625",
            padding: "14px",
            fontSize: "22px",
            textTransform: "none",
            color: "white",
            borderRadius: "4px",
          }}
        >
          Explore Exercises
        </a>
      </Stack>

      {/* <Button variant="contained" color="error" href="#exercises" sx={{backgroundColor: "#ff2625", padding: "10px"}}> Explore Exercises</Button> */}
      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
      >
        Exercise
      </Typography>
      <img src={Banner} className="hero-banner-img" alt="gym-lady waling" />
    </Box>
  )
}

export default HeroBanner

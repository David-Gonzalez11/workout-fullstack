import React from "react";
import {Box, Stack, Typography}  from "@mui/material"
import Logo from "../images/Logo-1.png"
const Footer = () => {
  return (
  <Box  mt="20x" bgcolor="#fff34">
    <Stack gap="40px" alignItems={"center"} px="40px" pt="24px">
      <img src={Logo} width="200px" height="40px"/>
      <Typography>
        Made with Love by David Gonzalez
      </Typography>
    </Stack>
  </Box>
)


}
export default Footer

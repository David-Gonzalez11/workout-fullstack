import React from "react"
import { Box } from "@mui/material"
import BodyPart from "./BodyPart"
const HorizontalScrollBar = ({ data, bodyPart, setBodyPart }) => {
    if (!Array.isArray(data)) {
    console.error("Data is not an array.");
    return null; // or you can return a default component or message
  }
    <div>
      {data.map((item) => {
        return (
          <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            m="40px"
          >
            <BodyPart
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          </Box>
        )
      })}
    </div>

}

export default HorizontalScrollBar

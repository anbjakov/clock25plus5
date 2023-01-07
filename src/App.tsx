import React from "react";
import { Container } from "@chakra-ui/react";
import { Text, Grid, GridItem } from "@chakra-ui/react";
import Timer from "./components/Timer";
import BreakControls from "./components/BreakControls";
import SessionControls from "./components/SessionControls";
function App() {
  return (
    <div>
      <Container>
        <Grid
          h="200px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={4}
        >
          <GridItem colSpan={4}>
            <Text fontSize="3xl" color={"blue.600"} align="center">
              25 + 5 Clock
            </Text>
          </GridItem>
          <GridItem colSpan={2}>
            <BreakControls />
          </GridItem>
          <GridItem colSpan={2}>
            <SessionControls />
          </GridItem>
          <GridItem colSpan={4}>
            <Timer />
          </GridItem>
        </Grid>
      </Container>
    </div>
  );
}

export default App;

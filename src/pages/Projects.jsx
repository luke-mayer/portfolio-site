import { VStack, Grid, GridItem, Heading, Box } from "@chakra-ui/react";
import HeaderMain from "../components/HeaderMain";
import AbeCard from "../components/AbeCard";

function Projects() {
  return (
    <Grid
      templateAreas={`"header"
                  "main"
                  "projects"
                  "footer"`}
      gridTemplateRows={"auto auto 1fr 20px"}
      gridTemplateColumns={"1fr"}
      overflow="hidden"
      height="100vh"
      gap="1"
      fontWeight="bold"
      align="center"
      justify="center"
    >
      <GridItem pl="2" area={"header"}>
        <HeaderMain />
      </GridItem>
      <GridItem pl="2" area={"main"}>
        <VStack align="center" justify="center" spacing={6} m="6">
          <Heading as="h2" size="2xl" align="center">
            Projects
          </Heading>
        </VStack>
      </GridItem>
      <GridItem pl="2" area={"projects"} align="center" justify="center">
        <Box
          marginTop="3"
          marginRight={"calc(-1 * (100vw - 100%))"}
          width={"100vw"}
          p="2"
          maxHeight="70vh"
          align="center"
          justify="center"
          spacing={6}
          overflowY="scroll"
          overflowX="hidden"
        >
          <AbeCard />
          <AbeCard />
        </Box>
      </GridItem>
      <GridItem pl="2" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
}

export default Projects;

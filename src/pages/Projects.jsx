import { Grid, GridItem, Box } from "@chakra-ui/react";
import HeaderMain from "../components/HeaderMain";
import ProjectTabs from "../components/ProjectTabs";

function Projects() {
  return (
    <Grid
      templateAreas={`"header"
                  "projects"`}
      gridTemplateRows={"auto 1fr"}
      gridTemplateColumns={"1fr"}
      overflow="hidden"
      height="100vh"
      gap="1"
      align="center"
      justify="center"
    >
      <GridItem area={"header"}>
        <HeaderMain />
      </GridItem>
      <GridItem area={"projects"} align="center" justify="center">
        <Box
          width={"100vw"}
          maxHeight="90vh"
          align="center"
          justify="center"
          spacing={6}
          // overflowY="scroll"
          //overflowX="hidden"
        >
          <ProjectTabs />
        </Box>
      </GridItem>
    </Grid>
  );
}

export default Projects;

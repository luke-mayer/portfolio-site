import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import AbeCard from "./AbeCard";

function ProjectTabs() {
  return (
    <Tabs isFitted variant="enclosed">
      <TabList mb="1em">
        <Tab>OpenMammaFAANG inc.</Tab>
        <Tab>MichaelScott</Tab>
        <Tab>Abe20Questions</Tab>
        <Tab>DuMa</Tab>
      </TabList>
      <Box
        maxHeight="85vh"
        align="center"
        justify="center"
        overflowY="scroll"
        overflowX="hidden"
      >
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
            <AbeCard />
            <AbeCard />
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
          <TabPanel>
            <p>four!</p>
          </TabPanel>
        </TabPanels>
      </Box>
    </Tabs>
  );
}

export default ProjectTabs;

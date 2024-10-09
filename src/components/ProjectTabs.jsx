import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import MichaelScott from "./MichaelScott";
import OpenMamaaFAANG from "./OpenMamaaFAANG";
import Abe20Questions from "./Abe20Questions";

function ProjectTabs() {
  return (
    <Tabs isFitted variant="enclosed">
      <TabList mb="1em">
        <Tab>Michael Scott</Tab>
        <Tab>Abe 20 Questions Bot</Tab>
        <Tab>OpenMamaaFAANG Inc.</Tab>
        {/* <Tab>DuMa</Tab> */}
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
            <MichaelScott />
          </TabPanel>
          <TabPanel>
            <Abe20Questions />
          </TabPanel>
          <TabPanel>
            <OpenMamaaFAANG />
          </TabPanel>
        </TabPanels>
      </Box>
    </Tabs>
  );
}

export default ProjectTabs;

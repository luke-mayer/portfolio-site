import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import MichaelScott from "./MichaelScott";
import Abe20Questions from "./Abe20Questions";
import YouTubeCustomFeeds from "./YouTubeCustomFeeds";

function ProjectTabs() {
  return (
    <Tabs isFitted variant="enclosed">
      <TabList mb="1em">
        <Tab>YouTube Custom Feeds</Tab>
        <Tab>Michael Scott</Tab>
        <Tab>Abe 20 Questions Bot</Tab>
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
            <YouTubeCustomFeeds />
          </TabPanel>
          <TabPanel>
            <MichaelScott />
          </TabPanel>
          <TabPanel>
            <Abe20Questions />
          </TabPanel>
        </TabPanels>
      </Box>
    </Tabs>
  );
}

export default ProjectTabs;

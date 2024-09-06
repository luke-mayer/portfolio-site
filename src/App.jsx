import { Text, Heading, VStack, Flex, StackDivider } from "@chakra-ui/react";
import HeaderMain from "./components/HeaderMain";

function App() {
  return (
    <Flex
      h="100vh"
      direction="column"
      divider={<StackDivider borderColor="gray.200" />}
    >
      <HeaderMain />
      <VStack h="100%" align="center" justify="center" spacing={6}>
        <Heading as="h2" size="2xl" align="center">
          Hi, I&apos;m Luke
        </Heading>
        <Text fontSize="xl" align="center" maxWidth="500px">
          I have a deep passion for solving problems, whether that means
          tracking down bugs in code, reaching beneficial compromises with
          peers, or finding more effecient ways to go about my day.
        </Text>
      </VStack>
    </Flex>
  );
}

export default App;

import {
  Text,
  Heading,
  VStack,
  Flex,
  StackDivider,
  ButtonGroup,
  Button,
  Link,
  Image,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
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
        <Image
          borderRadius="full"
          boxSize="250px"
          src="src/assets/profile-pic-square.png"
          alt="Luke-Photo"
        />
        <Heading as="h2" size="2xl" align="center">
          Hi, I&apos;m Luke
        </Heading>
        <Text fontSize="xl" align="center" maxWidth="500px">
          I&apos;m a senior Computer Science major at the University of
          Maryland, specializing in Machine Learning and graduating in December,
          2024. I am currently seeking a full-time, entry level Software
          Engineer/Developer job.
        </Text>
        <ButtonGroup
          p="4"
          spacing="6"
          colorScheme="blue"
          size="lg"
          variant="outline"
        >
          <Link as={ReactRouterLink} to="/about">
            <Button>About</Button>
          </Link>
          <Link as={ReactRouterLink} to="/projects">
            <Button>Projects</Button>
          </Link>
          <Link as={ReactRouterLink} to="/contact">
            <Button>Contact</Button>
          </Link>
        </ButtonGroup>
      </VStack>
    </Flex>
  );
}

export default App;

import {
  //Button,
  //Stack,
  Text,
  Heading,
  //Link as ChakraLink,
  StackDivider,
  Flex,
  VStack,
  Box,
  UnorderedList,
  ListItem,
  Link,
} from "@chakra-ui/react";
import HeaderMain from "../components/HeaderMain";

function About() {
  return (
    <Flex
      h="100vh"
      direction="column"
      divider={<StackDivider borderColor="gray.200" />}
    >
      <HeaderMain />
      <VStack
        h="100%"
        align="center"
        justify="center"
        spacing={6}
        overflowY="scroll"
        overflowX="hidden"
      >
        <Box maxHeight="90vh" align="center" justify="center">
          <Box textAlign="left" mt={8} maxWidth={"600"}>
            {/* About Me Section */}
            <Heading as="h2" size="lg" mb={4} textAlign={"center"}>
              About Me
            </Heading>
            <Text textAlign={"center"}>
              I&apos;m passionate about problem-solving and back-end
              development, thriving on tackling complex challenges and finding
              innovative solutions, whether individually or as part of a team.
              I&apos;m always seeking opportunities to deepen my software
              engineering expertise and refine my technical and problem-solving
              skills. As a highly motivated self-learner, I&apos;m eager to
              master new technologies and continuously improve my craft.
            </Text>

            {/* Technical Skills Section */}
            <Box mt={8}>
              <Heading as="h2" size="lg" mb={4} textAlign={"center"}>
                Technical Skills
              </Heading>
              <Text textAlign={"left"}>
                <strong>Proficient:</strong> Python, Java <br />
                <strong>Familiar:</strong> JavaScript, C, HTML/CSS, Dart <br />
                <strong>Experience with Technologies/Frameworks:</strong> AWS,
                ReactJS, Keras/PyTorch
              </Text>
            </Box>

            {/* Full Resume */}
            <Box mt={8}>
              <Heading as="h2" size="lg" mb={4} textAlign={"center"}>
                Full Resume
              </Heading>

              <Text fontSize="lg" fontWeight="bold" textAlign={"center"}>
                Luke Mayer
              </Text>
              <Text textAlign={"center"}>lukemayer316@gmail.com</Text>
              <Text textAlign={"center"}>
                <Link href="https://github.com/luke-mayer" isExternal>
                  github.com/luke-mayer
                </Link>{" "}
                |{" "}
                <Link href="https://linkedin.com/in/luke-mayer316" isExternal>
                  linkedin.com/in/luke-mayer316
                </Link>{" "}
                |{" "}
                <Link href="https://lukemayer.com" isExternal>
                  lukemayer.com
                </Link>
              </Text>

              <Heading as="h3" size="md" mt={6} mb={4}>
                EDUCATION
              </Heading>
              <Text>
                University of Maryland – College Park, MD <br />
                Expected Graduation Dec 2024 <br />
                Bachelor of Science in Computer Science (Machine Learning Track){" "}
              </Text>

              <Heading as="h3" size="md" mt={6} mb={4}>
                TECHNICAL SKILLS
              </Heading>
              <Text>
                <strong>Proficient:</strong> Python, Java <br />
                <strong>Familiar:</strong> JavaScript, C, HTML/CSS, Dart <br />
                <strong>Experience with Technologies/Frameworks:</strong> AWS,
                ReactJS, Keras/PyTorch
              </Text>

              <Heading as="h3" size="md" mt={6} mb={4}>
                TECHNICAL EXPERIENCE
              </Heading>

              <Text mt={4}>
                <strong>OpenMamaaFAANG Inc. (Aug 2024-Present)</strong> <br />
                Video Game - Java
              </Text>
              <UnorderedList pl={4}>
                <ListItem>
                  Developed a satirical, text-based Java game where users
                  experience life as a junior developer at an AI-powered tech
                  company.
                </ListItem>
                <ListItem>
                  Applied static and instance variables to manage player and
                  environment states dynamically.
                </ListItem>
                <ListItem>
                  Built GUI minigames based on computer science concepts using
                  Java Swing to improve user engagement.
                </ListItem>
              </UnorderedList>

              <Text mt={4}>
                <strong>Honest Abe (abe20questions.com) (Jul-Aug 2024)</strong>{" "}
                <br />
                AI 20 Questions Bot - Python, JavaScript (AWS, ReactJS, Chakra
                UI, OpenAI API)
              </Text>
              <UnorderedList pl={4}>
                <ListItem>
                  Deployed a serverless web app allowing users to play 20
                  Questions against an AI opponent.
                </ListItem>
                <ListItem>
                  Engineered a backend to prevent cheating by storing a random
                  noun and discreetly feeding it to the AI.
                </ListItem>
                <ListItem>
                  Developed an intuitive front-end with ReactJS and Chakra UI.
                </ListItem>
              </UnorderedList>

              <Text mt={4}>
                <strong>DuMa (aiduma.com) (Jun-Jul 2024)</strong> <br />
                AI Dungeon Master - Python (AWS, OpenAI API)
              </Text>
              <UnorderedList pl={4}>
                <ListItem>
                  Collaborated to create a website allowing users to participate
                  in a Dungeons and Dragons campaign guided by an AI dungeon
                  master.
                </ListItem>
                <ListItem>
                  Built a scalable backend using AWS Lambda, enabling
                  low-latency communication.
                </ListItem>
                <ListItem>
                  Managed HTTP requests, session data, and conversation history
                  with AWS DynamoDB.
                </ListItem>
              </UnorderedList>

              <Text mt={4}>
                <strong>Michael Scott (Apr-May 2024)</strong> <br />
                Deep Reinforcement Learning Model - Python (Keras/PyTorch,
                Gymnasium)
              </Text>
              <UnorderedList pl={4}>
                <ListItem>
                  Built a reinforcement learning model to play Geometry Dash,
                  increasing performance by 300% with random batch training and
                  double Q-learning.
                </ListItem>
                <ListItem>
                  Automated terminal state detection via pixel-level game
                  screenshot analysis, achieving 99% accuracy in tracking game
                  completion.
                </ListItem>
              </UnorderedList>

              <Heading as="h3" size="md" mt={6} mb={4}>
                WORK EXPERIENCE
              </Heading>
              <Text>
                <strong>Steri-Clean Colorado (Jul 2018 - Jun 2021)</strong>{" "}
                <br />
                Biohazard Cleaning Technician
              </Text>
              <UnorderedList pl={4}>
                <ListItem>
                  Cleaned and sanitized biohazardous materials from crime scenes
                  and hoarded environments.
                </ListItem>
                <ListItem>
                  Disinfected residential and commercial spaces to mitigate
                  COVID-19.
                </ListItem>
                <ListItem>
                  Oversaw team operations, delegating tasks and ensuring client
                  satisfaction.
                </ListItem>
              </UnorderedList>
            </Box>
          </Box>
        </Box>
      </VStack>
    </Flex>
  );
}

export default About;

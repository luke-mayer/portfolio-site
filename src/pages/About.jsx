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
  Image,
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
        marginBottom="6"
      >
        <Box maxHeight="90vh" align="center" justify="center">
          <Image
            borderRadius="full"
            boxSize="250px"
            src="/images/profile-pic-square.png"
            alt="Luke-Photo"
          />
          <Box textAlign="left" mt={8} maxWidth={"600"}>
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

            <Box mt={8}>
              <Heading as="h2" size="lg" mb={4} textAlign={"center"}>
                Technical Skills
              </Heading>
              <Text textAlign={"left"}>
                <strong>Proficient:</strong> Python, Golang <br />
                <strong>Familiar:</strong> SQL, C, Java, JavaScript, HTML/CSS{" "}
                <br />
                <strong>Experience with Technologies/Frameworks:</strong> AWS,
                Google Cloud Platform, Git, ReactJS, PostgreSQL, Linux/Unix
              </Text>
            </Box>

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
                Graduated Dec 2024 <br />
                Bachelor of Science in Computer Science (Machine Learning Track){" "}
              </Text>

              <Heading as="h3" size="md" mt={6} mb={4}>
                TECHNICAL SKILLS
              </Heading>
              <Text>
                <strong>Proficient:</strong> Python, Golang <br />
                <strong>Familiar:</strong> SQL, C, Java, JavaScript, HTML/CSS{" "}
                <br />
                <strong>Experience with Technologies/Frameworks:</strong> AWS,
                Google Cloud Platform, Git, ReactJS, PostgreSQL
              </Text>

              <Heading as="h3" size="md" mt={6} mb={4}>
                TECHNICAL EXPERIENCE
              </Heading>

              <Text mt={4}>
                <strong>YouTube Custom Feeds (Oct 2024-Present)</strong> <br />
                Chrome Extension - Golang, SQL, JavaScript, HTML/CSS
                (PostgreSQL, Google Cloud Platform)
              </Text>
              <UnorderedList pl={4}>
                <ListItem>
                  Developed a Chrome extension that enables users to create
                  personalized YouTube feeds, offering streamlined access to
                  recent videos from user-curated selections of YouTube
                  channels.
                </ListItem>
                <ListItem>
                  Engineered a Golang backend to handle concurrent HTTP requests
                  from the frontend, storing and retrieving user-specific feeds
                  and channel data from a PostgreSQL database, and optimizing
                  YouTube API calls to efficiently fetch recent videos from
                  multiple channels within each feed.
                </ListItem>
                <ListItem>
                  Architected a PostgreSQL database schema that utilizes
                  relational tables to store channels and feeds separately with
                  a linking table, optimizing data efficiency and minimizing
                  redundant data storage across multiple users by only storing
                  one instance of a channel even if it is contained in multiple
                  feeds.
                </ListItem>
                <ListItem>
                  Deployed the backend on Google Cloud Run and the PostgreSQL
                  database on Google Cloud SQL, ensuring scalable
                  infrastructure, seamless performance under load, and reliable
                  access to user data.
                </ListItem>
                <ListItem>
                  Built an intuitive and accessible frontend with JavaScript,
                  incorporating caching mechanisms to store recent feed video
                  data locally, reducing backend requests and minimizing calls
                  to the YouTube API for an optimized user experience and faster
                  load times.
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
                <strong>Michael Scott (Apr-May 2024)</strong> <br />
                Deep Reinforcement Learning Model - Python (Keras/PyTorch,
                Gymnasium)
              </Text>
              <UnorderedList pl={4}>
                <ListItem>
                  Collaborated with 4 other students to build a reinforcement
                  learning model to play Geometry Dash.
                </ListItem>
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

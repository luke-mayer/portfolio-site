import {
  Box,
  Heading,
  ListItem,
  UnorderedList,
  Link,
  Text,
  Image,
  Divider,
} from "@chakra-ui/react";

export default function Abe20Questions() {
  return (
    <Box textAlign="left" maxWidth="600px" fontSize="md">
      <Heading
        as="h1"
        size="lg"
        mb={4}
        paddingBottom="4"
        paddingTop="4"
        textAlign="center"
      >
        Abe - The Honest 20 Questions Bot
      </Heading>

      <Divider />

      <Box textAlign={"left"} paddingTop="4">
        <Text>
          Github:{" "}
          <Link
            href="https://github.com/luke-mayer/open-mamaa-faang-inc"
            isExternal
          >
            https://github.com/luke-mayer/open-mamaa-faang-inc
          </Link>
        </Text>
        <Text>
          Website:{" "}
          <Link href="https://abe20questions.com" isExternal>
            https://abe20questions.com
          </Link>
        </Text>
      </Box>

      {/* Overview */}
      <Box id="overview" mt={8}>
        <Heading as="h2" size="md" mb={4} textAlign="center">
          Overview
        </Heading>
        <Text>
          Did you know, ChatGPT and other large language models are notorious
          cheats!? At least when it comes down to good old-fashioned 20
          Questions, the game in which one person thinks of an object and
          another asks them 20 yes-or-no questions with the goal of deducing the
          object.
        </Text>
        <Text mt={4}>
          However, ChatGPT is incapable of choosing an object to begin with and
          can provide inconsistent answers. Abe, the Honest 20 Questions Bot, on
          the other hand, selects an object, remembers it, and stays honest
          throughout the game. Think you can deduce Abe&apos;s object? Ask your
          20 questions at the link above.
        </Text>
      </Box>

      {/* How It Works */}
      <Box id="how-it-works" mt={8}>
        <Heading as="h2" size="md" mb={4} textAlign="center">
          How It Works
        </Heading>
        <Text>
          Abe is powered by OpenAI API, but with key tweaks that allow him to do
          what regular ChatGPT cannot. ChatGPT relies solely on conversation
          history, making it unable to consistently remember the object
          throughout the game.
        </Text>
        <Text mt={4}>
          In Abe&apos;s case, the object is selected from a list of over 500
          concrete nouns at random and stored independently from the model. This
          ensures Abe&apos;s honesty, as the object remains consistent in the
          backend while the model is prompted with the object in real-time.
        </Text>
        <Text mt={4}>
          When the user is ready to guess the object, their input is compared
          against the object stored in the independent backend memory as an
          extra layer of protection to ensure that the model does not change the
          object or tell the user they are correct when they are not in an
          effort to be agreeable.
        </Text>
        <Text mt={4}>
          Prompt engineering is also utilized to instruct the model to never
          disclose the object, even if the user explicitly asks it to, and to
          only answer &quot;yes&quot; or &quot;no&quot; to yes-or-no questions.
          In the case that the user asks questions that are not in the yes-or-no
          format, the model is instructed to correct the user and request that
          they ask only yes-or-no questions. In this instance, the user would
          forfeit one of their 20 questions.
        </Text>
      </Box>

      {/* Tech Stack */}
      <Box id="tech-stack" mt={8}>
        <Heading as="h2" size="md" mb={4} textAlign="center">
          Tech Stack
        </Heading>

        <Text>
          This was developed as a full-stack web application utilizing AWS
          serverless cloud computing. The used languages, frameworks, libraries,
          and APIs are outlined below:
        </Text>

        {/* Front-End */}
        <Box id="front-end" mt={6} textAlign={"left"}>
          <Heading as="h4" size="sm" mb={2}>
            Front-End
          </Heading>
          <UnorderedList>
            <ListItem>React.js + Vite</ListItem>
            <ListItem>Chakra UI (React component library)</ListItem>
            <ListItem>AWS Amplify (site hosting)</ListItem>
            <ListItem>AWS Route 53 (custom domain name)</ListItem>
          </UnorderedList>
        </Box>

        {/* Backend */}
        <Box id="backend" mt={6} textAlign={"left"}>
          <Heading as="h4" size="sm" mb={2}>
            Backend
          </Heading>
          <UnorderedList>
            <ListItem>AWS API Gateway (RESTful HTTP API endpoints)</ListItem>
            <ListItem>Python (hosted with AWS Lambda)</ListItem>
            <ListItem>
              AWS DynamoDB (NoSQL database used to store session data and the
              object)
            </ListItem>
            <ListItem>OpenAI API</ListItem>
          </UnorderedList>
        </Box>
      </Box>

      {/* Diagram */}
      <Box mt={8}>
        <Image
          src="/images/abe-20-questions-diagram-transparent.drawio.png"
          alt="Abe 20 Questions Bot Diagram"
        />
      </Box>

      {/* Acknowledgments */}
      <Box id="acknowledgments" mt={8}>
        <Heading as="h2" size="md" mb={4} textAlign="center">
          Acknowledgments
        </Heading>
        <Text>
          This project was inspired by the episode{" "}
          <Link href="https://youtu.be/ztNdagyT8po?si=fHDZF8ycAWKt5xG1&t=666">
            &quot;There are monsters in your LLM&quot;
          </Link>{" "}
          from the Machine Learning Street Talk podcast with guest Professor
          Murray Shanahan. This episode discussed how ChatGPT and other LLMs
          were incapable of fairly playing the 20 Questions game, which led to
          the creation of this project.
        </Text>
      </Box>
    </Box>
  );
}

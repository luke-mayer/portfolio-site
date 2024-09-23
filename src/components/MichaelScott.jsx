import {
  Box,
  Heading,
  ListItem,
  UnorderedList,
  Link,
  Text,
} from "@chakra-ui/react";

export default function MichaelScott() {
  return (
    <Box textAlign="center" maxWidth="600px">
      <Heading as="h1" size="lg" mb={4}>
        Michael Scott - The Hardcore Parkour Geometry Dash Reinforcement
        Learning Model
      </Heading>

      <Box textAlign={"left"}>
        <Text>
          Github:{" "}
          <Link href="https://github.com/luke-mayer/michael-scott" isExternal>
            https://github.com/luke-mayer/michael-scott
          </Link>
        </Text>
      </Box>

      {/* Forward */}
      <Box id="forward" mt={8} textAlign="center">
        <Heading as="h2" size="md" mb={4}>
          Forward
        </Heading>
        <Text textAlign={"center"}>
          This project began as a final group project for the UMD computer
          science course CMSC421 (Intro to Artificial Intelligence). It was a
          collaboration between Daniel Guerrero-Martin, Ellison Eitel, Justin
          Kerns, Luke Mayer (me), and Rithvik Malladi. This is a fork of that
          original project that seeks to refine the training methods originally
          used in order to create a model with improved performance. Currently,
          the project is very similar to the original CMSC421 project with some
          minor tweaks and refinements.
        </Text>
      </Box>

      {/* Overview */}
      <Box id="overview" mt={8} textAlign="center">
        <Heading as="h2" size="md" mb={4}>
          Overview
        </Heading>
        <Text>
          Michael Scott is a reinforcement learning model that is designed to
          beat the Geometry Dash levels. Currently, Michael Scott can beat
          non-space ship sections (more on that later) of the Stereo Madness
          Level. Michael Scott is trained using a neural network that implements
          double deep q-learning. &quot;Double&quot; refers to the use of a
          second target network that updates weights from the online model at
          less frequent intervals in order to stabilize training and prevent
          convergence on suboptimal policies. &quot;Deep&quot; refers to the use
          of multi-layered deep neural network to update model weights.
          &quot;Q-learning&quot; refers to the use of the q-learning method of
          reinforcement learning which is more forward thinking in how it
          calculates rewards for given actions.
        </Text>
      </Box>

      {/* How It Works */}
      <Box id="how-it-works" mt={8} textAlign="center">
        <Heading as="h2" size="md" mb={4}>
          How It Works
        </Heading>

        {/* Implementation */}
        <Box id="implementation" mt={6}>
          <Heading as="h4" size="sm" mb={2}>
            Implementation
          </Heading>
          <Text>
            One of the things that sets this reinforcement learning project
            aside from other, similar ones is that it uses a commercial, Steam
            version of Geometry Dash as opposed to a recreation that allows
            backend access to the current game state and controls. Screenshots
            of the game serve as the state of the game. Simulated keyboard
            inputs are used to allow the model to play the game in real-time.
            The game window is reduced to a size of 220 x 260 and the
            screenshots that serve as the state of the game are further cropped
            to a size of 80 x 150.
          </Text>
        </Box>

        {/* Built With */}
        <Box id="built-with" mt={6} textAlign={"left"}>
          <Heading as="h4" size="sm" mb={2}>
            Built With
          </Heading>
          <UnorderedList>
            <ListItem>Python</ListItem>
            <ListItem>
              Gymnasium by Farama Foundation (Training environment)
            </ListItem>
            <ListItem>
              Pytorch (A framework for building deep learning models)
            </ListItem>
            <ListItem>Keras (A high-level wrapper for Pytorch)</ListItem>
          </UnorderedList>
        </Box>

        {/* Limitations */}
        <Box id="limitations" mt={6}>
          <Heading as="h3" size="sm" mb={2}>
            Limitations
          </Heading>
          <Text>
            The main obstacle to this model being able to fully beat Geometry
            Dash levels is that Geometry Dash has &quot;space-ship&quot;
            sections in its levels. In these sections, the nature of the game
            changes significantly.
          </Text>
        </Box>
      </Box>

      {/* Acknowledgments */}
      <Box id="acknowledgments" mt={8} textAlign="center">
        <Heading as="h2" size="md" mb={4}>
          Acknowledgments
        </Heading>
        <Text>
          Full citations can be found in the original report for the CMSC421
          class project which can be found here
          <Link href="https://github.com/luke-mayer/michael-scott/tree/MichaelScott6.0/documentation">
            {" "}
            *documentation*{" "}
          </Link>
          .
        </Text>
      </Box>
    </Box>
  );
}

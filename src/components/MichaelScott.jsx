import {
  Box,
  Heading,
  ListItem,
  UnorderedList,
  Link,
  Text,
  Divider,
} from "@chakra-ui/react";

export default function MichaelScott() {
  return (
    <Box
      textAlign="left"
      maxWidth="600px"
      paddingBottom="4"
      paddingTop="4"
      fontSize="md"
    >
      <Heading as="h1" size="lg" mb={4} textAlign="center">
        Michael Scott - Deep Reinforcement Learning Model
      </Heading>

      <Divider />

      <Box textAlign={"left"} paddingTop="4">
        <Text>
          Github:{" "}
          <Link href="https://github.com/luke-mayer/michael-scott" isExternal>
            https://github.com/luke-mayer/michael-scott
          </Link>
        </Text>
      </Box>

      {/* Forward */}
      <Box id="forward" mt={8}>
        <Heading as="h2" size="md" mb={4} textAlign="center">
          Forward
        </Heading>
        <Text>
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
      <Box id="overview" mt={8}>
        <Heading as="h2" size="md" mb={4} textAlign="center">
          Overview
        </Heading>
        <Text>
          &#9;Michael Scott is a reinforcement learning model that is designed
          to play the Geometry Dash video game. Currently, Michael Scott can
          beat non-space ship sections (more on that later) of the Stereo
          Madness Level. Michael Scott is trained using a neural network that
          implements double deep q-learning. &quot;Double&quot; refers to the
          use of a second target network that updates weights from the online
          model at less frequent intervals in order to stabilize training and
          prevent convergence on suboptimal policies. &quot;Deep&quot; refers to
          the use of multi-layered deep neural network to update model weights.
          &quot;Q-learning&quot; refers to the use of the q-learning method of
          reinforcement learning which is more forward thinking in how it
          calculates rewards for given actions.
        </Text>
      </Box>

      {/* How It Works */}
      <Box id="how-it-works" mt={8}>
        <Heading as="h2" size="md" mb={4} textAlign="center">
          How It Works
        </Heading>

        {/* Implementation */}
        <Box id="implementation" mt={6}>
          <Heading as="h4" size="sm" mb={2} textAlign="center">
            Implementation
          </Heading>
          <Text mb="2">
            One of the things that sets this reinforcement learning project
            aside from other, similar ones is that it uses a commercial, Steam
            version of Geometry Dash as opposed to a recreation that allows
            backend access to the current game state and controls. Instead,
            screenshots of the game serve as the state and simulated keyboard
            inputs are used to allow the model to train and play the game in
            real-time. The game window is reduced to a size of 220 x 260 and the
            screenshots that serve as the state of the game are further cropped
            to a size of 80 x 150. This is done to reduce the size of inputs to
            the neural network, which in turn reduces the time it takes for one
            epoch or frame of training. The images are also grayscaled to reduce
            the size of the input and lower complexity. A desktop system with an
            Nvidia RTX 3080 is able to achieve around 20 epochs, or frames per
            second during training.
          </Text>
          <Text mb="2">
            Isolated screenshots of the progress bar are used to determine
            progress and overall performance. The progress bar is also key in
            determining the terminal state when the model dies and restarts the
            level. We can determine when the model dies and restarts by when the
            progress bar resets to zero. This is extremely important for
            providing feedback to the model as it gets rewarded for every frame
            it is alive and punished severely if it dies. It is also minorly
            punished for every time it jumps. This is to motivate the model to
            only jump when necessary to avoid death.
          </Text>
          <Text>
            See the original report for the CMSC421 class project
            <Link href="https://github.com/luke-mayer/michael-scott/tree/MichaelScott6.0/documentation">
              {" "}
              *found here*{" "}
            </Link>
            for a more detailed breakdown of the project as well as cited
            sources that go into much more detail on deep learning, q-learning,
            and other concepts used in this project.
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
          <Heading as="h3" size="sm" mb={2} textAlign="center">
            Limitations
          </Heading>
          <Text>
            The main obstacle to this model being able to fully beat Geometry
            Dash levels is that Geometry Dash has space-ship sections in its
            levels. In these sections, the nature of the game changes
            significantly. In the normal sections, the player jumps to avoid
            obstacles. This involves taking the jump action once which triggers
            an animation lasting several epochs before more input is required.
            In the space-ship section, the player holds the jump button to fly
            higher and falls otherwise. The act of holding jump is extremely
            difficult in the current implementation of inputting actions with
            the process of holding down jump being interrupted by the processes
            of the neural network as it trains in real-time. The space-ship
            sections are also much more dynamic which leads to many more
            possible states which makes it harder for the model to converge on
            an optimal policy. Finding solutions to this problem is the next
            goal of this project.
          </Text>
        </Box>
      </Box>

      {/* Acknowledgments */}
      <Box id="acknowledgments" mt={8}>
        <Heading as="h2" size="md" mb={4} textAlign="center">
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

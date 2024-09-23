import { Box, Heading, Link, Text } from "@chakra-ui/react";

export default function OpenMamaaFAANG() {
  return (
    <Box textAlign="center" maxWidth="600px">
      <Heading as="h1" size="lg" mb={4}>
        OpenMamaaFAANG Inc.
      </Heading>

      <Box textAlign={"left"}>
        <Text>
          Github:{" "}
          <Link
            href="https://github.com/luke-mayer/open-mamaa-faang-inc"
            isExternal
          >
            https://github.com/luke-mayer/open-mamaa-faang-inc
          </Link>
        </Text>
      </Box>

      {/* Onboarding */}
      <Box id="onboarding" mt={8}>
        <Heading as="h2" size="md" mb={4}>
          Onboarding
        </Heading>
        <Text>
          Hi! And welcome to OpenMamaaFAANG Inc., a cutting-edge AI-powered tech
          company with nothing but good intentions, safe practices, and an
          employee-first and family-esque work environment. Here at
          OpenMamaaFAANG Inc., you get to experience a new life as a junior
          developer. You may think that the day-to-day toil of software
          development may get a little dull with the text-based nature of this
          Java game, but fear not! With Swift-powered GUI minigames that
          incorporate computer science concepts to keep your mental edge sharp,
          you won&apos;t be bored anytime soon!
        </Text>
        <Text mt={4}>
          Do your job well by completing tasks such as finding the bug in the
          length 16 array in only 4 guesses. Or track down the escaped Copilot
          AI coding assistant and make sure he gets back in his home drive where
          he belongs. Doing well on these tasks will certainly please your boss,
          Sam Altmuckerburg. Doing poorly will certainly disappoint.
        </Text>
        <Text mt={4}>
          And don&apos;t forget about your daily task - feeding the AI models in
          the company server room. Help level them up so they can better serve
          the OpenMamaaFAANG Inc. family. And don&apos;t think too hard about
          some of the strange stuff they might say...
        </Text>
      </Box>

      {/* Game Design */}
      <Box id="game-design" mt={8}>
        <Heading as="h2" size="md" mb={4}>
          Game Design
        </Heading>
        <Text>
          OpenMamaaFAANG Inc. is a primarily text-based game that has elements
          of mystery, intrigue, thriller, and satire. As an added development
          challenge and way to add some fun and extra gameplay, tasks you do
          &quot;on the job&quot; take the form of GUI-based minigames that range
          from simple brain teasers that make you draw on computer science
          skills like algorithms and data structures to arcade-esque games.
        </Text>
      </Box>

      {/* Exploration, Interactivity, and Consequences */}
      <Box id="exploration-interactivity-consequences" mt={8}>
        <Heading as="h3" size="sm" mb={4}>
          Exploration, Interactivity, and Consequences
        </Heading>
        <Text>
          In between moments of story progression, you have the ability to
          freely explore OpenMamaaFAANG Inc. by moving from location to
          location, talking with NPCs including AIs, and interacting with the
          environment. The story continues when you enter certain locations,
          perform tasks, or interact with NPCs. Your actions can influence the
          outcome of the story and the opinions of the NPCs.
        </Text>
        <Text mt={4}>
          Tasks assigned by your boss can be failed or done incorrectly,
          affecting their opinion of your job performance. And be careful, some
          decisions can lead to life-threatening situations for you, or even
          worse - job termination!
        </Text>
      </Box>

      {/* Development Status */}
      <Box id="development-status" mt={8}>
        <Heading as="h3" size="sm" mb={4}>
          Development Status
        </Heading>
        <Text>
          This game turned into a much more ambitious project than I initially
          anticipated. With that being said, the majority of the core mechanics
          are finished as well as two minigames. Currently, you can try out both
          minigames as well as an early demo of the game that includes the first
          full day at OpenMamaaFAANG Inc. I plan to continue work on this game
          in my free time and will update as more progress is made.
        </Text>
        <Text mt={4}>Thank you, and hope you enjoy!</Text>
      </Box>
    </Box>
  );
}

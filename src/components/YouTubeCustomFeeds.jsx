import {
  Box,
  Divider,
  Heading,
  Link,
  Text,
  UnorderedList,
  ListItem,
  Image,
} from "@chakra-ui/react";

export default function YouTubeCustomFeeds() {
  return (
    <Box
      textAlign="left"
      maxWidth="600px"
      fontSize="md"
      paddingBottom="4"
      paddingTop="4"
    >
      <Box mt={8} align={"center"}>
        <Image src="/images/YCF.png" alt="YCF Logo" />
      </Box>

      <Heading as="h1" size="lg" mb={4} textAlign="center">
        YouTube Custom Feeds - Chrome Extension
      </Heading>

      <Divider />

      <Box textAlign={"left"} paddingTop="4">
        <Text>
          Github:{" "}
          <Link
            href="https://github.com/luke-mayer/youtube-custom-feeds"
            isExternal
          >
            https://github.com/luke-mayer/youtube-custom-feeds
          </Link>
          <br />
          Chrome Store:{" "}
          <Link
            href="https://chromewebstore.google.com/detail/youtube-custom-feeds/hihmkocmnjddomhngmmpkdidkmpkneea"
            isExternal
          >
            YouTube Custom Feeds Extension
          </Link>
        </Text>
      </Box>

      {/* Introduction */}
      <Box id="introduction" mt={8} paddingBottom="4">
        <Heading as="h2" size="md" mb={4} textAlign="center">
          Introduction
        </Heading>
        <Text>
          A Chrome extension that allows you to create personalized YouTube
          feeds containing content only from channels that you select. Once
          feeds are created, you can view a list of recent videos from all
          channels in the feed.
        </Text>
      </Box>

      <Box mt={8} align={"center"}>
        <Image src="/images/YCF_SS1.png" alt="YCF Screenshot" />
      </Box>

      {/* Getting Started */}
      <Box id="getting-started" mt={8}>
        <Heading as="h2" size="md" mb={4} textAlign="center">
          Getting Started
        </Heading>
        <Text>
          Simply head to the link below and install the extension in your chrome
          browser:{" "}
          <Link
            href="https://chromewebstore.google.com/detail/youtube-custom-feeds/hihmkocmnjddomhngmmpkdidkmpkneea"
            isExternal
          >
            *Chrome Web Store*
          </Link>
        </Text>
      </Box>

      {/* Descripton */}
      <Box id="description" mt={8}>
        <Heading as="h2" size="md" mb={4} textAlign="center">
          Description
        </Heading>
        <Text>
          Take control of your YouTube browsing with custom feeds tailored to
          your interests. This extension allows you to create personalized feeds
          that showcase recent videos from selected channels. Instead of sifting
          through every new upload, organize your subscriptions into separate
          feeds. Create a feed just for fitness videos, another for science and
          educational content, or even a dedicated feed with channels your kids
          enjoy. Switch easily between feeds in a user-friendly side panel to
          see only the videos you want, when you want. Perfect for a streamlined
          and customized YouTube experience.
        </Text>
      </Box>

      {/* Project Structure */}
      <Box id="project-structure" mt={8}>
        <Heading as="h2" size="md" mb={4} textAlign="center">
          Project Structure
        </Heading>

        <UnorderedList>
          <ListItem>
            <b>Backend: </b>Built with Golang and hosted on Google Cloud Run. It
            uses a PostgreSQL database hosted on Google Cloud SQL.
          </ListItem>
          <ListItem>
            <b>Frontend: </b>Developed with vanilla JavaScript, HTML, and CSS
            for a responsive and simple user interface.
          </ListItem>
          <ListItem>
            <b>Authentication: </b>Firebase Authentication for secure access.
          </ListItem>
        </UnorderedList>
      </Box>

      {/* Current Status */}
      <Box id="current-status" mt={8}>
        <Heading as="h2" size="md" mb={4} textAlign="center">
          Current Status
        </Heading>
        <Text>
          Core functionality and features are almost entirely implemented
          including:
          <UnorderedList>
            <ListItem>
              User Authentication using Firebase Authentication (only email and
              password).
            </ListItem>
            <ListItem>
              Account deletion(including any data stored in the backend)
            </ListItem>
            <ListItem>Feed Creation and naming.</ListItem>
            <ListItem>Adding and removing channels from feeds.</ListItem>
            <ListItem>
              Retrieving recent uploads from channels in a feed.
            </ListItem>
            <ListItem>
              User feed storage in backend, allowing continuity between logins.
            </ListItem>
          </UnorderedList>
        </Text>
      </Box>

      {/* Future Plans */}
      <Box id="future-plans" mt={8}>
        <Heading as="h2" size="md" mb={4} textAlign="center">
          Future Plans
        </Heading>
        <Text>
          Features to be implemented and work to be done:
          <UnorderedList>
            <ListItem>
              Firebase Anonymous Authentication (allows a user to try out the
              features without creating an account).
            </ListItem>
            <ListItem>
              Full Firebase Authentication (ability to sign up and login with
              Google, Github, etc.,)
            </ListItem>
            <ListItem>
              Feed renaming (implemented on backed, need front end support).
            </ListItem>
            <ListItem>
              Ability to change how videos in a feed are ordered (currently
              ordered by upload date, favors channels that upload more
              frequently as they will have more videos at the top of the feed).
            </ListItem>
            <ListItem>
              Front end technical polishing. Currenty functional, but has some
              quirks (for instance, somtimes backs out of video view to feed
              view when loading first youtube video link in current tab).
            </ListItem>
            <ListItem>
              Front end aesthetic polishing (currently very plain, could use a
              fresh coat of paint).
            </ListItem>
            <ListItem>
              Expansion to other platforms/form factors (stand alone webpage,
              Firefox extension, app, etc.,).
            </ListItem>
          </UnorderedList>
        </Text>
      </Box>
    </Box>
  );
}

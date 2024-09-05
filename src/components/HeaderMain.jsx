import { Link as ReactRouterLink } from "react-router-dom";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiHandshake } from "react-icons/si";
import {
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
  Link as ChakraLink,
  Icon,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";

function HeaderMain() {
  return (
    <Flex paddingTop="2px" minWidth="max-content" alignItems="center" gap="2">
      <ChakraLink as={ReactRouterLink} to="/" paddingLeft="2" paddingRight="2">
        <Heading size="md">Luke Mayer</Heading>
      </ChakraLink>
      <Breadcrumb separator="-">
        <BreadcrumbItem>
          <BreadcrumbLink as={ReactRouterLink} to="/">
            <Heading size="md">Home</Heading>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={ReactRouterLink} to="/about">
            <Heading size="md">About</Heading>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={ReactRouterLink} to="/projects">
            <Heading size="md">Projects</Heading>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={ReactRouterLink} to="/contact">
            <Heading size="md">Contact</Heading>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Spacer />
      <ButtonGroup paddingRight="1" gap="1">
        <ChakraLink href="https://github.com/luke-mayer" isExternal>
          <Button p="0" colorScheme="teal">
            <Icon as={FaGithub} boxSize={7} />
          </Button>
        </ChakraLink>
        <ChakraLink
          href="https://umd.joinhandshake.com/profiles/50652472"
          isExternal
        >
          <Button p="0" colorScheme="teal">
            <Icon as={SiHandshake} boxSize={7} />
          </Button>
        </ChakraLink>
        <ChakraLink
          href="https://www.linkedin.com/in/luke-mayer316/"
          isExternal
        >
          <Button p="0" colorScheme="teal">
            <Icon as={FaLinkedinIn} boxSize={7} />
          </Button>
        </ChakraLink>
      </ButtonGroup>
    </Flex>
  );
}

export default HeaderMain;

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
    <Flex
      fontweight="bold"
      p="2px"
      minWidth="max-content"
      alignItems="center"
      fontWeight="bold"
      gap="2"
    >
      <ChakraLink as={ReactRouterLink} to="/" paddingRight="2">
        <Heading size="sm">Luke Mayer</Heading>
      </ChakraLink>
      <Breadcrumb separator="-" size="sm">
        <BreadcrumbItem>
          <BreadcrumbLink as={ReactRouterLink} to="/">
            <Heading size="sm">Home</Heading>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={ReactRouterLink} to="/about">
            <Heading size="sm">About</Heading>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={ReactRouterLink} to="/projects">
            <Heading size="sm">Projects</Heading>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={ReactRouterLink} to="/contact">
            <Heading size="sm">Contact</Heading>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Spacer />
      <ButtonGroup paddingRight="1" colorScheme="blue" size="sm">
        <ChakraLink href="https://github.com/luke-mayer" isExternal>
          <Button p="0">
            <Icon as={FaGithub} boxSize={6} />
          </Button>
        </ChakraLink>
        <ChakraLink
          href="https://umd.joinhandshake.com/profiles/50652472"
          isExternal
        >
          <Button p="0">
            <Icon as={SiHandshake} boxSize={6} />
          </Button>
        </ChakraLink>
        <ChakraLink
          href="https://www.linkedin.com/in/luke-mayer316/"
          isExternal
        >
          <Button p="0">
            <Icon as={FaLinkedinIn} boxSize={6} />
          </Button>
        </ChakraLink>
      </ButtonGroup>
    </Flex>
  );
}

export default HeaderMain;

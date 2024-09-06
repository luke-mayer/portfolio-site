import {
  Text,
  Heading,
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import { BiChat, BiLike, BiShare } from "react-icons/bi";

function AbeCard() {
  return (
    <Card align="center" variant="outline" maxW="xl" m="8">
      <CardHeader>
        <Heading size="md"> Abe - 20 Questions Bot</Heading>
      </CardHeader>
      <CardBody>
        <Text>View a summary of all your customers over the last month.</Text>
      </CardBody>
      <Image
        objectFit="cover"
        src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Chakra UI"
      />

      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}
      >
        <Button flex="1" variant="ghost" leftIcon={<BiLike />}>
          Like
        </Button>
        <Button flex="1" variant="ghost" leftIcon={<BiChat />}>
          Comment
        </Button>
        <Button flex="1" variant="ghost" leftIcon={<BiShare />}>
          Share
        </Button>
      </CardFooter>
    </Card>
  );
}

export default AbeCard;

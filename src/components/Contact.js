import React from "react";
import { Box, Center, Grid, Stack } from "@chakra-ui/react";
import { PhoneIcon, AddIcon, EmailIcon } from "@chakra-ui/icons";
import { AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import { Icon, Button } from "@chakra-ui/react";

function Contact(props) {
  const bgImage = {
    imageUrl: "./images/bg.jpeg",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };
  return (
    <>
      <Center h="40%" fontSize="2rem">
        Contact me
      </Center>
      <Grid templateColumns="repeat(3, 1fr)" gap={2} paddingY="50px">
        <Box
          as="button"
          _hover={{ bg: "#0a0b4d", color: "#FFFF" }}
          onClick={() =>
            window.open("https://www.linkedin.com/in/sangeeth-perera-329524b4/")
          }
        >
          <Icon as={AiOutlineLinkedin} w={10} h={10} />
        </Box>
        <Box
          as="button"
          _hover={{ bg: "#0a0b4d", color: "#FFFF" }}
          onClick={() => window.open("https://www.facebook.com/sekie.ermano/")}
        >
          <Icon as={AiOutlineFacebook} w={10} h={10} />
        </Box>
        <Box
          as="button"
          _hover={{ bg: "#0a0b4d", color: "#FFFF" }}
          onClick={() => window.open("https://www.facebook.com/sekie.ermano/")}
        >
          <EmailIcon w={10} h={10} />
        </Box>
      </Grid>
    </>
  );
}

export default Contact;

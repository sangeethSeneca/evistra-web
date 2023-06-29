import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { scroller } from "react-scroll";
import { Container, Grid, Center, Box, GridItem } from "@chakra-ui/react";

function NavBar(props) {
  
  const notSticky = {
    top: 0,
    position: "relative",
    width: "100%",
    height:"60px",
    color: "#FFF",
    ZIndex: 2,
    backgroundColor: "#0a0b4d",
    transition: " 0.3s ease-in-out",
  };

  const sticky = {
    top: 0,
    width: "100%",
    position: "fixed",
    height:"40px",
    color: "#FFF",
    zIndex: 100,
    backgroundColor: "#0a0b4d",
    transition: " 0.3s ease-in-out",

  };
  const [style, setStyle] = useState(notSticky);

  useEffect(() => {
    if (props.navClass == "sticky") {
      setStyle(sticky);
    } else {
      setStyle(notSticky);
    }
  }, [props.navClass]);

  const scrollToElement = (element, event) => {
    event.preventDefault();
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -100,
    });
  };

  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={2} style={style}>
      <Box
        as="button"
        onClick={(e) => scrollToElement("home", e)}
        w="100%"
        h="100%"
        borderRadius="0.7"
        _hover={{ bg: "#010224" }}
      >
        Home
      </Box>
      <Box
        as="button"
        onClick={(e) => scrollToElement("about", e)}
        w="100%"
        h="100%"
        borderRadius="0.7"
        _hover={{ bg: "#010224" }}
      >
        About
      </Box>
      <Box
        as="button"
        onClick={(e) => scrollToElement("blogs", e)}
        w="100%"
        h="100%"
        borderRadius="0.7"
        _hover={{ bg: "#010224" }}
      >
        Blogs
      </Box>
      <Box
        as="button"
        onClick={(e) => scrollToElement("Contact", e)}
        w="100%"
        h="100%"
        borderRadius="0.7"
        paddingRight="5px"
        _hover={{ bg: "#010224" }}
      >
        Contact
      </Box>
    </Grid>
  );
}

export default NavBar;

import styled from "styled-components";
import React, { useState, useEffect } from "react";
import {
  ListItem,
  UnorderedList,
  Text,
  Box,
  Center,
  ScaleFade,
  Grid,
  Spacer,
} from "@chakra-ui/react";
import { AiOutlineProfile, AiOutlineExperiment } from "react-icons/ai";
import { Icon } from "@chakra-ui/react";
import AliceCarousel from "react-alice-carousel";
import Fade from 'react-reveal/Fade';


function Portofolio(props) {
  const [selection, setSelection] = useState("profile");
  const handleDragStart = (e) => e.preventDefault();


  const items = [
    <Box fontSize="1rem">
      <Center>
        <b>React Developer | Full Stack Engineer</b>
      </Center>
      <Center>
        <b>Zincat Technologies</b>
      </Center>
      <Center fontSize="1.0rem">(2021 Jan to Present)</Center>
      <br />
      <Grid templateColumns="repeat(2, 1fr)" paddingX="25%" gap={5}>
        <Box>
          <Text fontSize="1rem">
            <b>Jobs Tasks are as follows:</b>
          </Text>
          <Center fontSize="1.0rem">
            <UnorderedList>
              <ListItem>Developing reusable front-end UI components</ListItem>
              <ListItem>API Integration</ListItem>
              <ListItem>Create REST APIs with Spring Boot</ListItem>
              <ListItem>Build CI/CD pipelines</ListItem>
              <ListItem>Database Designing. (MySQL or PostgreSQL)</ListItem>
              <ListItem> Conducting Technical Interviews</ListItem>
            </UnorderedList>
          </Center>
        </Box>
        <Box>
          <Text fontSize="1.0rem">
            <b>Technologies/Tools</b>
          </Text>
          <Center fontSize="1.0rem">
            <UnorderedList>
              <ListItem>React</ListItem>
              <ListItem>Spring Boot</ListItem>
              <ListItem>Docker</ListItem>
              <ListItem>Typescript / Javascript</ListItem>
              <ListItem>CI/CD piplines</ListItem>
            </UnorderedList>
          </Center>
        </Box>
      </Grid>
    </Box>,
    <Box fontSize="1rem">
      <Center>
        <b>Software Engineer</b>
      </Center>
      <Center>
        <b>IFS R&D International (Pvt) Ltd</b>
      </Center>
      <Center fontSize="1.0rem">(2017 Aug Jan to 2021 Jan)</Center>
      <br />
      <Grid templateColumns="repeat(2, 1fr)" paddingX="25%" gap={5}>
        <Box>
          <Text fontSize="1rem">
            <b>Jobs Tasks are as follows:</b>
          </Text>
          <Center fontSize="1.0rem">
            <UnorderedList>
              <ListItem>Database Designing</ListItem>
              <ListItem>User Interface Designing</ListItem>
              <ListItem>Front End Development</ListItem>
              <ListItem>Unit Testing</ListItem>
              <ListItem>Application Performance Improvement</ListItem>
              <ListItem> Applications Integration</ListItem>
              <ListItem> Customer Support <Spacer/>         </ListItem>
            </UnorderedList>
          </Center>
        </Box>
        <Box>
          <Text fontSize="1.0rem">
            <b>Technologies/Tools</b>
          </Text>
          <Center fontSize="1.0rem">
            <UnorderedList>
              <ListItem>Oracle Database</ListItem>
              <ListItem>Java</ListItem>
              <ListItem>Angular</ListItem>
              <ListItem>Docker</ListItem>
              <ListItem>React</ListItem>
            </UnorderedList>
          </Center>
        </Box>
      </Grid>
    </Box>,
  ];
  return (
    <div>
      <Fade right>
      <Grid opacity = "" templateColumns="repeat(2, 1fr)" paddingX="20%" gap={5}>
        <Box
          as="button"
          onClick={() => setSelection("profile")}
          bgColor={selection == "profile" ? "#0a0b4d" : null}
          color={selection == "profile" ? "#FFFF" : null}
        >
          <Icon as={AiOutlineProfile} w={20} h={20} />
          <Text>Profile</Text>
        </Box>
        <Box
          as="button"
          bgColor={selection == "experience" ? "#0a0b4d" : null}
          color={selection == "experience" ? "#FFFF" : null}
          onClick={() => setSelection("experience")}
          alignContent="center"
        >
          <Icon as={AiOutlineExperiment} w={20} h={20} />
          <Text>Experience</Text>
        </Box>
      </Grid>
      {selection == "profile" ? (
        <ScaleFade initialScale={0.9} in={selection == "profile"}>
          <Center>
            <Box
              w="60%"
              h="50vh"
              paddingY="100px"
              sx={{
                "@media only screen and (max-width: 700px)": {
                  h: "100%",
                },
              }}
            >
              <Text fontFamily="italic" fontSize="1rem">
                "Experienced Software Engineer with a demonstrated history of
                working in the computer software industry. Skilled in React,
                Oracle Database, MySQL, PostgreSQL, PHP, JavaScript and
                Java/Spring-Boot. Strong engineering professional with a
                Bachelor’s Degree focused in Computer Science from University of
                Sri Jayewardenepura."
              </Text>
            </Box>
          </Center>
        </ScaleFade>
      ) : (
        <Box
          zIndex={0}
          w="100%"
          paddingY="100px"
          h="50vh"
          sx={{
            "@media only screen and (max-width: 700px)": {
              h: "100%",
            },
          }}
        >
          <AliceCarousel
            mouseTracking
            items={items}
            disableButtonsControls
            animationType="slide"
            controlsStrategy="responsive"
            zIndex={0}
          />
        </Box>
      )}
      </Fade>
    </div>
  );
}

export default Portofolio;

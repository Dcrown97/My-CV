import {
  Box,
  HStack,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Head from "next/head";
import { MdOutlineEmail } from "react-icons/md";
import { BiLocationPlus, BiWorld } from "react-icons/bi";
import { AiFillGithub, AiOutlinePhone, AiFillLinkedin } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { useEffect } from "react/cjs/react.production.min";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aisimiyu Oluwadarasimi CV</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/AO.ico" />
      </Head>
      <Box border={"1px solid gray"} mb={{ base: "40px", md: "40px" }}>
        <Box bg="#000080" textAlign={"center"}>
          <Text
            color="white"
            fontWeight={"500"}
            lineHeight="80px"
            letterSpacing="15px"
            fontSize={{ base: "3xl", md: "5xl" }}
          >
            AISIMIYU OLUWADARASIMI
          </Text>
          <Text
            pb="20px"
            color="white"
            fontWeight={"400"}
            letterSpacing="4px"
            fontSize={{ base: "sm", md: "2xl" }}
          >
            SOFTWARE ENGINEER
          </Text>
        </Box>

        <Stack w={"100%"} direction={{ base: "column", md: "row" }}>
          <Box w={{ base: "100%", md: "35%" }} pt="50px" bg={"#f7f7f7"}>
            <HStack textAlign={{ base: "left", md: "right" }} mb="30px">
              <Text
                pl={{ base: "20px" }}
                w="100%"
                pr="20px"
                letterSpacing="2px"
                color={"black"}
                fontSize="2xl"
                fontWeight="bold"
              >
                CONTACT
              </Text>
            </HStack>

            <HStack
              textAlign={{ base: "left", md: "right" }}
              pb="6px"
              pr="20px"
            >
              <Link
                _hover={{ textDecoration: "none" }}
                href="mailto:banjotola12@gmail.com"
                pl={{ base: "20px" }}
                w="100%"
                color={"#007bff"}
              >
                aisimiyuoluwadara@gmail.com
              </Link>{" "}
              <MdOutlineEmail />
            </HStack>
            <HStack
              textAlign={{ base: "left", md: "right" }}
              pb="6px"
              pr="20px"
            >
              <Link
                href="tel:+23480-3094-7177"
                pl={{ base: "20px" }}
                w="100%"
                color={"#007bff"}
              >
                +23480-6779-9281
              </Link>{" "}
              <AiOutlinePhone />
            </HStack>
            <HStack
              textAlign={{ base: "left", md: "right" }}
              pb="6px"
              pr="20px"
            >
              {/* <Spacer /> */}
              <Text pl={{ base: "20px" }} w="100%" color={"black"}>
                Ikeja, Lagos, Nigeria
              </Text>{" "}
              <BiLocationPlus />
            </HStack>
            <HStack
              textAlign={{ base: "left", md: "right" }}
              pb="6px"
              pr="20px"
            >
              <Link
                w="100%"
                _hover={{ textDecoration: "none" }}
                cursor={"pointer"}
                as={Link}
                href="https://twitter.com/MrDarasimi"
              >
                <Text pl={{ base: "20px" }} w="100%" color={"#007bff"}>
                  Twitter
                </Text>{" "}
              </Link>
              <FiTwitter />
            </HStack>
            <HStack
              textAlign={{ base: "left", md: "right" }}
              pb="6px"
              pr="20px"
            >
              <Link
                w="100%"
                _hover={{ textDecoration: "none" }}
                cursor={"pointer"}
                as={Link}
                href="https://github.com/Dcrown97 "
              >
                <Text pl={{ base: "20px" }} w="100%" color={"#007bff"}>
                  Github
                </Text>{" "}
              </Link>
              <AiFillGithub />
            </HStack>
            <HStack
              textAlign={{ base: "left", md: "right" }}
              pb="6px"
              pr="20px"
            >
              <Link
                w="100%"
                _hover={{ textDecoration: "none" }}
                cursor={"pointer"}
                as={Link}
                href="https://www.linkedin.com/in/aisimiyu-oluwadarasimi-3454bb196/"
              >
                <Text pl={{ base: "20px" }} w="100%" color={"#007bff"}>
                  Linkendin
                </Text>{" "}
              </Link>
              <AiFillLinkedin />
            </HStack>
            <HStack
              textAlign={{ base: "left", md: "right" }}
              mb="30px"
              pb="6px"
              pr="20px"
            >
              <Link
                w="100%"
                _hover={{ textDecoration: "none" }}
                cursor={"pointer"}
                as={Link}
                href="https://banjo-tola-folio.netlify.app/"
              >
                <Text pl={{ base: "20px" }} w="100%" color={"#007bff"}>
                  Portfolio
                </Text>{" "}
              </Link>
              <BiWorld />
            </HStack>

            <HStack
              textAlign={{ base: "left", md: "right" }}
              mb="25px"
              w="100%"
            >
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="2px"
                color={"black"}
                fontSize="2xl"
                fontWeight="bold"
              >
                EDUCATION
              </Text>
            </HStack>
            <HStack textAlign={{ base: "left", md: "right" }} mb="8px" w="100%">
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="2px"
                color={"black"}
                fontSize="lg"
                fontWeight="bold"
              >
                Bs.c
              </Text>
            </HStack>
            <HStack textAlign={{ base: "left", md: "right" }} mb="8px" w="100%">
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="2px"
                color={"black"}
                fontSize="lg"
                // fontWeight="bold"
              >
                Business Administration
              </Text>
            </HStack>
            <HStack textAlign={{ base: "left", md: "right" }} mb="8px" w="100%">
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="2px"
                color={"black"}
                fontSize="lg"
                // fontWeight="bold"
              >
                Olabisi Onabanjo University
              </Text>
            </HStack>
            <HStack textAlign={{ base: "left", md: "right" }} mb="8px" w="100%">
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="2px"
                color={"black"}
                fontSize="lg"
                // fontWeight="bold"
              >
                2015 - 2019
              </Text>
            </HStack>
            <HStack textAlign={{ base: "left", md: "right" }} mb="8px" w="100%">
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="2px"
                color={"black"}
                fontSize="lg"
              >
                Ago-Iwoye
              </Text>
            </HStack>

            <HStack
              textAlign={{ base: "left", md: "right" }}
              mt="30px"
              mb="8px"
              w="100%"
            >
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="2px"
                color={"black"}
                fontSize="lg"
                fontWeight="bold"
              >
                WASCE
              </Text>
            </HStack>
            <HStack textAlign={{ base: "left", md: "right" }} mb="8px" w="100%">
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="2px"
                color={"black"}
                fontSize="lg"
                // fontWeight="bold"
              ></Text>
            </HStack>
            <HStack textAlign={{ base: "left", md: "right" }} mb="8px" w="100%">
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="2px"
                color={"black"}
                fontSize="lg"
              >
                Patterson Memorial Baptist Grammar School
              </Text>
            </HStack>
            <HStack textAlign={{ base: "left", md: "right" }} mb="8px" w="100%">
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="2px"
                color={"black"}
                fontSize="lg"
              >
                2013 - 20115
              </Text>
            </HStack>
            <HStack textAlign={{ base: "left", md: "right" }} mb="8px" w="100%">
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="2px"
                color={"black"}
                fontSize="lg"
              >
                Ogun State, Nigeria
              </Text>
            </HStack>

            <HStack
              textAlign={{ base: "left", md: "right" }}
              mt="40px"
              mb="8px"
              w="100%"
            >
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="2px"
                color={"black"}
                fontSize="2xl"
                fontWeight="bold"
              >
                SKILLS
              </Text>
            </HStack>
            <HStack textAlign={{ base: "left", md: "right" }} mb="8px" w="100%">
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="2px"
                color={"black"}
                fontSize="lg"
              >
                React Js
              </Text>
            </HStack>
            {/* <HStack textAlign={{ base: "left", md: "right" }} mb="8px" w="100%">
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="2px"
                color={"black"}
                fontSize="lg"
              >
                
              </Text>
            </HStack> */}
            {/* <HStack textAlign={{ base: "left", md: "right" }} mb="8px" w="100%">
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="2px"
                color={"black"}
                fontSize="lg"
              >
               
              </Text>
            </HStack> */}
            <HStack textAlign={{ base: "left", md: "right" }} mb="8px" w="100%">
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="2px"
                color={"black"}
                fontSize="lg"
              >
                Chakra UI
              </Text>
            </HStack>
            <HStack textAlign={{ base: "left", md: "right" }} mb="8px" w="100%">
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="2px"
                color={"black"}
                fontSize="lg"
              >
                Laravel
              </Text>
            </HStack>
            <HStack textAlign={{ base: "left", md: "right" }} mb="8px" w="100%">
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="2px"
                color={"black"}
                fontSize="lg"
              >
                Bootstrap
              </Text>
            </HStack>
            <HStack textAlign={{ base: "left", md: "right" }} mb="8px" w="100%">
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="2px"
                color={"black"}
                fontSize="lg"
              >
                MYSQL
              </Text>
            </HStack>

            {/* <HStack
              textAlign={{ base: "left", md: "right" }}
              mt="40px"
              mb="8px"
              w="100%"
            >
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="2px"
                color={"black"}
                fontSize="2xl"
                fontWeight="bold"
              >
                
              </Text>
            </HStack> */}
            <HStack textAlign={{ base: "left", md: "right" }} mb="8px" w="100%">
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="2px"
                color={"black"}
                fontSize="lg"
              >
                Javascript
              </Text>
            </HStack>
            <HStack textAlign={{ base: "left", md: "right" }} mb="8px" w="100%">
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="2px"
                color={"black"}
                fontSize="lg"
              ></Text>
            </HStack>
          </Box>
          <Box w={{ base: "100%", md: "65%" }} pt="50px" bg="white">
            <Text
              mb="30px"
              pl="20px"
              letterSpacing="2px"
              color={"black"}
              fontSize="2xl"
              fontWeight="bold"
            >
              CAREER OBJECTIVE
            </Text>

            <Text
              pr={{ base: "20px", md: "150px" }}
              pl={{ base: "20px", md: "20px" }}
            >
              I am a diligent software engineer, good and well oriented in
              building projects with Reactjs, Laravel, javascript, Chakra UI,
              Boostrap and HTML/Css . I am Eager to join the team to build
              innovative and cutting edge business solutions for the impressive
              suite of clients within its global reach. I am open to learning
              more from the team as well as delivering whatever task I am given
              right on time.
            </Text>

            <Text
              mt="30px"
              mb="10px"
              pl="20px"
              letterSpacing="2px"
              color={"black"}
              fontSize="2xl"
              fontWeight="bold"
            >
              WORK EXPERIENCE
            </Text>

            <Text fontSize={"2xl"} fontWeight="500" pl="20px">
              Software Engineer
            </Text>
            <Text fontSize={"xl"} fontWeight="400" pl="20px">
              ITskillsCenter
            </Text>
            <Text mb="15px" fontSize={"xl"} fontWeight="400" pl="20px">
              Oct 2021 - current
            </Text>

            <UnorderedList mb="25px" pr="20px" pl="40px">
              <ListItem>
                Developed E-commerce web app using Laravel, React, Javascript
                and HTML/CSS
              </ListItem>
              <ListItem>
                Worked with product managers to re-architect a multi-page web
                app into a single page web-app.
              </ListItem>
              <ListItem>
                Review codes and ensure quality of designs and implementations,
                and advocating clarity within the team
              </ListItem>
              <ListItem>
                Worked with a team of other engineers in building a new webapp
                project from scratch.
              </ListItem>
            </UnorderedList>

            <Text fontSize={"2xl"} fontWeight="500" pl="20px">
              Teacher
            </Text>
            <Text fontSize={"xl"} fontWeight="400" pr="150px" pl="20px">
              Command Science Secondary School
            </Text>
            <Text fontSize={"xl"} fontWeight="400" pl="20px">
              Nov 2020 - Oct 2021
            </Text>
            <Text mb="15px" fontSize={"xl"} fontWeight="400" pl="20px">
              Saki, Oyo State. Nigeria
            </Text>

            <UnorderedList mb="25px" pr="20px" pl="40px">
              <ListItem>
                Taught over 60 students concurrently while providing a high
                degree of education customization when required{" "}
              </ListItem>
              <ListItem>
                Methodically planned and executed on lesson plans, including
                collecting necessary resources to complete a given lesson
              </ListItem>
              <ListItem>
                Designed and implemented performance improvement plans for
                underperforming students in consultation with parents and
                administrative staff
              </ListItem>
            </UnorderedList>

            {/* <Text
              mt="50px"
              fontSize={"2xl"}
              fontWeight="500"
              pr="150px"
              pl="20px"
            >
              IT Support Officer
            </Text>
            <Text fontSize={"xl"} fontWeight="400" pr="150px" pl="20px">
            
            </Text>
            <Text
              mb="15px"
              fontSize={"xl"}
              fontWeight="400"
              pr="150px"
              pl="20px"
            >
               / 
            </Text> */}

            <Text fontSize={"2xl"} fontWeight="500" pl="20px">
              Office Assitant
            </Text>
            <Text fontSize={"xl"} fontWeight="400" pr="150px" pl="20px">
              Tosanne Vogue International
            </Text>
            <Text fontSize={"xl"} fontWeight="400" pl="20px">
              Nov 2019 - Jan 2020
            </Text>
            <Text mb="15px" fontSize={"xl"} fontWeight="400" pl="20px">
              Ibadan, Oyo State. Nigeria
            </Text>

            <UnorderedList mb="40px" pr="20px" pl="40px">
              <ListItem>
                Supported in achieving company goals and initiated 5 new ideas
              </ListItem>
              <ListItem>
                Managed calendars of the executive team and coordinated weekly
                team meetings.
              </ListItem>
              <ListItem>
                Installation and configuration of Routers, Switches and cabling
              </ListItem>

              <ListItem>Built relationships with customers.</ListItem>
            </UnorderedList>
          </Box>
        </Stack>
      </Box>
    </>
  );
}

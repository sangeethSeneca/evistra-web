import React from "react";
import { Box, Center, Grid, Stack } from "@chakra-ui/react";
import { PhoneIcon, AddIcon, EmailIcon } from "@chakra-ui/icons";
import { AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import { Icon, Button } from "@chakra-ui/react";

function Login(props) {
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
    <div>
      <h2>EVISTRA lOGIN</h2>
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

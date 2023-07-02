import React from "react";
import { Box, Center, Grid, Stack } from "@chakra-ui/react";
import { PhoneIcon, AddIcon, EmailIcon } from "@chakra-ui/icons";
import { AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import { Icon, Button } from "@chakra-ui/react";

function Login(props) {
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

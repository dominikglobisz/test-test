import React from "react";

import "./header.css";
import { Button } from "@chakra-ui/react";

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

export const Header = ({}: HeaderProps) => (
  <header>
    <h1>Chakra custom theme testing</h1>
    <Button
      size="xl"
      variant="with-shadow"
      fontSize={{ base: "12px", md: "24px" }}
    >
      Welcome
    </Button>
    <Button>Welcome</Button>
  </header>
);

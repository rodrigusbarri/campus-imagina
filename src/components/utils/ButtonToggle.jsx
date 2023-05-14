import { IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

export function ButtonToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      colorScheme="twitter"
      icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
      onClick={toggleColorMode}
      aria-label="Toggle color mode"
    />
  );
}



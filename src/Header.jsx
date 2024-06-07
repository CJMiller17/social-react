import { Link } from "react-router-dom"
import { Button, ButtonGroup } from "@chakra-ui/react";

function Header() {
  return (
    <div style={{ margin: 10 }}>
      <ButtonGroup spacing="6">
        <Button size="lg" colorScheme="blue">
          <Link style={{ marginRight: 20 }} to="/">
            Home
          </Link>
        </Button>
        <Button size="lg" colorScheme="blue">
          <Link style={{ marginRight: 20 }} to="/login">
            Login
          </Link>
        </Button>
        <Button size="lg" colorScheme="blue">
          <Link to="/register">Register</Link>
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default Header
import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./style";
export default function Home() {
  return (
    <Container>
      Home      
      <Link to="/about">About</Link>
    </Container>
  );
}

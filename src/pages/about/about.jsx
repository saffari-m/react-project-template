import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./style";
export default function About() {
  return (
    <Container>
      About
      <Link to="/">Home</Link>
    </Container>
  );
}

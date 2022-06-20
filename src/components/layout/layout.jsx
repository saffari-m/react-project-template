import React from "react";
import { Container } from "./style";
import PropTypes from "prop-types";
import Menu from "@components/menu";
import { Outlet } from "react-router-dom";

function Layout({ hasMenu = true, children }) {
  return (
    <Container>
      {hasMenu && <Menu />}
      {children}
      <Outlet />
    </Container>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  hasMenu: PropTypes.bool,
};

export default Layout;

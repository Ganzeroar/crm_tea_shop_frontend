import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button, Container } from "react-bootstrap";


function Header_site() {
    return(
        <Container>
            <Navbar.Brand href="#">
                <img
                src="./WhiteLotusLogo.png"
                width={"60"}
                height={"60"}
                className="d-inline-block align-top"
                alt="Logo"
                />
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <a href="#login">login@whitelotus.kz</a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Container>
    )
}

export default Header_site;
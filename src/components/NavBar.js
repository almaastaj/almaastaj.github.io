import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/icons8-github4.svg";
import navIcon3 from "../assets/img/icons8-leetcode.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <Router>
            <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Brand>
                        <h2 className="logo-top">Almaas Taj</h2>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link
                                href="#home"
                                className={
                                    activeLink === "home"
                                        ? "active navbar-link"
                                        : "navbar-link"
                                }
                                onClick={() => onUpdateActiveLink("home")}
                            >
                                <h4>Home</h4>
                            </Nav.Link>
                            <Nav.Link
                                href="#skills"
                                className={
                                    activeLink === "skills"
                                        ? "active navbar-link"
                                        : "navbar-link"
                                }
                                onClick={() => onUpdateActiveLink("skills")}
                            >
                                <h4>About Me</h4>
                            </Nav.Link>
                            <Nav.Link
                                href="#timeline"
                                className={
                                    activeLink === "timeline"
                                        ? "active navbar-link"
                                        : "navbar-link"
                                }
                                onClick={() => onUpdateActiveLink("timeline")}
                            >
                                <h4>TimeLine</h4>
                            </Nav.Link>
                            <Nav.Link
                                href="#projects"
                                className={
                                    activeLink === "projects"
                                        ? "active navbar-link"
                                        : "navbar-link"
                                }
                                onClick={() => onUpdateActiveLink("projects")}
                            >
                                <h4>Projects</h4>
                            </Nav.Link>
                            <Nav.Link
                                href="#certification"
                                className={
                                    activeLink === "certification"
                                        ? "active navbar-link"
                                        : "navbar-link"
                                }
                                onClick={() =>
                                    onUpdateActiveLink("certification")
                                }
                            >
                                <h4>Achievements</h4>
                            </Nav.Link>
                        </Nav>
                        <span className="navbar-text">
                            <div className="social-icon">
                                <a
                                    href="https://www.linkedin.com/in/almaas-taj/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src={navIcon1} alt="LinkedIn" />
                                </a>
                                <a
                                    href="https://github.com/almaastaj"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src={navIcon2} alt="GitHub" />
                                </a>
                                <a
                                    href="https://leetcode.com/u/almaastaj123/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src={navIcon3} alt="LeetCode" />
                                </a>
                            </div>
                            <HashLink to="#connect">
                                <button className="vvd">
                                    <span>Let’s Connect</span>
                                </button>
                            </HashLink>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    );
};

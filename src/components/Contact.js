import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import {
    FaGithub,
    FaLinkedin,
    FaGoogle,
    FaMapMarkerAlt,
    FaEnvelope,
    FaUserGraduate,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

export const Contact = () => {
    const [hoveredIcon, setHoveredIcon] = useState(null);

    const handleMouseEnter = (iconName) => {
        setHoveredIcon(iconName);
    };

    const handleMouseLeave = () => {
        setHoveredIcon(null);
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <img
                                    className={
                                        isVisible
                                            ? "animate__animated animate__zoomIn"
                                            : ""
                                    }
                                    src={contactImg}
                                    alt="Contact Us"
                                />
                            )}
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? "animate__animated animate__fadeIn"
                                            : ""
                                    }
                                >
                                    <h2>Get In Touch</h2>
                                    <p className="fw-medium">
                                        Welcome to the connect section! <br />{" "}
                                        Whether you have a question, want to
                                        collaborate, or simply want to say
                                        hello, I'd love to hear from you. Feel
                                        free to reach out and connect with me
                                        through my social media channels or
                                        email. I aim to respond to all inquiries
                                        promptly. Your feedback and inquiries
                                        are valued and appreciated.
                                    </p>
                                    <div className="p-3 h3">
                                        <Row className="p-2">
                                            <Col
                                                md={4}
                                                className="text-warning"
                                            >
                                                <FaMapMarkerAlt /> Location
                                            </Col>
                                            <Col md={8}>
                                                Pune, Maharashtra, India
                                            </Col>
                                        </Row>
                                        <Row className="p-2">
                                            <Col
                                                md={4}
                                                className="text-warning"
                                            >
                                                <FaEnvelope /> Email
                                            </Col>
                                            <Col md={8}>
                                                almaastaj123@gmail.com
                                            </Col>
                                        </Row>
                                        <Row className="p-2">
                                            <Col
                                                md={4}
                                                className="text-warning"
                                            >
                                                <FaUserGraduate /> Education
                                            </Col>
                                            <Col md={8}>BITS Pilani</Col>
                                        </Row>
                                    </div>
                                    <div className="d-flex justify-content-evenly p-3">
                                        <a
                                            href="https://github.com/almaastaj"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaGithub
                                                color={
                                                    hoveredIcon === "github"
                                                        ? "white"
                                                        : "black"
                                                }
                                                onMouseEnter={() =>
                                                    handleMouseEnter("github")
                                                }
                                                onMouseLeave={handleMouseLeave}
                                                size={48}
                                            />
                                        </a>
                                        <a
                                            href="https://www.linkedin.com/in/almaas-taj/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaLinkedin
                                                color={
                                                    hoveredIcon === "linkedin"
                                                        ? "white"
                                                        : "#46B5D1"
                                                }
                                                onMouseEnter={() =>
                                                    handleMouseEnter("linkedin")
                                                }
                                                onMouseLeave={handleMouseLeave}
                                                size={48}
                                            />
                                        </a>
                                        <a
                                            href="mailto:almaastaj123@gmail.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaGoogle
                                                color={
                                                    hoveredIcon === "google"
                                                        ? "white"
                                                        : "black"
                                                }
                                                onMouseEnter={() =>
                                                    handleMouseEnter("google")
                                                }
                                                onMouseLeave={handleMouseLeave}
                                                size={48}
                                            />
                                        </a>
                                        <a
                                            href="https://twitter.com/AlmaasAcademy"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaXTwitter
                                                color={
                                                    hoveredIcon === "twitter"
                                                        ? "white"
                                                        : "black"
                                                }
                                                onMouseEnter={() =>
                                                    handleMouseEnter("twitter")
                                                }
                                                onMouseLeave={handleMouseLeave}
                                                size={48}
                                            />
                                        </a>
                                        <a
                                            href="https://leetcode.com/almaastaj123/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <SiLeetcode
                                                color={
                                                    hoveredIcon === "leetcode"
                                                        ? "white"
                                                        : "#FF5733"
                                                }
                                                onMouseEnter={() =>
                                                    handleMouseEnter("leetcode")
                                                }
                                                onMouseLeave={handleMouseLeave}
                                                size={48}
                                            />
                                        </a>
                                    </div>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

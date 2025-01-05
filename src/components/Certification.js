import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { CertificateCard } from "./CertificateCard";
import certImg1 from "../assets/img/aws.png";
import certImg2 from "../assets/img/coursera-ItPython.png";
import certImg3 from "../assets/img/coursera-dataAnalytics.png";
import certImg4 from "../assets/img/fcc-Python.png";
import certImg5 from "../assets/img/fcc-WebDesign.png";
import certImg6 from "../assets/img/fcc-frontend.png";
import badgesImg1 from "../assets/img/aws-badge.png";
import badgesImg2 from "../assets/img/google-python-badge.png";
import badgesImg3 from "../assets/img/google-data-analytis-badge.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Certification = () => {
    const certificates = [
        {
            title: "AWS: Cloud Practitioner",
            description:
                "The AWS Cloud Practitioner certification validates foundational knowledge of AWS Cloud services, architecture, security, and pricing models.",
            imgUrl: certImg1,
            sourceUrl:
                "https://cp.certmetrics.com/amazon/en/public/verify/credential/F4GBKT820MEEQH54",
            type: "certificate",
        },
        {
            title: "Python IT Automation",
            description:
                "This certification equips individuals with essential Python programming skills and automation techniques for IT tasks, enhancing efficiency and proficiency in managing systems and networks.",
            imgUrl: certImg2,
            sourceUrl:
                "https://www.coursera.org/account/accomplishments/professional-cert/EP3D6M5T2N3F",
            type: "certificate",
        },
        {
            title: "Data Analytics",
            description:
                "Provides comprehensive training in data analysis, visualization, and interpretation, empowering individuals with skills essential for making data-driven decisions across various industries.",
            imgUrl: certImg3,
            sourceUrl:
                "https://www.coursera.org/account/accomplishments/professional-cert/UHDHEN5KC8U3",
            type: "certificate",
        },
        {
            title: "Scientific Computing With Python",
            description:
                "This certificate signifies mastery in utilizing Python for scientific computing tasks such as data analysis, visualization, and algorithm development.",
            imgUrl: certImg4,
            sourceUrl:
                "https://www.freecodecamp.org/certification/fccdd54214d-0c9e-4229-859e-6fad6e2fd005/scientific-computing-with-python-v7",
            type: "certificate",
        },
        {
            title: "Responsive Web Design",
            description:
                "This certification helps in creating websites that adapt and function seamlessly across various devices and screen sizes, enhancing user experience and accessibility.",
            imgUrl: certImg5,
            sourceUrl:
                "https://www.freecodecamp.org/certification/fccdd54214d-0c9e-4229-859e-6fad6e2fd005/responsive-web-design",
            type: "certificate",
        },
        {
            title: "Front-End Development Libraries",
            description:
                "This certificate teaches essential skills in modern front-end development libraries like React, Redux, Sass, and Bootstrap.",
            imgUrl: certImg6,
            sourceUrl:
                "https://www.freecodecamp.org/certification/fccdd54214d-0c9e-4229-859e-6fad6e2fd005/front-end-development-libraries",
            type: "certificate",
        },
    ];

    const projects2 = [
        {
            title: "AWS Certified Cloud Practitioner",
            description:
                "This badge owners are able to identify essential AWS services necessary to set up AWS-focused projects.",
            imgUrl: badgesImg1,
            sourceUrl:
                "https://www.credly.com/badges/a251348a-8d9c-4584-86bb-a193b4fce089/public_url",
            type: "badge",
        },
        {
            title: "Google IT Automation with Python",
            description:
                "This equips individuals with the ability to automate repetitive IT operations, improve efficiency, and enhance their technical skillset.",
            imgUrl: badgesImg2,
            sourceUrl:
                "https://www.credly.com/badges/2cde2e8d-c3ae-41d0-bbd8-8286795558d0/public_url",
            type: "badge",
        },
        {
            title: "Google Data Analytics Professional Badge",
            description:
                "This badge indicates that the recipient has a foundational understanding of the data analysis process and the ability to apply these skills to solve real-world problems.",
            imgUrl: badgesImg3,
            sourceUrl:
                "https://www.credly.com/badges/2bde28a0-2854-44f1-82ca-9163393286bd/public_url",
            type: "badge",
        },
    ];

    return (
        <section className="project" id="certification">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? "animate__animated animate__fadeIn"
                                            : ""
                                    }
                                >
                                    <h2>Achievements</h2>
                                    <p className="fs-3 fw-bold text-info">
                                        Here are some of the Achievements I have
                                        accomplished related to Software
                                        Engineering.
                                    </p>
                                    <Tab.Container
                                        id="projects-tabs"
                                        defaultActiveKey="first"
                                    >
                                        <Nav
                                            variant="pills"
                                            className="nav-pills mb-5 justify-content-center align-items-center"
                                            id="pills-tab"
                                        >
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">
                                                    Certificates
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">
                                                    Badges
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">
                                                    Awards
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content
                                            id="slideInUp"
                                            className={
                                                isVisible
                                                    ? "animate__animated animate__slideInUp"
                                                    : ""
                                            }
                                        >
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {certificates.map(
                                                        (project, index) => {
                                                            return (
                                                                <CertificateCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            );
                                                        },
                                                    )}
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <Row>
                                                    {projects2.map(
                                                        (project, index) => {
                                                            return (
                                                                <CertificateCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            );
                                                        },
                                                    )}
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <p className="fs-1 text-warning fw-bold">
                                                    Coming soon .....
                                                </p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img
                className="background-image-right"
                src={colorSharp2}
                alt="background"
            ></img>
        </section>
    );
};

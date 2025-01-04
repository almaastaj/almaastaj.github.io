import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/gadgetCraze.png";
import projImg2 from "../assets/img/support-desk.png";
import projImg3 from "../assets/img/doodle-le-doo.png";
import projImg4 from "../assets/img/crowd-wisdom.png";
import projImg5 from "../assets/img/Expense-Tracker.png";
import projImg6 from "../assets/img/Note-wizard.png";
import projImg7 from "../assets/img/sensex-analysis.png";
import projImg8 from "../assets/img/stock-analysis.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
    const projects = [
        {
            title: "Gadget Craze",
            description:
                "This is an E-Commerce App that is a full-featured shopping cart with Payments. It allows the review and rating of products. It has Admin functionality only for Admins.",
            imgUrl: projImg1,
            sourceUrl: "https://github.com/almaastaj/GadgetCraze",
            liveUrl: "https://gadgetcraze-v1.onrender.com",
        },
        {
            title: "Support Desk App",
            description:
                "This is a Support Desk Ticket App that allows the creation of tickets, addition of notes to the created ticket and Closure of Tickets.",
            imgUrl: projImg2,
            sourceUrl: "https://github.com/almaastaj/SupportDeskApp",
            liveUrl: "https://supportdeskticketapp.onrender.com",
        },
        {
            title: "Doodle-le-Doo App",
            description:
                "This is Doodle Website that allows you to draw a doodle with any color of our choice, change the size of brush, clear the screen, etc.",
            imgUrl: projImg3,
            sourceUrl: "https://github.com/almaastaj/Doodle-le-Doo",
            liveUrl: "https://almaastaj.github.io/Doodle-le-Doo/",
        },
        {
            title: "Crowd Wisdom Website",
            description:
                "This is a Crowd Wisdom Website that allows you to share a fact, vote a fact with interesting, mindblowing or false. It also allows you to filter facts based on Finance, news, history, etc.",
            imgUrl: projImg4,
            sourceUrl: "https://github.com/almaastaj/crowd-wisdom",
            liveUrl: "https://almaastaj.github.io/crowd-wisdom/",
        },
    ];

    const projects2 = [
        {
            title: "Expense-Tracker",
            description:
                "This is an Expense-Tracker Website that keeps track of income and expenses, add or remove items and save data to local storage.",
            imgUrl: projImg5,
            sourceUrl: "https://github.com/almaastaj/ExpenseTracker-v1",
            liveUrl: "https://almaastaj.github.io/ExpenseTracker-v1/",
        },
        {
            title: "Note - Wizard",
            description:
                "This is a Note Wizard Website that allows you take, update and delete notes where we store the data in Local Storage.",
            imgUrl: projImg6,
            sourceUrl: "https://github.com/almaastaj/notes-wizard",
            liveUrl: "https://almaastaj.github.io/notes-wizard/",
        },
        {
            title: "SENSEX Analysis",
            description:
                "This SENSEX Analysis Project is related to performing various financial analysis on the SENSEX Index using the data from a period of 10 years from 2014-2024.",
            imgUrl: projImg7,
            sourceUrl:
                "https://github.com/almaastaj/IndianStockMarket/blob/master/SensexAnalysis.ipynb",
            liveUrl:
                "https://github.com/almaastaj/IndianStockMarket/blob/master/SensexAnalysis.ipynb",
        },
        {
            title: "IT Index Creation And Analysis",
            description:
                "This IT Index Creation And Analysis Project is related to creation of an Index of Top 5 IT Stocks in Indian Stock Market and analyse the created Index returns.",
            imgUrl: projImg8,
            sourceUrl:
                "https://github.com/almaastaj/IndianStockMarket/blob/master/IndianITIndex.ipynb",
            liveUrl:
                "https://github.com/almaastaj/IndianStockMarket/blob/master/IndianITIndex.ipynb",
        },
    ];

    return (
        <section className="project" id="projects">
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
                                    <h2>Projects</h2>
                                    <p className="fs-3 fw-bold text-info">
                                        Here are some of my Personal Project
                                        that I've done using various programming
                                        languages.
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
                                                    Tab 1
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">
                                                    Tab 2
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">
                                                    Tab 3
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
                                                    {projects.map(
                                                        (project, index) => {
                                                            return (
                                                                <ProjectCard
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
                                                                <ProjectCard
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
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    );
};

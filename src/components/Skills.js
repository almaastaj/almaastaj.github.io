import meter1 from "../assets/img/highlight10.png";
import meter2 from "../assets/img/highlight2.5.png";
import meter3 from "../assets/img/highlight2.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import { FaBriefcase } from "react-icons/fa";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>General Information</h2>
                            <p>
                                I am <strong> Almaas Taj,</strong> a
                                <strong> Software Engineer </strong> based in
                                India, with over <strong> 2.5+ years</strong> of
                                professional experience in the field. I
                                graduated from{" "}
                                <strong> BITS Pilani in 2020. </strong> I am
                                Passionate about crafting both visually
                                appealing and highly functional websites.
                                <br />
                                My journey into software engineering began with
                                fascination for coding during my college days,
                                where I delved into various programming
                                languages and discovered my knack for
                                <strong> problem-solving. </strong> Since then,
                                I've been fortunate to work on a diverse range
                                of projects, honing my skills in
                                <strong>
                                    {" "}
                                    web development, backend systems and
                                    software architecture.{" "}
                                </strong>
                                My approach to software engineering is rooted in
                                a commitment to{" "}
                                <strong>
                                    {" "}
                                    delivering robust and scalable solutions{" "}
                                </strong>{" "}
                                that not only meet the needs of users but also
                                exceed expectations.
                            </p>
                            <h2>Highlights</h2>
                            <Carousel
                                responsive={responsive}
                                infinite={true}
                                className="owl-carousel owl-theme skill-slider"
                            >
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>Software Projects</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image" />
                                    <h5>Years of Experience</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>Certification Completed</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image" />
                                    <h5>Finacle Development Experience</h5>
                                </div>
                            </Carousel>{" "}
                            <br />
                            <h2>Technical Skills</h2>
                            <div className="skill-list">
                                <strong>Programming Language: </strong>
                                Java, Python, JavaScript. <br />
                                <strong>Developer Tools: </strong>
                                React Dev tools, Browser Dev tools, Command
                                Terminal, Git. <br />
                                <strong>Web Development: </strong>
                                React, NodeJS, HTML, CSS. <br />
                                <strong>Database: </strong>
                                SQL, MongoDB, MySQL.
                                <br />
                                <strong>
                                    IDE (Integrated Development Environment):
                                </strong>
                                VSCode, Eclipse.
                            </div>
                            <div className="timeline">
                                <h2>Professional Timeline</h2>
                                <div className="timeline-item">
                                    <div className="tl-icon">
                                        <FaBriefcase />
                                    </div>
                                    <h5 className="align-center">
                                        <a
                                            href="https://www.infosys.com/"
                                            target="_blank"
                                        >
                                            Infosys
                                        </a>
                                        &nbsp; | &nbsp;
                                        <a
                                            href="https://www.edgeverve.com/"
                                            target="_blank"
                                        >
                                            EdgeVerve
                                        </a>
                                        <span> - Senior System Engineer</span>{" "}
                                        <span className="invisible">
                                            ---------------------{" "}
                                        </span>
                                        <span>2022 - 2025</span>
                                    </h5>
                                    <h5>General Company Info:</h5>
                                    <ol>
                                        <li>
                                            <strong>Infosys Limited </strong> is
                                            a multinational corporation that
                                            provides information technology,
                                            consulting, and outsourcing
                                            services.
                                        </li>
                                        <li>
                                            <strong>
                                                EdgeVerve Systems Limited{" "}
                                            </strong>
                                            is a wholly-owned subsidiary of
                                            Infosys Limited, specializing in
                                            providing software products and
                                            solutions for various industries.
                                        </li>
                                        <li>
                                            EdgeVerve focuses on developing and
                                            offering innovative
                                            <strong>
                                                {" "}
                                                software products and platforms{" "}
                                            </strong>
                                            across different domains such as
                                            <strong>
                                                {" "}
                                                banking, financial services,{" "}
                                            </strong>
                                            insurance, supply chain management,
                                            and digital commerce.
                                        </li>
                                    </ol>
                                    <h5>Product Info:</h5>
                                    <ol>
                                        <li>
                                            <strong>
                                                <a
                                                    href="https://www.edgeverve.com/finacle/"
                                                    target="_blank"
                                                >
                                                    Finacle:
                                                </a>
                                            </strong>{" "}
                                            A comprehensive banking solution
                                            suite catering to various
                                            <strong>
                                                {" "}
                                                banking needs including core
                                                banking, digital banking,
                                                payments, analytics,{" "}
                                            </strong>
                                            and more. It serves over
                                            <strong> 1 Billion</strong>{" "}
                                            customers globally.
                                        </li>
                                        <li>
                                            Worked in
                                            <strong>
                                                {" "}
                                                Finacle Channels Development
                                                Team
                                            </strong>{" "}
                                            of <strong> Finacle </strong>{" "}
                                            Product for
                                            <strong> 2+ years. </strong>
                                        </li>
                                    </ol>
                                    <h5>Personal Work Info:</h5>
                                    <ol>
                                        <li>
                                            Worked on{" "}
                                            <strong>
                                                Finacle 11.16 Digital Engagement
                                                Hub (DEH) Alert API development.
                                            </strong>{" "}
                                            I primarily focused on Alert
                                            Registration and Alert Recipient
                                            Segment Fetch API development.
                                        </li>
                                        <li>
                                            Worked on Integrating Finacle 11.16
                                            DEH with{" "}
                                            <strong>
                                                Alert Enterprise 11.16
                                            </strong>{" "}
                                            which provided features such as
                                            <strong>
                                                {" "}
                                                Alert Subscription, Alert
                                                Channel Personalisation and
                                                Alert Unsubscription.
                                            </strong>
                                        </li>
                                        <li>
                                            Worked on Integrating{" "}
                                            <strong>Finacle 11.17 DEH</strong>{" "}
                                            with{" "}
                                            <strong>
                                                Alert Enterprise 11.17
                                            </strong>{" "}
                                            using <strong>Apache Camel.</strong>
                                        </li>
                                        <li>
                                            Worked on adding new features to
                                            Finacle 11.17 DEH, which focused on
                                            expanding the Alert APIs to include
                                            features such as{" "}
                                            <strong>
                                                Alert Personalisation and
                                                Channel Personalisation
                                            </strong>{" "}
                                            based on Account Id, Ability to
                                            change the trigger condition for
                                            which alerts are raised.
                                        </li>
                                        <li>
                                            Created a{" "}
                                            <strong>video course</strong>{" "}
                                            explaining the functionality and
                                            workings of Alert APIs on{" "}
                                            <strong>
                                                Lex (Infosys education Platform)
                                            </strong>{" "}
                                            which garnered around{" "}
                                            <strong>500+</strong> unique views
                                            from colleagues on Lex.
                                        </li>
                                        <li>
                                            Worked on{" "}
                                            <strong>
                                                localization of APIs for india
                                            </strong>{" "}
                                            such as Loan APIs, Pension Schemes
                                            APIs, Term Deposit APIs, Account
                                            Listing APIs, etc.
                                        </li>
                                        <li>
                                            Worked on creating Treasury APIs
                                            using{" "}
                                            <strong>
                                                Experience Service Framework
                                                (XSF)
                                            </strong>{" "}
                                            which is a new Framework
                                            architecture to create Rest APIs for
                                            Finacle.
                                        </li>
                                        <li>
                                            Worked on <strong>HIF Tool</strong>{" "}
                                            which uses <strong>Javapoet</strong>{" "}
                                            to convert the input XML transformer
                                            files to equivalent Java files with
                                            Input and Output DTOs. Then these
                                            generated files are used in XSF API
                                            to connect to{" "}
                                            <strong>
                                                Finacle Core Services
                                            </strong>
                                            .
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img
                className="background-image-left"
                src={colorSharp}
                alt="Image"
            />
        </section>
    );
};

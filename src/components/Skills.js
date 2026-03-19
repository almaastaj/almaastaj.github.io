import meter1 from "../assets/img/highlight10.png";
import meter2 from "../assets/img/highlight3.5.png";
import meter3 from "../assets/img/highlight3.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import { FaBriefcase } from "react-icons/fa";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
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
                                <strong> Software Engineer </strong> based in India, with over{" "}
                                <strong> 3.5+ years</strong> of professional experience in the
                                field. I graduated from <strong> BITS Pilani in 2020. </strong> I am
                                Passionate about crafting both visually appealing and highly
                                functional websites.
                                <br />
                                My journey into software engineering began with fascination for
                                coding during my college days, where I delved into various
                                programming languages and discovered my knack for
                                <strong> problem-solving. </strong> Since then, I've been fortunate
                                to work on a diverse range of projects, honing my skills in
                                <strong>
                                    {" "}
                                    web development, backend systems and software architecture.{" "}
                                </strong>
                                My approach to software engineering is rooted in a commitment to{" "}
                                <strong> delivering robust and scalable solutions </strong> that not
                                only meet the needs of users but also exceed expectations.
                            </p>
                            <h2>Highlights</h2>
                            <Carousel
                                responsive={responsive}
                                infinite={true}
                                className="owl-carousel owl-theme skill-slider"
                            >
                                <div className="item">
                                    <img src={meter1} alt="Software Projects - 10+" />
                                    <h5>Software Projects</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Years of Experience - 3.5+" />
                                    <h5>Years of Experience</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Certificates Completed - 10+" />
                                    <h5>Certification Completed</h5>
                                </div>
                                <div className="item">
                                    <img
                                        src={meter3}
                                        alt="Experience in Finacle Software Development - 3+"
                                    />
                                    <h5>Finacle Development Experience</h5>
                                </div>
                            </Carousel>{" "}
                            <br />
                            <h2>Technical Skills</h2>
                            <div className="skill-list">
                                <strong>Programming Language: </strong>
                                Java, Python, JavaScript. <br />
                                <strong>Tools & DevOps: </strong>
                                React Dev tools, Git/GitHub (CI/CD), Command Line/Shell Scripting,
                                Chrome DevTools. <br />
                                <strong>Frontend Development: </strong>
                                React.js, HTML5, CSS3, Responsive Design. <br />
                                <strong>Backend & Automation: </strong>
                                Node.js, RESTful APIs, Python Automation (SharePoint/OneDrive
                                integration, Outlook data parsing). <br />
                                <strong>Databases & Storage: </strong>
                                Oracle Database, MongoDB, MySQL, PostgreSQL.
                                <br />
                                <strong>Core CS Concepts:</strong> Data Structure and Algorithms,
                                Dynamic Programming, Data Engineering (Delta Loads, ETL).
                            </div>
                            <div className="timeline" id="timeline">
                                <h2>Professional Timeline</h2>
                                <div className="timeline-item">
                                    <div className="tl-icon">
                                        <FaBriefcase />
                                    </div>
                                    <h5 className="align-center">
                                        <a
                                            href="https://www.infosys.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Infosys
                                        </a>
                                        &nbsp; | &nbsp;
                                        <a
                                            href="https://www.edgeverve.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            EdgeVerve
                                        </a>
                                        <span> - Senior System Engineer</span>{" "}
                                        <span className="invisible">--------------------- </span>
                                        <span>2022 - 2026</span>
                                    </h5>
                                    <h5>General Company Info:</h5>
                                    <ol>
                                        <li>
                                            <strong>Infosys Limited </strong> is a multinational
                                            corporation that provides information technology,
                                            consulting, and outsourcing services.
                                        </li>
                                        <li>
                                            <strong>EdgeVerve Systems Limited </strong>
                                            is a wholly-owned subsidiary of Infosys Limited,
                                            specializing in providing software products and
                                            solutions for various industries.
                                        </li>
                                        <li>
                                            EdgeVerve focuses on developing and offering innovative
                                            <strong> software products and platforms </strong>
                                            across different domains such as
                                            <strong> banking, financial services, </strong>
                                            insurance, supply chain management, and digital
                                            commerce.
                                        </li>
                                    </ol>
                                    <h5>Product Info:</h5>
                                    <ol>
                                        <li>
                                            <strong>
                                                <a
                                                    href="https://www.edgeverve.com/finacle/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Finacle:
                                                </a>
                                            </strong>{" "}
                                            A comprehensive banking solution suite catering to
                                            various
                                            <strong>
                                                {" "}
                                                banking needs including core banking, digital
                                                banking, payments, analytics,{" "}
                                            </strong>
                                            and more. It serves over
                                            <strong> 1 Billion</strong> customers globally.
                                        </li>
                                        <li>
                                            Worked in
                                            <strong>
                                                {" "}
                                                Finacle Channels Development Team
                                            </strong> of <strong> Finacle </strong> Product for
                                            <strong> 3+ years. </strong>
                                        </li>
                                    </ol>
                                    <h5>Personal Work Info:</h5>
                                    <ol>
                                        <li>
                                            Developed a <strong>Software Management Portal</strong>{" "}
                                            to track and manage software vulnerabilities and
                                            End-of-life (EOL) across various servers and software
                                            components, resulting in a 25% reduction in security
                                            risks and improved compliance with industry standards.
                                        </li>
                                        <li>
                                            Engineered the <strong>HIF Tool</strong> using JavaPoet
                                            to automate the conversion of XML transformer files into
                                            Java DTOs. This eliminated manual boilerplate for the
                                            entire Finacle Channels Development team, reducing XSF
                                            API development time by 30%.
                                        </li>
                                        <li>
                                            Architected Treasury APIs using the{" "}
                                            <strong>Experience Service Framework (XSF)</strong>,
                                            transitioning to a modern REST architecture that cut
                                            development cycles by 20%.
                                        </li>
                                        <li>
                                            Developed a custom data modeling engine for the
                                            <strong>Information Reporting (IR) service</strong>,
                                            enabling admin users to generate custom reports and
                                            significantly increasing data flexibility for 20+
                                            enterprise clients.
                                        </li>
                                        <li>
                                            Authored and published{" "}
                                            <strong>5+ technical video courses</strong> on the
                                            Infosys LeX platform, educating 500+ developers on the
                                            internal architecture of Alert APIs and Information
                                            Reporting microservices.
                                        </li>
                                        <li>
                                            Spearheaded the Finacle 11.19 integration with Alert
                                            Enterprise, designing high-performance APIs for alert
                                            subscription and alert delivery that improved system
                                            throughput by 40%.
                                        </li>
                                        <li>
                                            Optimized critical IR Microservices for performance and
                                            security, achieving a 20% increase in API efficiency and
                                            hardening the system against vulnerabilities.
                                        </li>
                                        <li>
                                            Engineered location-aware time zone logic within IR
                                            Microservices to ensure global report accuracy,
                                            resulting in a documented 15% increase in client
                                            satisfaction scores.
                                        </li>
                                        <li>
                                            Led multi-version API evolutions for Finacle Digital
                                            Engagement Hub (DEH v11.16-11.18), integrating it with
                                            Alert Enterprise Microservice which has complex features
                                            including Apache Camel integrations, account-based
                                            personalization, and dynamic trigger conditions.
                                        </li>
                                        <li>
                                            Developed localized banking APIs for the Indian market,
                                            including specialized modules for Loans, Pension
                                            Schemes, Term Deposits, and Account Listing services.
                                        </li>
                                        <li>
                                            Standardized Alert Registration and Recipient Segment
                                            Fetching processes, ensuring seamless synchronization
                                            between core banking services and external engagement
                                            platforms.
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Background" />
        </section>
    );
};

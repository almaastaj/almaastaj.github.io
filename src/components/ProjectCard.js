import { Col } from "react-bootstrap";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { useState } from "react";

export const ProjectCard = ({ title, description, imgUrl, sourceUrl, liveUrl }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleMouseEnter2 = () => {
        setIsHovered2(true);
    };

    const handleMouseLeave2 = () => {
        setIsHovered2(false);
    };
    return (
        <Col size={12} sm={12} md={6}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="This is a Project" />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <p className="fw-bold text-warning">{description}</p>
                    <div className="d-flex justify-content-center">
                        <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
                            {" "}
                            <FaGithub
                                color={isHovered ? "#3DC2EC" : "black"}
                                size={48}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            />
                        </a>

                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ms-3"
                        >
                            {" "}
                            <FaGlobe
                                color={isHovered2 ? "#4B70F5" : "black"}
                                size={48}
                                onMouseEnter={handleMouseEnter2}
                                onMouseLeave={handleMouseLeave2}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </Col>
    );
};

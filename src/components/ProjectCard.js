import { Col } from "react-bootstrap";
import { FaGithub, FaGlobe } from "react-icons/fa";

export const ProjectCard = ({
    title,
    description,
    imgUrl,
    sourceUrl,
    liveUrl,
}) => {
    return (
        <Col size={12} sm={12} md={6}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <p className="fw-bold text-warning">{description}</p>
                    <div className="d-flex justify-content-center">
                        <a href={sourceUrl} target="_blank">
                            {" "}
                            <FaGithub color="black" size={48} />
                        </a>

                        <a href={liveUrl} target="_blank" className="ms-3">
                            {" "}
                            <FaGlobe color="black" size={48} />
                        </a>
                    </div>
                </div>
            </div>
        </Col>
    );
};

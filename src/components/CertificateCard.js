import { Col } from "react-bootstrap";
import { MdVerifiedUser } from "react-icons/md";
import { useState } from "react";
export const CertificateCard = ({
    title,
    description,
    imgUrl,
    sourceUrl,
    type,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <Col size={12} sm={12} md={type === "badge" ? 4 : 6}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <p className="fw-bold text-warning">{description}</p>
                    <div className="justify-content-center">
                        <a href={sourceUrl} target="_blank">
                            {" "}
                            <MdVerifiedUser
                                color={isHovered ? "#03C988" : "black"}
                                size={48}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </Col>
    );
};

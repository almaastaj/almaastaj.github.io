import { BiSolidUpArrowCircle } from "react-icons/bi";
import { useState } from "react";
export const Footer = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <footer className="footer">
            <div className="text-center">
                <p className="p-3 text-warning">
                    Thank you for visiting my portfolio, I look forward to
                    connecting with you soon! &nbsp; &nbsp; &nbsp;
                    <a href="#home">
                        <BiSolidUpArrowCircle
                            color={isHovered ? "#3DC2EC" : "#03C988"}
                            size={48}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        />
                    </a>
                </p>
            </div>
        </footer>
    );
};

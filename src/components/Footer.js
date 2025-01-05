import { BiSolidUpArrowCircle } from "react-icons/bi";

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="text-center">
                <p className="text-warning">
                    Thank you for visiting my portfolio, I look forward to
                    connecting with you soon!{"   "}
                    <a href="#home">
                        <BiSolidUpArrowCircle color="green" size={48} />
                    </a>
                </p>
            </div>
        </footer>
    );
};

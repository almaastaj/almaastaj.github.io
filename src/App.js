import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Certification } from "./components/Certification";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Banner />
            <Skills />
            <Projects />
            <Certification />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;

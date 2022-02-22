import Project from "./components/Projects/Project";
import Contact from "./components/Contact/Contact";
import Work from "./components/Work Experience/Work";
import Bio from "./components/Biography/Bio";


function App() {

    return (
        <div>
            <Bio />
            <Project />
            <Work />
            <Contact />

        </div>
    );
}

export default App;
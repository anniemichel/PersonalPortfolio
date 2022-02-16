import './Project.css';


function Project()
{
    function redirect() {
        window.location.href = "https://www.linkedin.com/in/anne-michel-08242218a/"
    }

    return (
        <div className="Project">
            <h1>
                Welcome!
            </h1>
            <h1>
                Anne Michel's LinkedIn:
            </h1>
            <button onClick={redirect}>
                LinkedIn
            </button>

        </div>
    );
}

export default Project;


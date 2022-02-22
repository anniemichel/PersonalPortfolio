import './Project.css';


function Project()
{
    function MilkBankLink() {
        window.location.href = "https://devpost.com/software/milk-bank-optimizer"
    }

    function SocialGoodLink() {
        window.location.href = "https://devpost.com/software/social-good-app"
    }

    return (
        <div>
            <h1>Projects</h1>
            <div className='container'>
                <div className='card'>
                    <h2>MilkBank Website</h2>
                    <h4>
                        Creating a website that allows milk bank volunteers to enter donation nutrient information and receive multiple combinations that meet target calorie and protein counts.
                    </h4>
                    <div className='btn'>
                        <btn onClick = {MilkBankLink}>DevPost</btn>
                    </div>
                </div>
                <div className='card'>
                    <h2>Social Good App</h2>
                    <h4>
                        Created an app that increases accessibility for people with disabilities, allowing them to request help with tasks and enable other users to complete the tasks.
                    </h4>
                    <div className='btn'>
                        <btn onClick = {SocialGoodLink}>DevPost</btn>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;


import './Project.css';
import LinkedCard from "../Cards/LinkedCard";

function Project()
{
    return (
        <div>
            <h1>Projects</h1>
            <div className='container'>
                <LinkedCard title='MilkBank Website' description='Creating a website that allows milk bank volunteers to enter donation nutrient information and receive multiple combinations that meet target calorie and protein counts.' link='https://devpost.com/software/milk-bank-optimizer'/>
                <LinkedCard title='Social Good App' description='Developed an app that increases accessibility for people with disabilities, allowing them to request help with tasks and enable other users to complete the tasks.' link='https://devpost.com/software/social-good-app'/>
            </div>
        </div>
    );
}

export default Project;


import img from "../../images/ProfilePicture.png";
import "../../index.css";


function Bio() {
    return (
        <div>
            <h1>Anne Michel's Portfolio Website</h1>
            <div className='container'>
                <img className='image' src={img} />
            </div>
        </div>
    );
}

export default Bio;
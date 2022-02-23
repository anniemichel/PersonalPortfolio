import './Cards.css';

function LinkedCard(props) {
    function Redirect() {
        window.location.href = props.link
    }

    return(
        <div className='card'>
            <h2>{props.title}</h2>
            <h4>{props.description}</h4>
            <div className='btn'>
                <btn onClick ={Redirect}>DevPost</btn>
            </div>
        </div>
    );
}

export default LinkedCard;
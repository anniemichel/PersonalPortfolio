

function Contact() {
    function LinkedInLink() {
        window.location.href = "https://www.linkedin.com/in/anne-michel-08242218a/"
    }

    return(
        <div>
            <h1>Contact</h1>
            <div className='btn'>
                <btn onClick = {LinkedInLink}>LinkedIn</btn>
            </div>
        </div>
    );
}

export default Contact;
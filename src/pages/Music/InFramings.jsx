import bandImage from '../../assets/05_20250701-band-min.jpg';

import './Music.css';

function InFramings() {
    return (
        <div className="band">
            <img className='fade-in' src={bandImage} />
            <p className='bandText'>In Framings is an indie rock band I started 4 years ago. It has
                served as my main creative outlet and a chance to lead a project, connect with
                a local community, and grow as both a musician and organizer. As the primary contact
                for booking and events, I learned the value of professionalism, clear communication,
                and networking in a fast-moving scene.<br></br><br></br>Photo by Cole London. Edited by me.
            </p>
        </div>
    )
}

export default InFramings;
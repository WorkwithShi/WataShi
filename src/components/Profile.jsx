import { userData } from "../data.js";
import { Typewriter } from "react-simple-typewriter";

export default function Profile(){
    return(
        <div className="profile-header">
            <div className="name-title-group">
                <h1 className="name">{userData.name}</h1>
                <span className="title-divider"></span>
                
                {/*Typing Effect */}
                <h2 className="title" style={{minHeight:'2.5rem',display:'flex',alignItems:'center'}}>
                    <Typewriter
                        words={[
                            "Frontend Developer",
                            "Creative Thinker",
                            "Japanese Learner",
                            "Being Cute"
                        ]}
                        loop={true}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h2>
                <span className="title-divider"></span>
                <h2 className ="location">{userData.location}</h2>
            </div>
            
        </div>

    );

}


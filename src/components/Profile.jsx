import { userData } from "../data.js";

export default function Profile(){
    return(
        <div className="profile-header">
            <div className="name-title-group">
                <h1 className="name">{userData.name}</h1>
                <span className="title-divider">|</span>
                <h2 className="title">{userData.title}</h2>
                <span className="title-divider">|</span>
                <h2 className ="location">{userData.location}</h2>
            </div>
        </div>

    );

}


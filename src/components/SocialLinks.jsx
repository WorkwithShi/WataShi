import { userData } from "../data.js";

function SocialLinks(){
    return (
        <div className="social-links">
            {userData.social.map((link, index)=>(
                <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <img
                    src= {link.icon}
                    alt = {`${link.name}icon`}
                    className="social-icon"
                    />
                    <span>{link.name}</span>
                </a>
            ))}
        </div>

    );
}

export default SocialLinks;
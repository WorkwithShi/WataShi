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
                    loading="lazy"
                    alt = {`${link.name}icon`}
                    className="w-6 h-6"
                    />
                    <span>{link.name}</span>
                </a>
            ))}
        </div>

    );
}

export default SocialLinks;
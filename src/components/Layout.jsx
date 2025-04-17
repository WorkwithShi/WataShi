import Profile from "./Profile";
import Navbar from "./Navbar";
import SocialLinks from "./SocialLinks";

export default function Layout({ children }){
    return (
        <div className="layout">
            <header className="header">
                <Profile />
            </header>
          
            <Navbar />

            <main className="content">{children}</main>

            <footer className="footer">
                <SocialLinks />
            </footer>
        </div>
    );
}


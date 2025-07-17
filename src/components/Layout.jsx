import Profile from "./Profile";
import Navbar from "./Navbar";


export default function Layout({ children }){
    return (
        <div className="layout">
            <header className="header">
                <Profile />
            </header>
          
            <Navbar />

            <main className="content">{children}</main>
            

        </div>
        
    );
}


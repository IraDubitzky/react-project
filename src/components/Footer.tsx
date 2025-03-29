import { FunctionComponent } from "react";

interface FooterProps {

}

const Footer: FunctionComponent<FooterProps> = () => {
    return (
        <footer className="footer">
            <div className="container-fluid text-white h6 text-center ">
                <p ><i className="fa-regular fa-copyright"> </i><strong> Ira Dubitzky Kaplun.</strong> All rights reserved.</p >
            </div >
        </footer>


    );
}

export default Footer;
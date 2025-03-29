import { FunctionComponent } from "react";

interface AboutProps {

}

const About: FunctionComponent<AboutProps> = () => {
    return (
        <div className="container my-3 w-50">
            <div className="card shadow-lg">
                <div className="card-body m-4">
                    <h1 className="card-title text-center mb-4 fs-2 fw-bold text-justify">About</h1>
                    <p className="card-text w-100 text-center mb-4">
                        <strong>BCARD</strong> is a modern web application that allows users to create, manage, and share digital business cards with ease.
                        The platform is designed for both individual professionals and businesses, offering a streamlined way to present and promote their services online.
                    </p>

                    <h4 className="mt-4 fw-semibold text-center">Main Features:</h4>
                    <ul className="list-group list-group-flush mb-3 text-center">
                        <li className="list-group-item">Create, edit, and delete personalized business cards</li>
                        <li className="list-group-item">Like and save favorite cards</li>
                        <li className="list-group-item">View cards by different user types: guest, regular user, or business user</li>
                        <li className="list-group-item">Display a dynamic map based on the business address</li>
                        <li className="list-group-item">Securely register and log in using JWT-based authentication</li>
                        <li className="list-group-item">Enjoy a responsive, user-friendly interface</li>
                    </ul>

                    <h4 className="fw-semibold">Technologies Used:</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>React</strong> for building the user interface</li>
                        <li className="list-group-item"><strong>Formik</strong> for form management</li>
                        <li className="list-group-item"><strong>Toastify</strong> for user notifications</li>
                        <li className="list-group-item"><strong>Leaflet & Nominatim API</strong> for map integration</li>
                        <li className="list-group-item"><strong>Context API</strong> for global state management</li>
                        <li className="list-group-item"><strong>JWT</strong> for authentication</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;
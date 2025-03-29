import { FunctionComponent } from "react";
import { User } from "../interfaces/user/User";
import Map from "../components/cardVisibility/Map";

interface Props {
    user: User;
}

const Profile: FunctionComponent<Props> = ({ user }) => {
    const fullAddress = `${user.address.city}`;

    return (
        <div className="container p-3">
            <div className="row justify-content-center">
                <div className="col-md-6 text-center p-3 border rounded shadow user-profile-card">
                    {user.image?.url && (
                        <div className="mx-auto mb-3" style={{ width: "200px", height: "200px", overflow: "hidden", borderRadius: "50%", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
                            <img
                                src={user.image.url}
                                alt={user.image.alt || "Profile"}
                                className="img-fluid h-100 w-100 object-fit-cover"
                            />
                        </div>
                    )}
                    <h1 className="h2 fw-bold my-3">{user.name.first} {user.name.last}</h1>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Phone:</strong> {user.phone}</p>
                    <p><strong>Type:</strong> {user.isBusiness ? "Business" : "Regular"}</p>
                    <p><strong>Address:</strong> {fullAddress}</p>
                    <div className="w-100 mt-3 rounded overflow-hidden" style={{ height: "35vh" }}>
                        <Map address={fullAddress} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;

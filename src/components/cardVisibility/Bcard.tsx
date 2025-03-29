import { FunctionComponent } from "react";
import { Card } from "../../interfaces/card/Card";
import { Link } from "react-router-dom";
import { useLikedCards } from "../../context/LikedCardsContext";

interface BcardProps {
    card: Card;
    user?: any;
}

const Bcard: FunctionComponent<BcardProps> = ({ card, user }) => {
    const isLoggedIn = !!user;
    const isBusinessOwner = user?.isBusiness && user._id === card.user_id;
    const { toggleLike, isCardLiked } = useLikedCards();
    const liked = isCardLiked(card._id as string);

    const handleDelete = (id: string) => {
        console.log("Delete card:", id);
    };

    return (
        <div className="card h-100 w-100" style={{ maxWidth: "100%" }}>
            <img
                src={card.image?.url || "https://via.placeholder.com/300"}
                alt={card.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body d-flex flex-column">
                <h2 className="card-title text-truncate">{card.title}</h2>
                <h5 className="card-subtitle mb-3">{card.subtitle}</h5>
                <p className="card-text">
                    <strong>טלפון:</strong> {card.phone}<br />
                    <strong>כתובת:</strong> {`${card.address.street} ${card.address.houseNumber}, ${card.address.city}`}<br />
                    <strong>מספר כרטיס:</strong> {card.bizNumber}
                </p>
                <div className="mt-auto d-flex justify-content-center gap-3">
                    <Link to={`tel:${card.phone}`} className="btn btn-outline-info rounded-circle">
                        <i className="fa-solid fa-phone"></i>
                    </Link>
                    {isLoggedIn && (
                        <button
                            className={`btn rounded-circle ${liked ? "btn-success" : "btn-outline-success"}`}
                            onClick={() => toggleLike(card)}
                        >
                            <i className="fa-solid fa-thumbs-up"></i>
                        </button>
                    )}
                    {isBusinessOwner && (
                        <>
                            <Link to={`/edit-card/${card._id}`} className="btn btn-outline-warning rounded-circle">
                                <i className="fa-solid fa-pen"></i>
                            </Link>
                            <button
                                className="btn btn-outline-danger rounded-circle"
                                onClick={() => handleDelete(card._id as string)}
                            >
                                <i className="fa-solid fa-trash"></i>
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Bcard;
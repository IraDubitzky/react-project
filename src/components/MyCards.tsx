import { FunctionComponent, useEffect, useState } from "react";
import { deleteCard, getMyCards } from "../services/cardsService";
import { Card } from "../interfaces/card/Card";
import { jwtDecode } from "jwt-decode";
import { useNavigate, useLocation } from "react-router-dom";
import {
    confirmDeleteDialog,
    deleteMassege,
    errorMassage,
} from "../services/feedbackService";
import Map from "../components/cardVisibility/Map";

const MyCards: FunctionComponent = () => {
    const [cards, setCards] = useState<Card[]>([]);
    const [error, setError] = useState("");
    const [isBusiness, setIsBusiness] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 3;
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const decoded: any = jwtDecode(token);
            setIsBusiness(decoded?.isBusiness || false);
        }
    }, []);

    useEffect(() => {
        getMyCards()
            .then((res) => {
                setCards(res.data);
                setCurrentPage(1);
            })
            .catch((err) => {
                console.error(err);
                setError("Couldn't load cards");
            });
    }, [location]);

    const handleDelete = async (cardId: string) => {
        const confirmed = await confirmDeleteDialog();
        if (!confirmed) return;

        try {
            await deleteCard(cardId);
            setCards((prev) => prev.filter((card) => card._id !== cardId));
            deleteMassege("The card has been deleted.🗑️");
        } catch (err) {
            errorMassage("Card deletion failed.❌");
            console.error("Failed to delete card:", err);
        }
    };

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);
    const totalPages = Math.ceil(cards.length / cardsPerPage);

    return (
        <div className="container py-4">
            <h1 className="mb-4 text-center">My Business Cards</h1>
            {error && <p className="text-danger text-center">{error}</p>}
            <div className="row">
                {currentCards.map((card) => (
                    <div key={card._id} className="col-md-4 mb-4">
                        <div className="card h-100 d-flex flex-column" style={{ minHeight: "400px" }}>
                            <img src={card.image.url} className="card-img-top" alt={card.image.alt} />
                            <div className="card-body d-flex flex-column">
                                <div className="flex-grow-1 overflow-auto" style={{ maxHeight: '180px' }}>
                                    <h5 className="card-title">{card.title}</h5>
                                    <p className="card-text text-truncate">{card.description}</p>
                                    <p><strong>Phone:</strong> {card.phone}</p>
                                    <p><strong>Email:</strong> {card.email}</p>
                                </div>
                                <div className="my-2">
                                    <Map address={`${card.address.street} ${card.address.houseNumber}, ${card.address.city}, ${card.address.country}`} />
                                </div>
                                {isBusiness && (
                                    <div className="text-end mt-2">
                                        <button
                                            className="btn btn-warning me-2"
                                            onClick={() => navigate(`/edit-card/${card._id}`)}
                                        >
                                            <i className="fa-solid fa-file-pen"></i>
                                        </button>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => handleDelete(card._id!)}
                                        >
                                            <i className="fa-regular fa-trash-can"></i>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {cards.length > cardsPerPage && (
                <div className="mt-4 d-flex justify-content-center gap-3">
                    <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="btn btn-outline-info"
                    >
                        ← Previous
                    </button>
                    <span className="align-self-center">
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="btn btn-outline-info"
                    >
                        Next →
                    </button>
                </div>
            )}
            {isBusiness && (
                <div className="position-fixed top-0 end-0 p-5 m-5">
                    <button
                        onClick={() => navigate("/new-card")}
                        className="btn btn-lg rounded-circle shadow bg-info"
                        style={{ width: "60px", height: "60px", color: "black" }}
                    >
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </div>
            )}
        </div>
    );
};

export default MyCards;

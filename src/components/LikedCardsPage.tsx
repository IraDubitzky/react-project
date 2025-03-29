import { useState } from "react";
import { useLikedCards } from "../context/LikedCardsContext";
import Bcard from "./cardVisibility/Bcard";

const LikedCardsPage = ({ user }: { user: any }) => {
    const { likedCards, isLoading } = useLikedCards();
    const cardsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);

    if (isLoading) {
        return <p>Loading the cards you liked...</p>;
    }

    if (likedCards.length === 0) {
        return <p>No cards found that you liked.</p>;
    }
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = likedCards.slice(indexOfFirstCard, indexOfLastCard);

    const totalPages = Math.ceil(likedCards.length / cardsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="container mt-4 mb-3 text-center">
            <h1 className="mb-4">The cards you liked</h1>
            <div className="cards-grid">
                {currentCards.map((card) => (
                    <Bcard key={card._id} card={card} user={user} />
                ))}
            </div>
            <div className="mt-4 d-flex justify-content-center gap-3">
                <button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className="btn btn-outline-info"
                >
                    ← Previous
                </button>
                <span className="align-self-center">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                    className="btn btn-outline-info"
                >
                    Next →
                </button>
            </div>
        </div>
    );
};

export default LikedCardsPage;

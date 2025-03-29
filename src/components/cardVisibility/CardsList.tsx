import { useState, FC } from "react";
import Bcard from "./Bcard";
import { Card } from "../../interfaces/card/Card";

interface CardsListProps {
    cards: Card[];
    user: any;
}

const CardsList: FC<CardsListProps> = ({ cards, user }) => {
    const cardsPerPage = 12;
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);
    const totalPages = Math.ceil(cards.length / cardsPerPage);

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
        <div className="container text-center my-3">
            <h1>Cards Page</h1>
            <p>Here you can find business cards from all categories</p>
            <div className="container d-grid gap-3 cards-grid">
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

export default CardsList;

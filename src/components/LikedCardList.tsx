import { useLikedCards } from "../context/LikedCardsContext";
import Bcard from "./cardVisibility/Bcard";

interface LikedCardsListProps {
    user: any;
}

const LikedCardsList = ({ user }: LikedCardsListProps) => {
    const { likedCards } = useLikedCards();

    if (!likedCards.length) return <p>No cards have been liked.</p>;

    return (
        <div className="row">
            {likedCards.map((card) => (
                <div key={card._id} className="col-md-4 mb-4">
                    <Bcard card={card} user={user} />
                </div>
            ))}
        </div>
    );
};

export default LikedCardsList;

import { FunctionComponent, useEffect, useState } from "react";
import { Card } from "../interfaces/card/Card";
import { getAllCards } from "../services/cardsService";
import CardsList from "./cardVisibility/CardsList";
import { useNavigate } from "react-router-dom";

interface HomeProps {
    user: any;
}

const Home: FunctionComponent<HomeProps> = ({ user }) => {
    const navigate = useNavigate();
    const [card, setCard] = useState<Card[]>([]);

    useEffect(() => {
        getAllCards()
            .then((res) => {
                setCard(res.data);
            })
            .catch((err) => console.error("שגיאה בשליפת כרטיסים:", err));
    }, []);

    return (
        <>
            {user?.isBusiness && (
                <div className="position-fixed top-10 end-0 right-10 p-5 m-5">
                    {<button
                        onClick={() => navigate("/new-card")}
                        className="btn btn-lg rounded-circle shadow bg-info"
                        style={{ width: "60px", height: "60px", color: "black" }}
                    >
                        <i className="fa-solid fa-plus"></i>
                    </button>}
                </div>
            )}

            <div className="container text-center my-3">
                <CardsList cards={card} user={user} />
            </div>
        </>
    );
};

export default Home;

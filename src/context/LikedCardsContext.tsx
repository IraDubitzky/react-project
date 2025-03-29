import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Card } from "../interfaces/card/Card";

interface LikedCardsContextType {
    likedCards: Card[];
    toggleLike: (card: Card) => void;
    isCardLiked: (cardId: string) => boolean;
    isLoading: boolean;
}

const LikedCardsContext = createContext<LikedCardsContextType | undefined>(undefined);
interface LikedCardsProviderProps {
    children: ReactNode;
}
export const LikedCardsProvider = ({ children }: LikedCardsProviderProps) => {
    const [likedCards, setLikedCards] = useState<Card[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        try {
            const stored = localStorage.getItem("likedCards");
            if (stored) {
                setLikedCards(JSON.parse(stored));
            }
        } catch (err) {
            console.error("בעיה בטעינת לייקים:", err);
        } finally {
            setIsLoading(false);
        }
    }, []);
    useEffect(() => {
        localStorage.setItem("likedCards", JSON.stringify(likedCards));
    }, [likedCards]);

    const toggleLike = (card: Card) => {
        setLikedCards((prev) => {
            const exists = prev.find((c) => c._id === card._id);
            return exists ? prev.filter((c) => c._id !== card._id) : [...prev, card];
        });
    };
    const isCardLiked = (cardId: string) => {
        return likedCards.some((card) => card._id === cardId);
    };
    return (
        <LikedCardsContext.Provider value={{ likedCards, toggleLike, isCardLiked, isLoading }}>
            {children}
        </LikedCardsContext.Provider>
    );
};
export const useLikedCards = () => {
    const context = useContext(LikedCardsContext);
    if (!context) {
        throw new Error("useLikedCards חייב להיקרא מתוך LikedCardsProvider");
    }
    return context;
};
export default LikedCardsContext;
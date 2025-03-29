import { FunctionComponent, useEffect, useState } from "react";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import { getCardById, updateCard } from "../../services/cardsService";
import { NormalizeCard } from "../../utils/NormalizeCard";
import { UnnormalizedCard } from "../../interfaces/card/UnnormalizedCard";
import CardForm from "./CardForm";
import { errorMassage, successMassage } from "../../services/feedbackService";

const EditCard: FunctionComponent = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [initialValues, setInitialValues] = useState<UnnormalizedCard | null>(null);

    useEffect(() => {
        if (id) {
            getCardById(id)
                .then((res) => {
                    const card = res.data;
                    setInitialValues({
                        title: card.title,
                        subtitle: card.subtitle,
                        description: card.description,
                        phone: card.phone,
                        email: card.email,
                        web: card.web || "",
                        url: card.image?.url || "",
                        alt: card.image?.alt || "",
                        state: card.address?.state || "",
                        country: card.address?.country || "",
                        city: card.address?.city || "",
                        street: card.address?.street || "",
                        houseNumber: card.address?.houseNumber?.toString() || "",
                        zip: card.address?.zip?.toString() || ""
                    });
                })
                .catch((err) => {
                    console.error("Failed to load card:", err);
                    navigate("/my-cards");
                });
        }
    }, [id, navigate]);

    const validationSchema = yup.object({
        title: yup.string().required(),
        subtitle: yup.string().required(),
        description: yup.string().required(),
        phone: yup.string().required(),
        email: yup.string().required().email(),
        web: yup.string(),
        url: yup.string(),
        alt: yup.string(),
        state: yup.string(),
        country: yup.string().required(),
        city: yup.string().required(),
        street: yup.string().required(),
        houseNumber: yup.string().required(),
        zip: yup.string()
    });

    const formik = useFormik<UnnormalizedCard>({
        initialValues: initialValues || {
            title: "", subtitle: "", description: "", phone: "", email: "",
            web: "", url: "", alt: "", state: "", country: "", city: "",
            street: "", houseNumber: "", zip: ""
        },
        enableReinitialize: true,
        validationSchema,
        onSubmit: async (values) => {
            if (!id) return;
            try {
                const normalizedCard = NormalizeCard(values);
                await updateCard(id, normalizedCard);
                successMassage("The card was updated successfully.");
                navigate("/my-cards");
            } catch (err) {
                errorMassage("Card update failed.");
                console.error("Failed to update card:", err);
            }
        }
    });

    return (
        <CardForm formik={formik} title="Edit your card" submitText="Save Changes" />
    );
};

export default EditCard;

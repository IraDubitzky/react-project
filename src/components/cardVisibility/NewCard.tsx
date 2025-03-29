import { useFormik } from "formik";
import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { NormalizeCard } from "../../utils/NormalizeCard";
import { UnnormalizedCard } from "../../interfaces/card/UnnormalizedCard";
import { postNewCard } from "../../services/cardsService";
import CardForm from "./CardForm";
import { errorMassage, successMassage } from "../../services/feedbackService";

interface NewCardProps { }

const NewCard: FunctionComponent<NewCardProps> = () => {
    const navigate = useNavigate();

    const formik = useFormik<UnnormalizedCard>({
        initialValues: {
            title: "",
            subtitle: "",
            description: "",
            phone: "",
            email: "",
            web: "",
            url: "",
            alt: "",
            state: "",
            country: "",
            city: "",
            street: "",
            houseNumber: "",
            zip: "",

        },
        validationSchema: yup.object({
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
            zip: yup.string(),

        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                const normalizedCard = NormalizeCard(values);
                await postNewCard(normalizedCard);
                resetForm();
                successMassage("The card was created successfully.");
                navigate("/my-cards");
            } catch (err) {
                errorMassage("Houston, we have a problem.");
                console.error("Failed to post new card:", err);
            }
        }
    });

    return <CardForm formik={formik} title="Create a new business card" submitText="Create" />;
};

export default NewCard;

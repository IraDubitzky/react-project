import { UnnormalizedCard } from "../interfaces/card/UnnormalizedCard";
import { Card } from "../interfaces/card/Card";

export function NormalizeCard(values: UnnormalizedCard): Card {
    return {
        title: values.title ?? "",
        subtitle: values.subtitle ?? "",
        description: values.description ?? "",
        phone: values.phone ?? "",
        email: values.email ?? "",
        web: values.web ?? "",
        image: {
            url: values.url ?? "",
            alt: values.alt ?? ""
        },
        address: {
            state: values.state ?? "",
            country: values.country ?? "",
            city: values.city ?? "",
            street: values.street ?? "",
            houseNumber: +(values.houseNumber ?? "0"),
            zip: +(values.zip ?? "0")
        }
    };
}

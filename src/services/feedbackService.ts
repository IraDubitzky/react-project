import { Bounce, toast } from "react-toastify";
import Swal from "sweetalert2";

export function successMassage(massege: string) {
    toast.success(massege, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });
}

export function errorMassage(massege: string) {
    toast.error(massege, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });
}

export function deleteMassege(massege: string) {
    toast.info(massege, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });
}

export function warningMassege(massege: string) {
    toast.warn(massege, {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });
}

export async function confirmDeleteDialog(): Promise<boolean> {
    const result = await Swal.fire({
        title: "Are you sure?",
        text: "This action will permanently delete the card.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "Cancel",
        reverseButtons: true,
    });

    return result.isConfirmed;
}

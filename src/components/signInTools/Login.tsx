import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { loginUser, getUserById } from "../../services/userService";
import { decodeToken } from "../../services/tokenService";
import { errorMassage, successMassage } from "../../services/feedbackService";

interface LoginProps {
    setUser: (user: any) => void;
}

const Login: FC<LoginProps> = ({ setUser }) => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: { email: "", password: "" },
        validationSchema: yup.object({
            email: yup.string().email().required(),
            password: yup
                .string()
                .min(7)
                .max(20)
                .required()
                .matches(
                    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*\-"])[A-Za-z\d!@#$%^&*\-"]{7,}$/,
                    'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
                ),
        }),
        onSubmit: (values, { resetForm }) => {
            loginUser(values)
                .then((res) => {
                    const token = res.data;
                    localStorage.setItem("token", token);
                    successMassage(`Welcome to BCard👋`);
                    const decoded = decodeToken(token);
                    if (decoded && decoded._id) {
                        getUserById(decoded._id).then((res) => {
                            setUser(res.data);
                            navigate("/");
                        });
                    }
                })
                .catch((err) => {
                    console.log(err);
                    errorMassage("Invalid email or password")
                });
            resetForm();
        },
    });
    return (
        <div className="container w-50 text-center py-3">
            <h1 className="h1 py-5">Login</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-floating mb-3">
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="name@example.com"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <label htmlFor="email">Email address</label>
                    {formik.touched.email && formik.errors.email && (
                        <p className="text-danger">{formik.errors.email}</p>
                    )}
                </div>
                <div className="form-floating mb-5">
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <label htmlFor="password">Password</label>
                    {formik.touched.password && formik.errors.password && (
                        <p className="text-danger">{formik.errors.password}</p>
                    )}
                </div>
                <div>
                    <button type="submit" className="btn btn-success">
                        Submit
                    </button>
                    <button
                        type="reset"
                        className="btn btn-warning mx-5"
                        onClick={formik.handleReset} > Reset</button>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => navigate("/")}> Cancel</button>
                </div>
            </form>
        </div>
    );
};
export default Login;

import { FormikValues, useFormik } from "formik";
import { FunctionComponent } from "react";
import * as yup from "yup";
import { NormalizeUser } from "../../utils/NormalizeUser";
import { UnnormalizedUser } from "../../interfaces/user/UnnormalizedUser";
import { registerUser } from "../../services/userService";
import { useNavigate } from "react-router-dom";
interface RegisterProps { }
const Register: FunctionComponent<RegisterProps> = () => {
    const navigate = useNavigate();
    const formik: FormikValues = useFormik<FormikValues>({
        initialValues: {
            first: "", middle: "", last: "", phone: "", isBusiness: false, email: "", password: "", image: "", alt: "", state: "", country: "", city: "", street: "", houseNumber: "", zip: "",
        },
        validationSchema: yup.object({
            first: yup.string().required().min(2).max(256),
            middle: yup.string(),
            last: yup.string().required(),
            phone: yup.string().min(9).max(11).required(),
            isBusiness: yup.boolean().required(),
            email: yup.string().email().required().min(5),
            password: yup.string().required().min(7).max(20).matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*\-"])[A-Za-z\d!@#$%^&*\-"]{7,}$/, 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (!@#$%^&*-"), and be at least 7 characters long'),
            image: yup.string().min(14),
            alt: yup.string().min(2).max(256),
            state: yup.string().min(2).max(256),
            country: yup.string().required().min(2).max(256),
            city: yup.string().required().min(2).max(256),
            street: yup.string().required().min(2).max(256),
            houseNumber: yup.number().required(),
            zip: yup.number().required(),

        }),
        onSubmit: (values, { resetForm }) => {
            const normalizedUser = NormalizeUser(values as UnnormalizedUser);
            console.log(normalizedUser);
            console.log(values);

            registerUser(normalizedUser)
                .then((res) => {
                    console.log(res);
                    navigate('/login');

                })
                .catch((err) => {
                    console.log(err);

                });
            resetForm();
        }
    })
    return (<>
        <div className="w-50 mx-auto py-3">
            <h1 className="h1 text-center py-3">Register</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="row gap-3">
                    <div className="col-md">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="first" placeholder="first" name="first" required onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.first}></input>
                            <label htmlFor="first">First name</label>
                            {formik.touched.first && formik.errors.first && (<p className="text-danger">{formik.errors.first}</p>)}
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="middle" placeholder="middle" name="middle" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.middle}></input>
                            <label htmlFor="middle">Middle name</label>
                            {formik.touched.middle && formik.errors.middle && (<p className="text-danger">{formik.errors.middle}</p>)}
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="last" placeholder="last" name="last" required onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.last}></input>
                            <label htmlFor="last">Last name</label>
                            {formik.touched.last && formik.errors.last && (<p className="text-danger">{formik.errors.last}</p>)}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-9">
                        <div className="form-floating mb-3">
                            <input type="tel" className="form-control" id="phone" placeholder="phone" name="phone" required onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone}></input>
                            <label htmlFor="phone">Phone</label>
                            {formik.touched.phone && formik.errors.phone && (<p className="text-danger">{formik.errors.phone}</p>)}
                        </div>
                    </div>
                    <div className="col-md-3 d-flex align-items-center">
                        <div className="form-check">
                            < input className="form-check-input" type="checkbox" id="isBusiness" name="isBusiness" checked={formik.values.isBusiness} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            <label className="form-check-label" htmlFor="isBusiness"> Is Bussiness?</label>
                            {formik.touched.isBusiness && formik.errors.isBusiness && (<p className="text-danger">{formik.errors.isBusiness}</p>)}
                        </div>
                    </div>
                </div>
                <div className="row gap-2">
                    <div className="col-md">
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="email" placeholder="email" name="email" required onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}></input>
                            <label htmlFor="email">Email</label>
                            {formik.touched.email && formik.errors.email && (<p className="text-danger">{formik.errors.email}</p>)}
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" id="password" placeholder="password" name="password" required onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password}></input>
                            <label htmlFor="password">Password</label>
                            {formik.touched.password && formik.errors.password && (<p className="text-danger">{formik.errors.password}</p>)}
                        </div>
                    </div>
                </div>
                <div className="row gap-2">
                    <div className="col-md">
                        <div className="form-floating mb-3">
                            <input type="url" className="form-control" id="image" placeholder="imgUrl" name="image" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.image}></input>
                            <label htmlFor="image">Image URL</label>
                            {formik.touched.image && formik.errors.image && (<p className="text-danger">{formik.errors.image}</p>)}
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="alt" placeholder="alt" name="alt" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.alt}></input>
                            <label htmlFor="alt">Image Alt</label>
                            {formik.touched.alt && formik.errors.alt && (<p className="text-danger">{formik.errors.alt}</p>)}
                        </div>
                    </div>
                </div>
                <div className="row gap-3">
                    <div className="col-md">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="state" placeholder="state" name="state" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.state}></input>
                            <label htmlFor="state">State</label>
                            {formik.touched.state && formik.errors.state && (<p className="text-danger">{formik.errors.state}</p>)}
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="country" placeholder="country" name="country" required onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.country}></input>
                            <label htmlFor="country">Country</label>
                            {formik.touched.country && formik.errors.country && (<p className="text-danger">{formik.errors.country}</p>)}
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="city" placeholder="city" name="city" required onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.city}></input>
                            <label htmlFor="city">City</label>
                            {formik.touched.city && formik.errors.city && (<p className="text-danger">{formik.errors.city}</p>)}
                        </div>
                    </div>
                </div>
                <div className="row gap-3">
                    <div className="col-md">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="street" placeholder="street" name="street" required onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.street}></input>
                            <label htmlFor="street">Street</label>
                            {formik.touched.street && formik.errors.street && (<p className="text-danger">{formik.errors.street}</p>)}
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="form-floating mb-3">
                            <input type="number" className="form-control" id="houseNumber" placeholder="houseNumber" name="houseNumber" required onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.houseNumber}></input>
                            <label htmlFor="houseNumber">House number</label>
                            {formik.touched.houseNumber && formik.errors.houseNumber && (<p className="text-danger">{formik.errors.houseNumber}</p>)}
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="form-floating mb-3">
                            <input type="number" className="form-control" id="zip" placeholder="zip" name="zip" required onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.zip}></input>
                            <label htmlFor="zip">Zip</label>
                            {formik.touched.zip && formik.errors.zip && (<p className="text-danger">{formik.errors.zip}</p>)}
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <button type="submit" disabled={!formik.dirty || !formik.isValid} className="btn btn-success my-3">Register</button>
                    <button type="reset" onClick={formik.handleReset} className="btn btn-warning mx-5"> Reset</button>
                </div>
            </form>
        </div>
    </>);
}

export default Register;
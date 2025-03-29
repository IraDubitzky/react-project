import { FunctionComponent } from "react";
import { FormikProps } from "formik";
import { UnnormalizedCard } from "../../interfaces/card/UnnormalizedCard";

interface CardFormProps {
    formik: FormikProps<UnnormalizedCard>;
    title: string;
    submitText: string;
}

const CardForm: FunctionComponent<CardFormProps> = ({ formik, title, submitText }) => {
    return (
        <div className="container py-4">
            <h1 className="text-center mb-4">{title}</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="title" name="title" placeholder="Title"
                                value={formik.values.title} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            <label htmlFor="title">Title</label>
                            {formik.touched.title && formik.errors.title && (<p className="text-danger">{formik.errors.title}</p>)}
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="subtitle" name="subtitle" placeholder="Subtitle"
                                value={formik.values.subtitle} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            <label htmlFor="subtitle">Subtitle</label>
                            {formik.touched.subtitle && formik.errors.subtitle && (<p className="text-danger">{formik.errors.subtitle}</p>)}
                        </div>
                    </div>
                </div>

                <div className="form-floating mb-3">
                    <textarea className="form-control" id="description" name="description" placeholder="Description" style={{ height: "100px" }}
                        value={formik.values.description} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    <label htmlFor="description">Description</label>
                    {formik.touched.description && formik.errors.description && (<p className="text-danger">{formik.errors.description}</p>)}
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <div className="form-floating">
                            <input type="tel" className="form-control" id="phone" name="phone" placeholder="Phone"
                                value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            <label htmlFor="phone">Phone</label>
                            {formik.touched.phone && formik.errors.phone && (<p className="text-danger">{formik.errors.phone}</p>)}
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="form-floating">
                            <input type="email" className="form-control" id="email" name="email" placeholder="Email"
                                value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            <label htmlFor="email">Email</label>
                            {formik.touched.email && formik.errors.email && (<p className="text-danger">{formik.errors.email}</p>)}
                        </div>
                    </div>
                </div>

                <div className="form-floating mb-3">
                    <input type="url" className="form-control" id="web" name="web" placeholder="Website"
                        value={formik.values.web} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    <label htmlFor="web">Website</label>
                    {formik.touched.web && formik.errors.web && (<p className="text-danger">{formik.errors.web}</p>)}
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <div className="form-floating">
                            <input type="url" className="form-control" id="url" name="url" placeholder="Image URL"
                                value={formik.values.url} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            <label htmlFor="url">Image URL</label>
                            {formik.touched.url && formik.errors.url && (<p className="text-danger">{formik.errors.url}</p>)}
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="alt" name="alt" placeholder="Image Alt"
                                value={formik.values.alt} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            <label htmlFor="alt">Image Alt</label>
                            {formik.touched.alt && formik.errors.alt && (<p className="text-danger">{formik.errors.alt}</p>)}
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="state" name="state" placeholder="State"
                                value={formik.values.state} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            <label htmlFor="state">State</label>
                            {formik.touched.state && formik.errors.state && (<p className="text-danger">{formik.errors.state}</p>)}
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="country" name="country" placeholder="Country"
                                value={formik.values.country} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            <label htmlFor="country">Country</label>
                            {formik.touched.country && formik.errors.country && (<p className="text-danger">{formik.errors.country}</p>)}
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="city" name="city" placeholder="City"
                                value={formik.values.city} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            <label htmlFor="city">City</label>
                            {formik.touched.city && formik.errors.city && (<p className="text-danger">{formik.errors.city}</p>)}
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="street" name="street" placeholder="Street"
                                value={formik.values.street} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            <label htmlFor="street">Street</label>
                            {formik.touched.street && formik.errors.street && (<p className="text-danger">{formik.errors.street}</p>)}
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="houseNumber" name="houseNumber" placeholder="House Number"
                                value={formik.values.houseNumber} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            <label htmlFor="houseNumber">House Number</label>
                            {formik.touched.houseNumber && formik.errors.houseNumber && (<p className="text-danger">{formik.errors.houseNumber}</p>)}
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="zip" name="zip" placeholder="Zip Code"
                                value={formik.values.zip} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            <label htmlFor="zip">Zip Code</label>
                            {formik.touched.zip && formik.errors.zip && (<p className="text-danger">{formik.errors.zip}</p>)}
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="btn btn-success"
                        disabled={!formik.dirty || !formik.isValid}
                    >
                        {submitText}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CardForm;

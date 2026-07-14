import { useState } from "react";
import { useFormik } from 'formik';

const validate = values => {
    const errors = {};

    if (!values.username) {
        errors.username = 'Required';
    }

    return errors;
};

export default function CommentsForm({ addNewComment }) {
    // const [formData, setFormData] = useState({
    //     username: "",
    //     remarks: "",
    //     rating: "",
    // });

    const formik = useFormik({
        initialValues: {
            username: '',
            remarks: '',
            rating: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const [isValid, setIsValid] = useState({
        username: true,
        remarks: true,
        rating: true,
    });

    // const handleInputChange = (event) => {
    //     const { name, value } = event.target;

    //     setFormData((prevData) => ({
    //         ...prevData,
    //         [name]: name === "rating" ? Number(value) : value,
    //     }));
    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     const usernameValid = formData.username.trim() !== "";
    //     const remarksValid = formData.remarks.trim() !== "";
    //     const ratingValid = formData.rating !== "";

    //     setIsValid({
    //         username: usernameValid,
    //         remarks: remarksValid,
    //         rating: ratingValid,
    //     });

    //     if (!usernameValid || !remarksValid || !ratingValid) {
    //         return;
    //     }

    //     addNewComment(formData);

    //     setFormData({
    //         username: "",
    //         remarks: "",
    //         rating: "",
    //     });

    //     setIsValid({
    //         username: true,
    //         remarks: true,
    //         rating: true,
    //     });
    // };

    return (
        <div>
            <h4>Give a Comment!</h4>

            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input
                    id="username"
                    type="text"
                    name="username"
                    placeholder="Enter username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                />

                {!isValid.username && (
                    <p style={{ color: "red" }}>
                        Username is required
                    </p>
                )}

                {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

                <br /><br />

                <label htmlFor="remarks">Remarks: </label>
                <textarea
                    id="remarks"
                    name="remarks"
                    placeholder="Write your remarks"
                    value={formik.values.remarks}
                    onChange={formik.handleChange}
                />

                {!isValid.remarks && (
                    <p style={{ color: "red" }}>
                        Remarks is required
                    </p>
                )}

                <br /><br />

                <label htmlFor="rating">Rating: </label>
                <input
                    id="rating"
                    type="number"
                    name="rating"
                    min="1"
                    max="5"
                    placeholder="1 - 5"
                    value={formik.values.rating}
                    onChange={formik.handleChange}
                />

                {!isValid.rating && (
                    <p style={{ color: "red" }}>
                        Rating is required
                    </p>
                )}

                <br /><br />

                <button type="submit">
                    Submit
                </button>
            </form>

            <hr />
        </div>
    );
}
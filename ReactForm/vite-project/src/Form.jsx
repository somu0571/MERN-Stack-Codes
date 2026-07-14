import { useState } from "react";

export default function Form() {
    let [formData, setFormData] = useState({
        fullName: "",
        username: "",
        password: ""
    }); // if put some string in useState() we will see changes in box as well

    // let handleNameChange = (event) => {
    //     setFullName(event.target.value);
    // }

    // let handleUsername = (event) => {
    //     setUsername(event.target.value);
    // }

    let handleInputChange = (event) => {
        let fieldName = event.target.name;
        let newValue = event.target.value;

        setFormData((currData) => {
            return { ...currData, [fieldName]: newValue };
        })
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log("form submitted");
        setFormData({
            fullName: "",
            username: "",
            password: ""
        });
    }

    return (

        <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">Full Name </label>
            <input type="text" placeholder="enter name" value={formData.fullName} onChange={handleInputChange} id="fullname" name="fullName" />
            <br />
            <label htmlFor="username">Username </label>
            <input type="text" placeholder="enter username" value={formData.username} onChange={handleInputChange} id="username" name="username" />
            <br />
            <label htmlFor="password">Password </label>
            <input type="text" placeholder="enter password" value={formData.password} onChange={handleInputChange} id="password" name="password" />
            <button>Submit</button>
        </form>
    )
}
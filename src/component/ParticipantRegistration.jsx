import React, { useState } from 'react'
import axios from 'axios'

const ParticipantRegistration = () => {

    const [input, changeInput] = useState({
        participantId: "",
        fullName: "",
        dob: "",
        gender: "",
        schoolName: "",
        grade: "",
        email: "",
        mobile: "",
        address: "",
        guardianName: ""
    })

    const inputHandler = (event) => {
        changeInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    const readValue = () => {
        console.log(input)

        axios.post("http://localhost:3001/add-participantregistration", input)
            .then((response) => {
                alert("Participant Registered Successfully")
            })
            .catch((error) => {
                console.error(error)
                alert("Registration Failed")
            })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="row g-3">

                        <h1 className="text-center">Participant Registration</h1>

                        <div className="col-md-4">
                            <label className="form-label">Participant ID</label>
                            <input
                                type="text"
                                className="form-control"
                                name="participantId"
                                value={input.participantId}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="col-md-4">
                            <label className="form-label">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="fullName"
                                value={input.fullName}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="col-md-4">
                            <label className="form-label">Date Of Birth</label>
                            <input
                                type="date"
                                className="form-control"
                                name="dob"
                                value={input.dob}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="col-md-4">
                            <label className="form-label d-block">Gender</label>

                            <input
                                type="radio"
                                name="gender"
                                value="Male"
                                onChange={inputHandler}
                            /> Male


                            <input
                                type="radio"
                                name="gender"
                                value="Female"
                                onChange={inputHandler}
                            /> Female
                        </div>

                        <div className="col-md-4">
                            <label className="form-label">School/College Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="schoolName"
                                value={input.schoolName}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="col-md-4">
    <label className="form-label">Class/Grade</label>
    <input
        type="text"
        className="form-control"
        name="grade"
        value={input.grade}
        onChange={inputHandler}
    />
</div>

<div className="col-md-4">
    <label className="form-label">Email Address</label>
    <input
        type="email"
        className="form-control"
        name="email"
        value={input.email}
        onChange={inputHandler}
    />
</div>

<div className="col-md-4">
    <label className="form-label">Mobile Number</label>
    <input
        type="tel"
        className="form-control"
        name="mobile"
        value={input.mobile}
        onChange={inputHandler}
    />
</div>

<div className="col-md-6">
    <label className="form-label">Residential Address</label>
    <textarea
        className="form-control"
        name="address"
        value={input.address}
        onChange={inputHandler}
        rows="3"
    ></textarea>
</div>

<div className="col-md-6">
    <label className="form-label">Parent/Guardian Name</label>
    <input
        type="text"
        className="form-control"
        name="guardianName"
        value={input.guardianName}
        onChange={inputHandler}
    />
</div>

                        <div className="col-md-12">
                            <button
                                className="btn btn-success"
                                onClick={readValue}
                            >
                                Register
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ParticipantRegistration
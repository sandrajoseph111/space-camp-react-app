import axios from 'axios'
import React, { useState } from 'react'

const AddCamp = () => {

    const [input, changeInput] = useState(
        {
            registrationId: "",
            participantId: "",
            campBatch: "",
            campStartdate: "",
            campEnddate: "",
            preferredSession: "",
            Accommodation: "",
            MealPreference: "",
            tshirtSize: "",
            paymentStatus: ""
            
        }
    )
    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
         }

    const readValue = () => {
        console.log(input)
        axios.post("http://localhost:3000/add-campregistration", input).then(

            (response) => {
                alert("student added successfully")
            }

        ).catch(
            (error) => {
                console.error("error adding student", error)
                alert("failed to add student")
            }
        )
    }
  return (
    <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-4">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Registration ID</label>
                                <input type="text" className="form-control" name="registrationId" value={input.registrationId} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label"> Participant Id</label>
                                <input type="text" className="form-control" name="participantId" value={input. participantId} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Camp Batch</label>
                                <input type="text" className="form-control" name="campBatch" value={input.campBatch} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Camp Start date</label>
                                <input type="date" className="form-control" name="campStartdate" value={input.campStartdate} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Camp End date</label>
                                <input type="date" className="form-control" name="campEnddate" value={input.campEnddate} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Preferred Session</label>
                                <input type="text" className="form-control" name="preferredSession" value={input.preferredSession} onChange={inputHandler} />

                            </div>
                            
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Accommodation Required</label>
                                <input type="text" className="form-control" name="Accommodation" value={input.Accommodation} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Meal Preference</label>
                                <input type="text" className="form-control" name="MealPreference" value={input.MealPreference} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label"> tshirtSize</label>
                                <input type="text" className="form-control" name="tshirtSize" value={input.tshirtSize} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Payment Status</label>
                                <input type="text" className="form-control" name="paymentStatus" value={input.paymentStatus} onChange={inputHandler} />

                            </div>
                            
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValue}>ADD</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



    </div>
  )
}

export default AddCamp
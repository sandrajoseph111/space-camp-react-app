import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewCamp = () => {

    const[data,changeData]=useState([])
    const fetchData=()=>{
        axios.post("http://localhost:3000/view-campregistration").then(
            (response)=>{
                changeData(response.data)
            }

        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    }
    useEffect(
        ()=>{
            fetchData()
        },[]
    )
  return (
    <div className="page-shell">
      <div className="app-card">
        <NavigationBar />
        <section className="hero-section">
          <h1>Registration Overview</h1>
          <p>Review camp registration details in a polished dashboard view.</p>
        </section>

        <div className="table-card">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Registration ID</th>
                  <th scope="col">Participant Id</th>
                  <th scope="col">Camp Batch</th>
                  <th scope="col">Camp Start date</th>
                  <th scope="col">Camp End date</th>
                  <th scope="col">Preferred Session</th>
                  <th scope="col">Accommodation Required</th>
                  <th scope="col">Meal Preference</th>
                  <th scope="col">tshirtSize</th>
                  <th scope="col">Payment Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((value, index) => {
                  return (
                    <tr key={index}>
                      <th>{value.registrationId}</th>
                      <td>{value.participantId}</td>
                      <td>{value.campBatch}</td>
                      <td>{value.campStartdate}</td>
                      <td>{value.campEnddate}</td>
                      <td>{value.preferredSession}</td>
                      <td>{value.Accommodation}</td>
                      <td>{value.MealPreference}</td>
                      <td>{value.tshirtSize}</td>
                      <td>{value.paymentStatus}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewCamp
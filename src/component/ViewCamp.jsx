import axios from 'axios'
import React, { useEffect, useState } from 'react'

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
    <div>


        <table class="table">
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
                        <th scope="col">ownerEmail</th>
                        <th scope="col">Payment Status</th>
                        
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(
                    (value,index)=>{
                        return(
                            <tr>
                               
                                    

                                    
                                    
                                    <th>{value.registrationId}</th>
                                    <td>{value.participantId}</td>
                                    <td>{value.campStartdate}</td>
                                    <td>{value.campEnddate}</td>                                    
                                    <td>{value.preferredSession}</td>                                
                                    <td>{value.vaccinationStatus}</td>                                
                                    <td>{value.Accommodation}</td>                                
                                    <td>{value.MealPreference}</td>                                
                                    <td>{value.tshirtSize}</td>                                
                                    <td>{value.paymentStatus}</td>  
                                    <td>{value.checkoutDate}</td>                              
                                    <td>{value.kennelNum}</td>                              

                                </tr>
                        )
                    }
                )}
                 </tbody>
            </table>
    </div>
  )
}

export default ViewCamp
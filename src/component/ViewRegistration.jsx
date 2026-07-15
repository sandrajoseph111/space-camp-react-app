import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ViewRegistration = () => {
  const [data, changeData] = useState([])

  const fetchData = () => {
    axios.post("http://localhost:3001/view-participantregistration")
      .then((response) => {
        changeData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>

      <div className="container mt-4">
        <h2 className="text-center mb-4">View All Participant Registrations</h2>

        <div className="table-responsive">
          <table className="table table-bordered table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Participant ID</th>
                <th>Full Name</th>
                <th>Date of Birth</th>
                <th>Gender</th>
                <th>School/College</th>
                <th>Class/Grade</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Address</th>
                <th>Parent/Guardian</th>
              </tr>
            </thead>

            <tbody>
              {data.map((value, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{value.participantId}</td>
                  <td>{value.fullName}</td>
                  <td>{value.dob}</td>
                  <td>{value.gender}</td>
                  <td>{value.schoolName}</td>
                  <td>{value.grade}</td>
                  <td>{value.email}</td>
                  <td>{value.mobile}</td>
                  <td>{value.address}</td>
                  <td>{value.guardianName}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  )
}

export default ViewRegistration 
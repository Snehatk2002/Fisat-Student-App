import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Viewall = () => {
    const [data, changedata] = useState([])
    const fetchData=()=>{
        axios.get("https://courseapplogix.onrender.com/getdata").then(
            (response)=>{
                console.log(response.data)
                changedata(response.data)
            }
        ).catch(
            (error)=>{
                console.log(error.message)
            }
        ).finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">id</th>
                                    <th scope="col">fistname</th>
                                    <th scope="col">lastname</th>
                                    <th scope="col">college</th>
                                    <th scope="col">dob</th>
                                    <th scope="col">course</th>
                                    <th scope="col">mobile</th>
                                    <th scope="col">email</th>
                                    <th scope="col">address</th>
                                </tr>
                            </thead>
                            <tbody>
                              {data.map(
                                (value,index)=>{
                                    return <tr>
                                    <th scope="row">{value._id}</th>
                                    <td>{value.firstname}</td>
                                    <td>{value.lastname}</td>
                                    <td>{value.college}</td>
                                    <td>{value.dob}</td>
                                    <td>{value.course}</td>
                                    <td>{value.mobile}</td>
                                    <td>{value.email}</td>
                                    <td>{value.address}</td>
                                    
                                </tr>
                                }
                              )}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewall
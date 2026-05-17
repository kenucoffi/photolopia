"use server"
import React from 'react'
import axios from "axios"

const users = async() => {
    const response = await axios.get("http://localhost:8000/user/listphotographer",{withCredentials:false})
    return response.data
}



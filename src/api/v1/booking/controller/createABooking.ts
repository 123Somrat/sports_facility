import asyncHandeler from "../../../../utils/asyncHandeler";


const createABooking = asyncHandeler(async(req,res)=>{

    console.log(req.user)
    console.log(req.body)



})

export default createABooking
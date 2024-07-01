import asyncHandeler from "../../../../utils/asyncHandeler";

const getAllBookings = asyncHandeler(async(req,res)=>{

    console.log(req.path)



});


export default getAllBookings;
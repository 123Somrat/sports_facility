import { Request, Response } from "express";
import facilityModel from "../../model/facility/facilitySchema";
import facilityInterface from "../../model/facility/facilityInterface";

const createFacility = (data:facilityInterface) => {
      
    const createdFacility = facilityModel.create(data)
   
   


};

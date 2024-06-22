import { Request, Response } from "express";
import facilityService from "../../../../lib/facilitys";
import asyncHandeler from "../../../../utils/asyncHandeler";


const createFacility = asyncHandeler(async (req, res) => {
  const facilityInfo = req.body;

  const createdFacility = await facilityService.createFacility(facilityInfo);

  res.status(201).json({
    status: 201,
    code: "Facility Created Succesfully",
    data: createdFacility,
  });
});

export default createFacility;

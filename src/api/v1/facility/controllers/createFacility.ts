import { Response } from "express";
import facilityService from "../../../../lib/facilitys";
import AuthenticatedRequest from "../../../../types/type";

const createFacility = async (req: AuthenticatedRequest, res: Response) => {
  const facilityInfo = req.body;

  const createdFacility = await facilityService.createFacility(facilityInfo);

  res.status(201).json({
    status: 201,
    code: "Facility Created Succesfully",
    data: createdFacility,
  });
};

export default createFacility;

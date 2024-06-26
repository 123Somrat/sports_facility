import asyncHandeler from "../../../../utils/asyncHandeler";

import facilitysService from "../../../../lib/facilitys";
const getAllFacilitys = asyncHandeler(async (_req, res) => {
  // Call getAllFacility sercvice

  const facilitys = await facilitysService.getAllFacilitys();

  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Facilities retrieved successfully",
    data: facilitys,
  });
});

export default getAllFacilitys;

import asyncHandeler from "../../../../utils/asyncHandeler";
import facilityService from "../../../../lib/facilitys";

const deleteAFacility = asyncHandeler(async (req, res) => {
    // getting facility Id from request params
  const deleteFacilityId = req.params.id;


  // Call delete service for delete a facility
  const deletedSuccessFully = await facilityService.deleteAFacility(
    deleteFacilityId
  );

  // Response
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Facility deleted successfully",
    data: deletedSuccessFully,
  });
});

export default deleteAFacility;

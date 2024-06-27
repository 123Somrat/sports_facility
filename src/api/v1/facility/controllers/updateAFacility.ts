import asyncHandeler from "../../../../utils/asyncHandeler";
import facilityService from "../../../../lib/facilitys";

const updateAFacility = asyncHandeler(async (req, res) => {
  // Have to update data
  const id = req.params.id;
  const haveToUpdate = req.body;

  // Call the updateFacility service
  const updatedFacility = await facilityService.updateFaculity(
    id,
    haveToUpdate
  );

  res.status(200).json({
    success: true,
    Code: 200,
    message: "Facility updated successfully",
    data: updatedFacility,
  });
});

export default updateAFacility;

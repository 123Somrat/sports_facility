import facilityModel from "../../model/facility/facilitySchema";
import facilityInterface from "../../model/facility/facilityInterface";
import HttpError from "../../utils/httpError";

/**
 *
 * @param data \
 * @returns Created Facility
 */
const createFacility = async (data: facilityInterface) => {
  const createdFacility = await facilityModel.create(data);
  return createdFacility;
};


/**
 * 
 * @returns Facilitys
 */
const getAllFacilitys = async () => {

  // Retriving facility from db
  const facilitys = await facilityModel.find({});

  return facilitys;
};

/**
 *
 * @param id
 * @param paylode
 * @returns Updated facility
 */
const updateFaculity = async (id: string, paylode: facilityInterface) => {
  const facility = await facilityModel.findById(id);

  if (!facility) {
    throw new HttpError(404, "Not found", "Not found");
  }

  facility.name = paylode.name ?? facility.name;
  facility.description = paylode.description ?? facility.description;
  facility.pricePerHour = paylode.pricePerHour ?? facility.pricePerHour;
  facility.location = paylode.location ?? facility.location;
  facility.isDeleted = paylode.isDeleted ?? facility.isDeleted;

  const updatedFacility = await facilityModel.findByIdAndUpdate(
    { _id: id },
    facility,
    { new: true }
  );
  return updatedFacility;
};

const deleteAFacility =async (id:string)=>{
    const isFacilityExeist = await facilityModel.findById(id)
     console.log(isFacilityExeist)


}






export = { createFacility, getAllFacilitys, updateFaculity };

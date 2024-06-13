import { Schema, model } from "mongoose";
import facilityInterface from "./facilityInterface";

/**
 * return  facilityModel
 */
const facilitySchema = new Schema<facilityInterface>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  pricePerHour: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

// Create Facility model
const facilityModel = model<facilityInterface>("facility", facilitySchema);

export default facilityModel;

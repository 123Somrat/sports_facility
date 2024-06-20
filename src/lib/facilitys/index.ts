import { Request, Response } from "express";
import facilityModel from "../../model/facility/facilitySchema";
import facilityInterface from "../../model/facility/facilityInterface";

const createFacility = async (data: facilityInterface) => {
  const createdFacility = await facilityModel.create(data);
  return createdFacility;
};

export = { createFacility };

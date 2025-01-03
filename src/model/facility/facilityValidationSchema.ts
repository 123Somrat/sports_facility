import z from "zod";

const facilityVaidationSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  description: z
    .string({ required_error: "Description is required" })
    .min(10, { message: "Description must be 10 cherecter long" })
    .max(150, { message: "Description can not be longer then 150 cherecter" }),
  pricePerHour: z
    .number({ required_error: "Price is required" })
    .nonnegative({ message: "Price can not be negative" }),
  location: z.string({ required_error: "Location is required" }).min(10),
  isDeleted:z.boolean().optional()
});

export default facilityVaidationSchema;

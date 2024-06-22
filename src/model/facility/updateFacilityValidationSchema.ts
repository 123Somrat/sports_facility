import z from "zod";

const updateFacilityValidationSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  pricePerHour: z.number().optional(),
  location: z.string().optional(),
  isDeleted: z.boolean().optional(),
});

export default updateFacilityValidationSchema;

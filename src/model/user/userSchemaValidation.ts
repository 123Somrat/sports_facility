import z from "zod";

const userValidationSchema = z.object({
  name: z
    .string({ required_error: "Name is requires" })
    .min(5, { message: "Name must be 5 cherecter long" })
    .max(20, { message: "Name can not be more then 20 Cherecter" }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Not a valid email" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(8, { message: "Password must be 8 chrecter long" }),
  phone: z
    .string({ required_error: "Phone number is requires" })
    .min(11, { message: "Phoen number should be 11 chrecter long" }),
  role: z.enum(["user", "admin"], { message: "Role is requires" }),
  address: z.string({ required_error: "Address is required" }),
});

export default userValidationSchema;
import z from 'zod'

const bookingValidationSchema = z.object({
    facilityId:z.string({required_error:'Facility id is required'}).min(9).max(24),
    date:z.string().refine((arg) =>
        arg.match(
         /^(\d{4})-(\d{2})-(\d{2})$/
      ),{message:'Invalid date formet'}),
    startTime:z.string({required_error:'Start time is required'}).superRefine((val, ctx) => {
        // Split the time string into hours and minutes
        const [hours, minutes] = val.split(':').map(Number);
      
        // Check if hours and minutes are numbers and within valid ranges
        if (isNaN(hours) || isNaN(minutes)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Time must be in HH:MM format.",
          });
          return;
        }
        if (hours < 0 || hours > 23) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Hours must be between 00 and 23.",
          });
        }
        if (minutes < 0 || minutes > 59) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Minutes must be between 00 and 59.",
          });
        }
      }),
    endTime :z.string({required_error:'End time is required'}).superRefine((val, ctx) => {
        // Split the time string into hours and minutes
        const [hours, minutes] = val.split(':').map(Number);
      
        // Check if hours and minutes are numbers and within valid ranges
        if (isNaN(hours) || isNaN(minutes)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Time must be in HH:MM format.",
          });
          return;
        }
        if (hours < 0 || hours > 23) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Hours must be between 00 and 23.",
          });
        }
        if (minutes < 0 || minutes > 59) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Minutes must be between 00 and 59.",
          });
        }
      })

})

export default bookingValidationSchema;
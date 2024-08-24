import { z } from 'zod';

// Define the zod schema
export const meetingFormSchema = z.object({
    eventName: z.string().min(1, "Event Name is required"),
    duration: z.number().min(1, "Duration is required"),
    locationType: z.string().min(1, "Location Type is required"),
    locationUrl: z.string().url("Location URL must be a valid URL"),
    themeColor: z.string().optional(),
});
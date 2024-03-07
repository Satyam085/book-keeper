import {z} from "zod"

export const entrySchema = z.object({
    ISBN : z.string().min(10, {
        message: "Enter a vaild ISBN no."
    }),
    title: z.string().min(1, { message: "Title is required" }),
    subtitle: z.string().optional(),
    authors: z.string().min(1, { message: "Authors is required" }), 
    publisher: z.string().min(1, { message: "Publisher is required" }),
    category: z.string().min(1, { message: "Category is required" }),
    publishedDate: z.string(),
    distribution_expense : z.string()
    }
)
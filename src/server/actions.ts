"use server"

import { entrySchema } from "@/lib/schema"

export type prevState = {
    message : string
}

export const newEntry = async(prevState: prevState , data : FormData) : Promise<prevState> => {
    const formData = Object.fromEntries(data)
    const parsed = entrySchema.safeParse(formData)
    
    console.log(parsed)

    if(!parsed.success){
        return {
            message : "Error",
        }
    }
    return {
        message : "Sucess",
    }
}
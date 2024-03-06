"use server"

import { entrySchema } from "@/lib/schema"
import { db } from "./db"

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

export const getData = async()   => {
    const data = await db.books.findMany({
        include : {
            authors : {
                select : {
                    author : true
                }
            },
            Category : true,
            Publisher : true,
        }
    })

    // console.log(getAuthor)
    return data
}
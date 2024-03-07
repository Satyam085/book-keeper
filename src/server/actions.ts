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
    const listauthors : string[] = parsed.data.authors.split(",")
    const newEntry = await db.books.create({
        data : {
            ISBN : parsed.data.ISBN,
            distribution_expense : parseFloat(parsed.data.distribution_expense) * 100,
            title : parsed.data.title,
            subtitle : parsed.data.subtitle ?? "",
            publishedDate : new Date(parsed.data.publishedDate),
            authors : {
                connectOrCreate: listauthors.map(item => ({
                    where : {author : item},
                    create : {author : item}
                }))
            },
            Publisher : {
                connectOrCreate: {
                    where : {
                        publisher : parsed.data.publisher,
                    },
                    create : {
                        publisher : parsed.data.publisher
                    }
                }
            },
             Category : {
                connectOrCreate: {
                    where : {
                        category : parsed.data.category,
                    },
                    create : {
                        category : parsed.data.category
                    }
                }
            },
             enterdBy : {
                connectOrCreate: {
                    where : {
                        email : "admin@test.com"
                    },
                    create : {
                        email : "admin@test.com" 
                    }
                }
            }
        }
    })
    if (newEntry) {
        return {
            message : "Data entered Sucess"
        }
    }
    return {
        message : "Something went wrong",
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
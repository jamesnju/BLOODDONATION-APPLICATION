"use server"
import { revalidateTag } from "next/cache"

export const Revalidate = (name:string)=>{
    return revalidateTag(name);

}
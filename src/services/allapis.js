import { BASE_URL } from "./base_url"
import { commonrequest } from "./commonrqst"


// post
export const toPost = async (body)=>{
   return commonrequest("POST",`${BASE_URL}/yoga/topost`,body)
}

export const getPost= async ()=>{
   return commonrequest("GET",`${BASE_URL}/post`)
}

export const deletePost= async (body)=>{
   return commonrequest("POST",`${BASE_URL}/yoga/deletepost`,body)
}


// classpost

export const classPost= async (body)=>{
   return commonrequest("POST",`${BASE_URL}/yoga/postclass`,body)
}
export const getClass= async (body)=>{
   return commonrequest("GET",`${BASE_URL}/getclasses`,body)
}
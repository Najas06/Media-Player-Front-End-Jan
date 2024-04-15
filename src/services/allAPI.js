import { serverURL } from "./baseUrl"
import commmonAPI from "./commonAPI"


// api for adding video 
export const uploadVideoApi = async(reqBody)=>{
    return await commmonAPI('POST',`${serverURL}/videos`,reqBody)
}

// api to get upload Videos 
export const getUploadVideoApi = async()=>{
    return await commmonAPI('GET',`${serverURL}/videos`,'')
}

// api to delete a video 
export const deleteVideoApi = async(id)=>{
    return await commmonAPI('DELETE',`${serverURL}/videos/${id}`,{})
}
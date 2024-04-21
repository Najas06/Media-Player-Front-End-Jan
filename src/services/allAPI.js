import { serverURL } from "./baseUrl"
import commmonAPI from "./commonAPI"


// api for adding video 
export const uploadVideoApi = async (reqBody) => {
    return await commmonAPI('POST', `${serverURL}/videos`, reqBody)
}

// api to get upload Videos 
export const getUploadVideoApi = async () => {
    return await commmonAPI('GET', `${serverURL}/videos`, '')
}

// api to delete a video 
export const deleteVideoApi = async (id) => {
    return await commmonAPI('DELETE', `${serverURL}/videos/${id}`, {})
}

// api to add history 
export const addToHistory = async (reqBody) => {
    return await commmonAPI('POST', `${serverURL}/history`, reqBody)
}

// api to get all videos from history
export const getAllVideoHistoryApi = async () => {
    return await commmonAPI('GET', `${serverURL}/history`, '')
}

// api to delete video from history
export const deleteVideoHistoryApi = async (id) => {
    return await commmonAPI('DELETE', `${serverURL}/history/${id}`, {})
}

// api to add category
export const addCategoryApi = async (reqBody) => {
    return await commmonAPI('POST', `${serverURL}/category`,reqBody)
}

// api to get all category
export const getCategoryApi = async()=>{
    return await commmonAPI('GET',`${serverURL}/category`,"")
}

//api to delete a Category 
export const deleteCategoryApi = async(id)=>{
    return await commmonAPI('DELETE',`${serverURL}/category/${id}`,{})
}
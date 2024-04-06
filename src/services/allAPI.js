import { serverURL } from "./baseUrl"
import {commonAPI} from './commonAPI'

// api for adding video 
export const uploadVideoApi = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/videos`,reqBody)
}
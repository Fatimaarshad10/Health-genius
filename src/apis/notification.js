import {  getRequest } from "../config/axiosConfig";


//get client
export async function getNotif() {
  const result = await getRequest(`notification`)
  return result;
}

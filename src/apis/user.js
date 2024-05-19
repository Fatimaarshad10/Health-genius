import {  getRequest } from "../config/axiosConfig";




// Search User
export async function searchUser(query) {
  const result = await getRequest(`user/${query}`);
  return result;
}

//search accounts
export async function searchOneUser(id) {
  const result = await getRequest(`user/${id}`);
  return result;
}
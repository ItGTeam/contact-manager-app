import axios from "axios";
const SERVER_URL = "http://localhost:9000";

//Get All Contact
//Get http://localhost:9000/contacts
export const getAllContacts = () => {
    const url = `${SERVER_URL}/contacts`;
    return axios.get(url);
}

//Get Contact With COntactID
//Get http://localhost:9000/contacts/:contactId
export const getContact = (contactId) => {
    const url = `${SERVER_URL}/contacts/${contactId}`;
    return axios.get(url);
}
export const getAllGroups = () => {
    const url = `${SERVER_URL}/groups`;
    return axios.get(url);
}
export const getGroup = (groupId) => {
    const url = `${SERVER_URL}/groups/${groupId}`;
    return axios.get(url);
}

export const createContact = (contact) => {
    const url = `${SERVER_URL}/contacts`;
    return axios.post(url, contact);
}

export const updateContact = (contact, contactId) => {
    const url = `${SERVER_URL}/contacts/${contactId}`;
    return axios.put(url, contact);
}

export const deleteContact = ( contactId) => {
    const url = `${SERVER_URL}/contacts/${contactId}`;
    return axios.delete(url);
}
export const createGroup = (group) => {
    const url = `${SERVER_URL}/groups`;
    return axios.post(url, group);
}

export const updateGroup = (group, groupId) => {
    const url = `${SERVER_URL}/groups/${groupId}`;
    return axios.put(url, group);
}

export const deleteGroup = ( groupId) => {
    const url = `${SERVER_URL}/groups/${groupId}`;
    return axios.delete(url);
}
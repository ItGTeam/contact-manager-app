import { createContext } from 'react';

export const ContactContext = createContext({
    loading: false,
    setLoading: () => { },
    contact: {},
    setContact: () => { },
    contacts: {},
    setContacts: () => { },
    setFilteredContacts: () => { },
    filteredContacts: [],
    groups: [],
    errors:[],
    onContactChange: () => { },
    deleteContact: () => { },
    updateContact:()=>{},
    createContact:()=>{},
    contactSearch:()=>{}
})

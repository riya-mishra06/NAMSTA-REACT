import {createContext} from 'react';

const UserContext = createContext({
   user: {
        name: "Dummy name",
        email:"dummyemail.com"
   } })

   export default UserContext;
import { createContext, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const AuthContext=createContext()


const AuthProvider = ({ children }) => {
const [token, setToken] = useLocalStorage("user")
const [decodedToken, setDecodedToken] = useState(token ? jwtDecode(token) : null)

  useEffect(() => {
    try {
      setDecodedToken( jwtDecode(token))
    } catch (error) {
      console.log(error);
    }
  }, [token])
  

  function removeToken() {
    
    localStorage.removeItem("user")
  }


const data={removeToken,setToken,decodedToken}
    return (
      <AuthContext.Provider value={data}>
        {children}
      </AuthContext.Provider>
    );
  };

  export default AuthProvider
// import { createContext, useEffect, useState } from "react";
// import Cookies from "js-cookie";
// import axios from "axios";
// import { AppRoutes } from "../constant/constant";

// export const AuthContext = createContext();

// export default function AuthContextProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [isLoading, setIsLoading] = useState(false); // Added loading state
//   const [error, setError] = useState(null); // Added error state

//   useEffect(() => {
//     const fetchUser = async () => {
//       setIsLoading(true); // Set loading state to true
//       setError(null); // Clear any previous errors

//       try {
//         const token = Cookies.get("token");
//         if (token) {
//           const response = await axios.get(AppRoutes.getMyInfo, {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           });
//           setUser(response.data.data);
//         }
//       } catch (err) {
//         setError(err); // Store error for handling
//         console.error("Error fetching user data:", err);
//       } finally {
//         setIsLoading(false); // Set loading state to false regardless of success or error
//       }
//     };

//     if (!user) {
//       fetchUser();
//     }
//   }, [user]);

//   // ... rest of your code (return statement)

//   return (
//     <AuthContext.Provider
//       value={{ user, setUser, isLoading, error }} // Include loading and error states
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }
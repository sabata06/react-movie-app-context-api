import React, { createContext } from 'react'


 export const MovieContext = createContext()

 
const MovieContextProvider = ({children}) => {
    const values ={}
  return (
    <MovieContext.Provider value={values} >{children} </MovieContext.Provider>
  )
}

export default MovieContextProvider
import { createContext, FC, useContext, useState } from "react"

type Repo = {
    id : string 
    name : string 
    nameWithOwner : string 
}

const initialRepo  ={
    id : 'initial',
    name : 'react-router' ,
    nameWithOwner : "remix-run/react-router"
}
const CurrentRepoContext = createContext<{currentRepo : Repo  , setCurrentRepo : (_ : Repo )=> void}>({
    currentRepo : initialRepo,
    setCurrentRepo : (_ : Repo )=> undefined
 })

 const CurrentRepoProvider : FC = ({children}) =>{
    const [currentRepo , setCurrentRepo ] = useState<Repo>(initialRepo)

    return (
        <CurrentRepoContext.Provider value={{currentRepo , setCurrentRepo}}>
            {children}
        </CurrentRepoContext.Provider>
    )
 }
const useCurrentRepo = ()=>{
   const {currentRepo , setCurrentRepo} = useContext(CurrentRepoContext)
   return { currentRepo , setCurrentRepo }
}

export {CurrentRepoProvider , useCurrentRepo}
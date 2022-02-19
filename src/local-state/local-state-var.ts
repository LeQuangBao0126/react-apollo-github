import { makeVar, ReactiveVar } from '@apollo/client' 


type Repo = {
    owner : string
    name : string 
}
const initialRepo = {
    owner : 'facebook',
    name : 'create-react-app'
}

const currentRepo : ReactiveVar<Repo> = makeVar(initialRepo)
export { currentRepo }
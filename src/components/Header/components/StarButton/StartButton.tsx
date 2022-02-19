import { Button, Skeleton, Tooltip  } from "antd";
import {  StarFilled ,StarTwoTone,EyeFilled} from "@ant-design/icons";
import { gql, useMutation, useQuery, useReactiveVar } from "@apollo/client";
import { useEffect } from "react";
import { currentRepo } from "local-state/local-state-var";
import { GetStarButtonDocument ,GetStarButtonQuery } from "./data/get-star-button.github.gql.generated";
import { StarRepoDocument } from "./data/star-repo.github.gql.generated";
import { UnStarRepoDocument } from "./data/unstar-repo.github.gql.generated";
var events = require('events');
export const em = new events.EventEmitter();

//import { useCurrentRepo } from "utils/CurrentRepoContext/CurrentRepoContext";

const StarButton = ()=>{
   // const {currentRepo  } = useCurrentRepo()
   // const [ owner , name ] = currentRepo.nameWithOwner?.split("/") ;
   //const { owner , name } = useReactiveVar(currentRepo)

//    const { data , loading ,refetch } = useQuery(gql`
//         query GetStarButton($owner: String!, $name: String!) {
//             repository(name: $name, owner: $owner) {
//                 id
//                 stargazerCount
//                 viewerHasStarred
//             }
//         }
//     `,{variables : { owner , name }}) 
    const { data , loading } = useQuery(GetStarButtonDocument,{fetchPolicy : 'cache-and-network'})
    const [starRepo, { loading: starLoading }] = useMutation(StarRepoDocument,{
        refetchQueries : [ GetStarButtonDocument ]
     })
    const [unStarRepo, { loading: unStarLoading }] = useMutation(UnStarRepoDocument,{
        refetchQueries : [ GetStarButtonDocument ]
     })
    //console.log("data",data)
    // useEffect(() => {
    //     refetch({owner, name})
    // }, [owner , name , refetch ])
    const handleStarRepo = async ()=>{
        await starRepo({variables:{id : data?.repository?.id! }})
        em.emit("starRepo" , "message này raise khi repo dc star")
    }
    const handleUnStarRepo = async ()=>{
        await unStarRepo({variables:{id : data?.repository?.id! }})
        em.emit("starRepo" , "message này raise khi repo dc unstar")
    }
    //console.log("events",events)
     
    if(loading){
        return <Skeleton.Button size="small"/>
    }

    return <>
        <Tooltip placement="bottom" title={"Click here to Star this Repo  😂 "}>
            <Button size="small" icon={ !data?.repository?.viewerHasStarred  ? <StarFilled /> : <StarTwoTone twoToneColor="#eb2f96" />}
                 onClick= {  () => data?.repository?.viewerHasStarred ?  handleUnStarRepo() :  handleStarRepo()}
            >
                {data?.repository?.viewerHasStarred ? "Starred": "Star"} {data?.repository?.stargazerCount}
            </Button>
        </Tooltip>
    </>
}

export default StarButton
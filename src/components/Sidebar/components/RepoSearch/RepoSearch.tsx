import { useLazyQuery ,gql } from "@apollo/client";
import { AutoComplete, Col, Input, Row, Spin } from "antd"
import { useState } from "react";
import { useCurrentRepo } from "utils/CurrentRepoContext/CurrentRepoContext";
import { SearchRepoDocument } from "./data/search-repo.github.gql.generated";
import {currentRepo} from 'local-state/local-state-var'


const RepoSearch = () => {
    
  //  const {currentRepo , setCurrentRepo } = useCurrentRepo()
    const [query , setQuery ] = useState("react-router")
    const [searchRepo , {data  }] = useLazyQuery( SearchRepoDocument) // dùng lazy khi go moi goi 
     
    const onSearch = (value : string )=>{
        setQuery(value)
        searchRepo({variables: { query } })
    }
    const onSelect = (value :string )=>{
        console.log(value)
        const repo = data?.search.edges?.find((edge) => {
            if (edge?.node && 'id' in edge.node) {
              return edge.node.nameWithOwner === value
            }
            return false
        })
        if(repo?.node && 'id' in repo?.node){
           // setCurrentRepo(repo.node)
            const [owner , name ] = value.split("/")
            currentRepo({owner   , name  })
        }
    }
    //console.log("search repo data" , data)

    return <>
    <Row>
      <Col flex="auto"> 
      <AutoComplete
                dropdownClassName="certain-category-search-dropdown"
                dropdownMatchSelectWidth={500}
                style={{ width: 250 }}
                onSearch={onSearch}
                onSelect={onSelect}
                value={query}
            >
            {data?.search.edges?.map((edge , index) => {
                 if(edge?.node && 'id' in edge.node ){
                    return <AutoComplete.Option key={index} value={edge?.node.nameWithOwner}>
                            {edge?.node.nameWithOwner}
                    </AutoComplete.Option>
                 }
             })   
            }
        </AutoComplete>
      </Col>
    </Row>
        
       
    </>
}

export default RepoSearch ;
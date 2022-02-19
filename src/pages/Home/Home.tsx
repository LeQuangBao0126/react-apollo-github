import { useQuery, useReactiveVar } from '@apollo/client'
import { Spin, Typography } from 'antd'
import { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
//import { useCurrentRepo } from 'utils/CurrentRepoContext/CurrentRepoContext'   cũ 
import Content from './../../components/Content/Content'
 import {GetHomePageDocument} from './data/get-home-page.github.gql.generated'
 import {currentRepo} from 'local-state/local-state-var'

const Home = () => {
  //const {currentRepo  } = useCurrentRepo()
  //console.log(currentRepo)
  // const [ owner , name ] = currentRepo.nameWithOwner?.split("/") ; cu
  const { owner , name } = useReactiveVar(currentRepo)

  const {data ,loading ,refetch  } = useQuery(GetHomePageDocument,{
     variables : {
        owner ,
        name
     }
  })
  
  //console.log("from header ", data);
  useEffect(() => {
      refetch({ owner ,name })
  }, [owner,name ,refetch ])
  
  if(loading){
    return <Spin/>
  }

  const object = data?.repository?.object 
  
  return <>
  <Content>
    <Typography.Text>
      
      <ReactMarkdown
        children={
          object && 'text' in object  ? object.text || '' : 'This repo dont have any Readme.md'
        }
      />
    </Typography.Text>
  </Content>
  </>


}
 
 

export default Home

import { useMutation, useQuery, useReactiveVar } from '@apollo/client'
import { Button, Skeleton, Tooltip } from 'antd'
import { SubscriptionState } from 'generated/github'
import { GetWatcherButtonDocument } from './data/get-watcher-button.github.gql.generated'
import { EyeOutlined, StarFilled ,EyeFilled} from "@ant-design/icons";
import { useCurrentRepo } from 'utils/CurrentRepoContext/CurrentRepoContext';
import { useEffect } from 'react';
import { currentRepo } from 'local-state/local-state-var';

const getAction = (state? : SubscriptionState | null ) => {
    switch (state) {
      case SubscriptionState.UNSUBSCRIBED:
        return {
          text: 'Watch',
          IconComponent: EyeOutlined,
        }
      case SubscriptionState.SUBSCRIBED:
        return {
          text: 'Unwatch',
          IconComponent: EyeFilled,
        }
      case SubscriptionState.IGNORED:
        return {
          text: 'Stop ignoring',
          IconComponent: EyeFilled,
        }
      default:
        return {
          text: 'Watch',
          IconComponent: EyeOutlined,
        }
    }
  }
const WatcherButton = () => {
  //const {currentRepo  } = useCurrentRepo()
  //const [ owner , name ] = currentRepo.nameWithOwner?.split("/") ;
  const { owner , name } = useReactiveVar(currentRepo)

  const { data ,loading , refetch } = useQuery(GetWatcherButtonDocument,{
    variables : {
       owner , name
    }
  })
  //const [untarRepo, { loading: starLoading }] = useMutation(Watch)
 // const [unStarRepo, { loading: unStarLoading }] = useMutation(UnStarRepoDocument)

  useEffect(() => {
    refetch({owner , name})
  }, [owner , name , refetch])

  if(loading){
    return <Skeleton.Button size="small"></Skeleton.Button>
  }

  const { text, IconComponent } = getAction(
    data?.repository?.viewerSubscription
  )



  return (
    <Tooltip placement="bottom" title={"Click here to Watch this Repo  😂 "}>
      <Button size='small' icon={<IconComponent />} >
        {text} {data?.repository?.watchers.totalCount}
      </Button>
    </Tooltip>
  )
}

export default WatcherButton

import { FC, useEffect } from "react";
import { Layout, PageHeader, Button, Space ,Spin } from "antd";
import { EyeOutlined ,EyeFilled} from "@ant-design/icons";
import User from "./../User/User";
import { useQuery, useReactiveVar } from "@apollo/client";
import {
  GetHeaderDocument,
  GetHeaderQuery,
} from "./data/get-header.github.gql.generated";
import { SubscriptionState } from "generated/github";
import StarButton from "./components/StarButton/StartButton";
//import { useCurrentRepo } from "utils/CurrentRepoContext/CurrentRepoContext";
import WatcherButton from "./components/WatchButton/WatcherButton";
import {currentRepo} from 'local-state/local-state-var'


const getWatchButtonAction = (state? : SubscriptionState | null) => {
  switch (state) {
    case SubscriptionState.SUBSCRIBED:
      return {
        text: 'Unwatch',
        IconComponent: EyeFilled,
      };
    case SubscriptionState.UNSUBSCRIBED:
      return {
        text: 'Watch',
        IconComponent: EyeOutlined,
      };
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
};

const Header: FC = () => {
  //const { data ,loading ,refetch} = useQuery<GetHeaderQuery>(GetHeaderDocument);
   
  //const {currentRepo  } = useCurrentRepo()
  //const [ owner , name ] = currentRepo.nameWithOwner?.split("/") ;
  const { name ,owner } = useReactiveVar(currentRepo) 
  return (
    <>
      <Layout.Header className="site-layout-background" style={{ padding: 0 }}>
        <PageHeader
          ghost={false}
          title={
            <Space>
              { owner }/{ name}  Do Reactive var change
              {/* <Button size="small" icon={<IconComponent />}>
                  {text} {loading ? <Spin/> : data?.repository?.watchers.totalCount} 
              </Button> */}
              <WatcherButton></WatcherButton>
              <StarButton></StarButton>
            </Space>
          }
          extra={<User />}
        />
      </Layout.Header>
    </>
  );
};

export default Header;

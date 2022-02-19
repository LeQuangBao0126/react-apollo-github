import { Avatar, Badge } from "antd";
import { UserOutlined } from '@ant-design/icons';
import Link from "antd/lib/typography/Link";
import Text from "antd/lib/typography/Text";
import { GetUserDocument, GetUserQuery } from '../../graphql/userDataQuery.github.gql.generated'
import { useQuery } from "@apollo/client";
import { NetworkStatus } from "@apollo/client";

const User = () => {
  const { data , loading , error , refetch , networkStatus } = useQuery<GetUserQuery>(GetUserDocument,{
      fetchPolicy : "network-only",
     // pollInterval : 2000

  })
  //console.log("user", data)
  //if(networkStatus === NetworkStatus.loading)
  return (
    <>
      <Link href="">
        <Text strong >Xin chào {data?.viewer.login}</Text>
        <Avatar src={data?.viewer.avatarUrl}/>
      </Link>
    </>
  );
};

export default User;

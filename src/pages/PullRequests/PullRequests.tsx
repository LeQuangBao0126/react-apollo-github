import { Typography } from 'antd'
import Content from '../../components/Content/Content'
 import Statistics from './Statistics'
 import PullRequestsList from './PullRequestsList'
import { useState } from 'react';
 import {em } from './../../components/Header/components/StarButton/StartButton'

const PullRequest = () => {

  const [ messageRepoStarred ,setMessageRepoStarred ] = useState('')
  em.on('starRepo', function (data : string) {
    setMessageRepoStarred(data)
    //refecth
  });
  return <Content>
        Thông báo : {messageRepoStarred || ''}
       <Typography.Title>Pull Requests</Typography.Title>
       <Statistics />
       <PullRequestsList />
  </Content>
}

export default PullRequest

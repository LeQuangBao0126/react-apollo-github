

import { ReactNode } from 'react'
import { RouteObject } from 'react-router-dom'
import { HomeOutlined, PullRequestOutlined } from '@ant-design/icons'
import Home from '../pages/Home/Home'
import PullRequests from 'pages/PullRequests/PullRequests'

type Route = RouteObject & {
    icon: ReactNode 
    title: string
} 
export const routes: Route[] = [
    {
      path: '/',
      element: <Home />,
      icon: <HomeOutlined />,
      title: 'Home',
    },
    {
      path: '/pulls',
      element: <PullRequests />,
      icon: <PullRequestOutlined />,
      title: 'Pull Requests',
    },
]
 
import './SideBar.scss'
import { Layout, Menu, Input } from 'antd'
import { Link } from 'react-router-dom'
import {routes} from '../../routes'
import RepoSearch from './components/RepoSearch/RepoSearch'

const SideBar = () => {

  
  return (
    <Layout.Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <Menu defaultSelectedKeys={['1']} style={{height:"inherit"}}>
        <RepoSearch></RepoSearch>
        {routes.map(({ title, icon, path }) => (
          <Menu.Item key={path} icon={icon} >
            <Link to={path || ''} >{title}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Layout.Sider>
  )
}

export default SideBar

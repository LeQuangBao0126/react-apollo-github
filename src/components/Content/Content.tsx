import { FC } from 'react'
import { Layout, Space } from 'antd'

const Content: FC = ({ children }) => (
  <Layout.Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
    <Space
      size='large'
      direction='vertical'
      className='site-layout-background'
      style={{ padding: 24, width: '100%' }}
    >
      {children}
    </Space>
  </Layout.Content>
)
export default Content
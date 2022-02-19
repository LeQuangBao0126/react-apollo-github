import { Avatar, Button, List, Select, Space, Tag, Typography } from "antd"
import { CheckOutlined,CloseOutlined } from '@ant-design/icons'

const listData = new Array(50).fill('').map((_, i) => ({
        href: 'https://ant.design',
        title: `Add native node esm module exports ${i}`,
        avatar: 'https://joeschmoe.io/api/v1/random',
}))
const options = [
    { value: 'gold' },
    { value: 'lime' },
    { value: 'green' },
    { value: 'cyan' },
]

function tagRender(props: any) {
    const { label, value, closable, onClose } = props
    const onPreventMouseDown = (event: any) => {
      event.preventDefault()
      event.stopPropagation()
    }
    return (
      <Tag
        color={value}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{ marginRight: 3 }}
      >
        {label}
      </Tag>
    )
  }
const PullRequestsList = ( )=>{
    console.log("listData",listData)
    return <>
    <Typography.Title level={4}>Filter by</Typography.Title>
    <Space>
      <Select
        mode='multiple'
        showArrow
        tagRender={tagRender}
        defaultValue={['gold', 'cyan']}
        style={{ width: '100%', marginBottom: '1rem' }}
        options={options}
      />
    </Space>

    <Select defaultValue="lucy" style={{ width: 250 }} onChange={()=>{}}>
      <Select.Option value="">Select Repository of you</Select.Option>
      <Select.Option value="lucy">Lucy</Select.Option>
      <Select.Option value="Yiminghe">yiminghe</Select.Option>
    </Select>

    <List
      itemLayout='horizontal'
      pagination={{
        onChange: (page) => {
          console.log(page)
        },
        pageSize: 5,
      }}
      bordered
      dataSource={listData}
      renderItem={(item) => (
        <List.Item
          key={item.title}
          actions={[
            <Button
              key='approve'
              icon={<CheckOutlined />}
              size='small'
              type='primary'
            >
              Mark as Done
            </Button>,
            <Button
              key='close'
              icon={<CloseOutlined />}
              size='small'
              type='ghost'
            >
              Mark as Open
            </Button>,
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<Typography.Link>{item.title}</Typography.Link>}
            description='Ant Design, a design language for background applications, is refined by Ant UED Team'
          />
        </List.Item>
      )}
    />
     
    </>
}

export default PullRequestsList
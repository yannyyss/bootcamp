import React from 'react'
import { Card, Icon, Avatar } from 'antd';
import { connect } from 'react-redux'
import { setEditingBootcampAction } from '../../redux/adminDuck'

const { Meta } = Card;



function AdminBootcamps({ bootcamps, history, setEditingBootcampAction }) {
    // login?

    function editBootcamp(_id) {
        setEditingBootcampAction(_id)
        history.push('/admin/bootcamps/' + _id)
    }

    function renderCard({ title, _id }, i) {
        return (
            <Card
                key={i}
                style={{ width: 300 }}
                cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }
                actions={[
                    <Icon spin type="setting" key="setting" />,
                    <Icon onClick={() => editBootcamp(_id)} type="edit" key="edit" />,
                    <Icon type="ellipsis" key="ellipsis" />,
                ]}
            >
                <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={title}
                    description={_id}
                />
            </Card>
        )
    }

    return (
        <div >
            <h1>Bootcamps</h1>
            {bootcamps.map(renderCard)}
        </div>
    )
}

function mapState({ bootcamps: { array } }) {
    return {
        bootcamps: array
    }
}

export default connect(mapState, { setEditingBootcampAction })(AdminBootcamps)
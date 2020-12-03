import React from 'react'
import { Card, Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
const { Meta } = Card;

const Product = () => {
    return (
        <div style={{paddingTop:25}}>
            <Card
                hoverable={true}
                cover={
                <img
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
                }
                actions={[
                <h3>
                    $ 100
                </h3>,
                
                <Button icon={<ShoppingCartOutlined />}>
                    Adicionar
                </Button>
                ]}
            >
                <Meta
                title="Producto"
                />
            </Card>
        </div>
    )
}

export default Product

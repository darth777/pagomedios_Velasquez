import React from 'react'
import { Badge } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import { ShoppingCartOutlined} from '@ant-design/icons';

const CartIcon = ({counter=0}) => {
    return (
        <Badge count={counter} size="small">
            <ShoppingCartOutlined style={{color:'white', fontSize:20}}/>
        </Badge>
        
    )
}

export default CartIcon

import { Table,Button } from 'antd';
import { DeleteTwoTone,CreditCardOutlined } from '@ant-design/icons';
import { UseContext } from '../storage/UseContext';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';





const Cart = () => {
    const history= useHistory();
    const {carrito,setCarrito} = useContext(UseContext);
    
    const deleteItem = (id)=>{
        alert(id)
    }

    const columns = [
        {
          title: '',
          key: 'action',
          render: (text, record) => (
            <DeleteTwoTone onClick={()=>deleteItem(record.id)}/>
          ),
          
        },
      {
        title: 'Nombre',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
      },
      {
        title: 'Precio',
        dataIndex: 'price',
        key: 'price',
      },
      {
        title: 'Cantidad',
        dataIndex: 'cantidad',
        key: 'cantidad',
      },
      {
        title: 'Total',
        dataIndex: 'total',
        key: 'total',
      },
    ];

    return (
        <div style={{paddingBottom:50}}>
            <h1>Carrito de Compras</h1>
            <Table columns={columns} dataSource={[carrito]} />
            <Button onClick={()=>{history.push(`/checkout`);}} size="large" icon={<CreditCardOutlined />}>
                Pagar
            </Button>
        </div>
    )
}

export default Cart

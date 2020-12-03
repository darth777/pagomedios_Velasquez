import React from 'react'
import { Button } from 'antd';
import { CreditCardOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const Checkout = () => {
    const history= useHistory();

    const pagar = async ()=> {
        
        try {
            let  data = new FormData();
            let form={
                companyType: "Persona Natural",
                document: "1716846504",
                documentType: "01",
                fullName:"Julio",
                address:"av prueba",
                mobile: "0995449935",
                email:"darthvadel@hotmail.com",
                reference:"na",
                description:"primera prueba",
                amount:10.00,
                amountWithTax:11.20,
                amountWithoutTax:10.00,
                tax:1.2,
                gateway:2
            }
            Object.keys(form).forEach((key) => {
                data.append(key, form[key])
              })

            const response = await axios.post("https://cloud.abitmedia.com/api/payments/create-payment-request", 
            data,
            {
                headers: {
                    Authorization: `Bearer2y-13-tx-zsjtggeehkmygjbtsf-51z5-armmnw-ihbuspjufwubv4vxok6ery7wozao3wmggnxjgyg`,
                    'Content-Type': 'multipart/form-data',
                    'content-type': 'application/json',
                },
            });
            console.log(response)
            history.push(`/checkout`);

        } catch (error) {
            console.log(error)
        }   
         
    }

    return (
        <div>
            <h2>
                PagoMedios
            </h2>
            <Button onClick={()=>pagar()} size="large" icon={<CreditCardOutlined />}>
                Finalizar Pago
            </Button>
        </div>
    )
}

export default Checkout

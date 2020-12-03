import React from 'react'
import Product from '../components/Product'
import { Col, Row } from 'antd'

const Products = () => {
    return (
        <div className="site-card-wrapper">
            <Row gutter={16}>
                <Col lg={6} md={6} sm={24} xs={24}>
                    <Product/>
                </Col>
                <Col lg={6} md={6} sm={24} xs={24}>
                    <Product/>
                </Col>
                <Col lg={6} md={6} sm={24} xs={24}>
                    <Product/>
                </Col>
                <Col lg={6} md={6} sm={24} xs={24}>
                    <Product/>
                </Col>
            </Row>
            
        </div>
    )
}

export default Products

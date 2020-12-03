
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Layout,Menu} from 'antd';

import Products from '../containers/Products';
import Cart from '../containers/Cart';
import Checkout from '../containers/Checkout';
import CartIcon from '../components/CartIcon';

const { Header, Content} = Layout;
export const AppRouter = () => {
    return (
        <Router>
             <Layout className="layout">
                <Header>
                    <Menu theme="dark" mode="horizontal">
                        <Menu.Item key="1"><Link to="/"/>Inicio</Menu.Item>
                        <Menu.Item key="2" style={{float: 'right'}}><Link to="cart"><CartIcon/></Link></Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Switch>
                        <Route exact path="/" component={Products}/>
                        <Route exact path="/cart" component={Cart}/>
                        <Route exact path="/checkout" component={Checkout}/>
                    </Switch>
                </Content>
            </Layout>
    </Router>
    )
}


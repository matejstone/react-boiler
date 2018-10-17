import React, { Component } from 'react';
import styled from 'styled-components';

import { Provider } from 'react-redux';
import store from './redux/store';

import { GlobalStyle } from './globalStyles.js';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import Layout from 'scenes/Layout';
import Home from 'scenes/Home';
import Products from 'scenes/Products';
import ProductView from 'scenes/ProductView';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <BrowserRouter>
                        <Layout>
                            <Route path="/products/:category" component={Products} />
                            <Route exact path="/products" component={Products} />
                            <Route path="/product/:productid" component={ProductView} />
                            <Route exact path="/" component={Home} />
                        </Layout>
                    </BrowserRouter>
                </div>
            </Provider>
        );
    }
}

export default App;

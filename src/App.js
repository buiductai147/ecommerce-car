import React, { useState, useEffect } from 'react';
// import Products from './components/Products/Products';
// import Navbar from './components/Nabar/Navbar'; ==
import { CssBaseline } from '@material-ui/core';
import {Products, Navbar, Cart, Checkout, Footer } from './components'
import { commerce } from './lib/commerce'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);  
    const [products,setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [order, setOrder] = useState({})
    const [errorMessage, setErrorMessage] = useState('');


    const fetchProducts = async () =>{
        const { data } = await commerce.products.list();

        setProducts(data);
    }


    // INSIDE const [cart, useCart] = useState({});
    const fetchCart= async () => {        
        setCart(await commerce.cart.retrieve())
    }


    const handleAddToCart = async (productId,quantity) => {
        const {cart} = await commerce.cart.add(productId,quantity);

        setCart(cart);
    }

    const handleUpdateCartQty = async (productId,quantity) => {
        const {cart} = await commerce.cart.update(productId,{ quantity });
       
        setCart(cart);
    }

    const handleRemoveFromCart = async (productId,quantity) => {
        const {cart} = await commerce.cart.remove(productId,quantity);
        setCart(cart);

    }
    const handleEmptyCart = async () => {
        const response = await commerce.cart.empty();
    
        setCart(response.cart);
      };

    const refreshCart = async () => { // refreshCart  affter pucher
        const newCart = await commerce.cart.refresh();

        setCart(cart);
    }
    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
          const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
    
          setOrder(incomingOrder);
    
          refreshCart();
        } catch (error) {
          setErrorMessage(error.data.error.message);
        }
      };
    
      useEffect(() => {
        fetchProducts();
        fetchCart();
      }, []);



const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
    

    return (
        <Router>
        <div style={{ display: 'flex' }}>
            <CssBaseline />
            <Navbar totalItems={cart.total_items}  handleDrawerToggle={handleDrawerToggle} />
            <Switch>
                <Route exact path="/" >  {/* home patch */}
                    <Products products={products}  onAddToCart={handleAddToCart}/> 
                </Route>
                <Route  path="/cart">
                     <Cart 
                     cart={cart}
                     handleUpdateCartQty={handleUpdateCartQty}
                     handleRemoveFromCart={handleRemoveFromCart}
                     handleEmptyCart={handleEmptyCart}
                      />
                </Route>
                <Route  path="/checkout" >
                    <Checkout  
                        cart={cart}
                        order={order}
                        onCaptureCheckout={handleCaptureCheckout}
                        error={errorMessage}
                    />
                </Route>                
            </Switch>
        </div>
         <Footer />
        </Router>

    )
}

export default App

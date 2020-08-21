import React, {useState, useContext, useEffect} from 'react'
import {ContainerFooter, CartHeader, HeaderTitle, AddressContainer, AdressTitle, AddressInfo, CartContainer, CartItem, ItemImg, ItemInfo, Top,
ProductTitle, QuantityContainer, Quantity, ProductDescription, Bottom, Price, RemoveButton, NoItemMessage, Freight, RestaurantName, 
RestaurantAddress, EstimatedTime, Subtotal, SubtotalTitle, PaymentTitle, PaymentMethod, StyledButton} from './Style'
import CartContext from '../../context/CartContext'
import Footer from '../Footer';
import Axios from 'axios';
import { FormControl, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

const CartPage = () => {
  const [restaurant, setRestaurant] = useState()
  const [profile, setProfile] = useState({})
  const [payment, setPayment] = useState('');
  const cartContext = useContext(CartContext);

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    Axios.get(`https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/restaurants/${cartContext.carrinho.restauranteId}`,{
      headers: {
        auth: token
      }
    })
    .then((response) => {
      setRestaurant(response.data.restaurant)
    })

    Axios.get("https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/profile", {
      headers: {
        auth: token
      }
    })
    .then((response) => {
      setProfile(response.data.user)
    })
  }, [cartContext.carrinho.restauranteId])

  let totalValue = 0;
  let arrayPlaceOrder = [];
  cartContext.carrinho.carrinho.forEach(product => {
    totalValue = totalValue + product.price * product.quantity;
    arrayPlaceOrder.push({quantity: Number(product.quantity), id: product.id})
  });

  const handleChange = (event) => {
    setPayment(event.target.value);
  };

  const handlePlaceOrder = () => {
    if(cartContext.carrinho.carrinho.length === 0 || payment === '') {
      alert("Adicione itens ao carrinho ou selecione um método de pagamento")
    } else {
    const token = window.localStorage.getItem('token');
    const body = {
      products: arrayPlaceOrder,
      paymentMethod: payment
    }
    console.log(body)
    Axios.post(`https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/restaurants/${cartContext.carrinho.restauranteId}/order`, body, {
      headers: {
        auth: token
      }
    })
    .then(() => {
      alert("Pedido realizado com sucesso!")
      cartContext.dispatch({ type: "RESET_CART" })
    })
    .catch((err) => {
      alert("Não foi possível realizar o pedido")
    })
    }
  }

  const handleRemoveItemFromCart = productId => {
    cartContext.dispatch({ type: "REMOVE_ITEM_FROM_CART", productId });
  };

  return (
    <div>
      <CartHeader>
        <HeaderTitle>Meu Carrinho</HeaderTitle>
      </CartHeader>
      <AddressContainer>
        <AdressTitle>Endereço de entrega</AdressTitle>
        <AddressInfo>{profile.address}</AddressInfo>
      </AddressContainer>
      <CartContainer>
        {cartContext.carrinho.carrinho.length === 0 ? <NoItemMessage>Carrinho vazio</NoItemMessage> : 
        <div>
          <RestaurantName>{restaurant && restaurant.name}</RestaurantName>
          <RestaurantAddress>{restaurant && restaurant.address}</RestaurantAddress>
          <EstimatedTime>{restaurant && restaurant.deliveryTime} {restaurant !== undefined ? <>min</> : <></>}</EstimatedTime>
          {cartContext.carrinho === {} ? <p></p> : cartContext.carrinho.carrinho.map((produto) => {
            const total = produto.quantity * produto.price
            return (
            <CartItem key={produto.id}>
              <ItemImg BackgroundImage={produto.photoUrl}/>
              <ItemInfo>
                <Top>
                  <ProductTitle>{produto.name}</ProductTitle>
                  <QuantityContainer><Quantity>{produto.quantity}</Quantity></QuantityContainer>
                </Top>
                <ProductDescription>{produto.description}</ProductDescription>
                <Bottom>
                  <Price>R${total.toFixed(2)}</Price>
                  <RemoveButton onClick={() => handleRemoveItemFromCart(produto.id)}>Remover</RemoveButton>
                </Bottom>
              </ItemInfo>            
            </CartItem>
          )})}
        </div>
        }        
      </CartContainer>
      <Freight>
            Frete: R$ {restaurant === undefined ? <>0,00</> : restaurant.shipping.toFixed(2)}
      </Freight>
      <Subtotal><SubtotalTitle>SUBTOTAL</SubtotalTitle><SubtotalTitle color="#e8222e" fontweight="bold">R${totalValue.toFixed(2)}</SubtotalTitle></Subtotal>
      <PaymentTitle border="1px solid black">Forma de Pagamento</PaymentTitle>
      <PaymentMethod>
        <FormControl component="fieldset">
          <RadioGroup value={payment} onChange={handleChange}>
            <FormControlLabel value="money" control={<Radio />} label="Dinheiro" />
            <FormControlLabel value="creditcard" control={<Radio />} label="Cartão de Crédito" />
          </RadioGroup>
        </FormControl>
      </PaymentMethod>
      <ContainerFooter>
      <StyledButton color={cartContext.carrinho.carrinho.length === 0 ? "rgba(232, 34, 46, 0.5)" : "#e8222e"} onClick={handlePlaceOrder}>Confirmar</StyledButton>
        <Footer />
      </ContainerFooter>
    </div>
    )
  }

export default CartPage

import React, {useContext} from 'react'
import {ContainerFooter, CartHeader, HeaderTitle, AddressContainer, AdressTitle, AddressInfo, CartContainer, CartItem, ItemImg, ItemInfo, Top,
ProductTitle, QuantityContainer, Quantity, ProductDescription, Bottom, Price, RemoveButton, NoItemMessage} from './Style'
import CartContext from '../../context/CartContext'
import Footer from '../Footer';

const CartPage = () => {

  const cartContext = useContext(CartContext);

  return (
    <div>
      <CartHeader>
        <HeaderTitle>Meu Carrinho</HeaderTitle>
      </CartHeader>
      <AddressContainer>
        <AdressTitle>Endereço de entrega</AdressTitle>
        <AddressInfo>Rua Alessandra Vieira, 42</AddressInfo>
      </AddressContainer>
      <CartContainer>
        {cartContext.carrinho.length === 0 ? <NoItemMessage>Carrinho vazio</NoItemMessage> : cartContext.carrinho.map((produto) => {
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
                <RemoveButton>Remover</RemoveButton>
              </Bottom>
            </ItemInfo>            
          </CartItem>
        )})}
        
      </CartContainer>
      <ContainerFooter>
        <Footer />
      </ContainerFooter>
    </div>
    )
  }

export default CartPage

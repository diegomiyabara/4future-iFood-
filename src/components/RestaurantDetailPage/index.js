import React, {useState, useEffect, useContext} from 'react';
import { useHistory, useParams  } from "react-router-dom";
import {Image, RestContainer, Header, HeaderTitle, RestaurantTitle, RestaurantDescription, SectionContainer, 
ProductContainer, ImageProduct, DescriptionContainer, Ingredients, Description, SectionTitle, Bottom,
Price, ButtonAdd, ProductTitle, Container, Top, ContainerContador, Contador} from './Style';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import AddQuantity from '../AddQuantity/index';
import axios from 'axios';
import CartContext from '../../context/CartContext';

function RestaurantDetailPage() {
  const history = useHistory();
  const [restaurant, setRestaurant] = useState({})
  const [showQuantity, setShowQuantity] = useState(false)
  const [product, setProduct] = useState({})

  const cartContext = useContext(CartContext);
  
  const pathParams = useParams();

  const token = window.localStorage.getItem('token');


    useEffect(() => {
      axios.get(`https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/restaurants/${pathParams.restaurantId}`, {
          headers: {
            auth: token
          }
        })
        .then((response) => {
          setRestaurant(response.data.restaurant)
        })
    }, [token, pathParams.restaurantId])

  const goToRestaurantPage = () => {
    history.push("/restaurant")
}

  const goToAddQuantity = (allProduct) => {
    setShowQuantity(!showQuantity)
    setProduct(allProduct)
  }

  const salgadoCategory = restaurant.products && restaurant.products.filter( product => {
    if(product.category === "Salgado") {
      return true
    }
    return false;
})

  const pastelCategory = restaurant.products && restaurant.products.filter( product => {
    if(product.category === "Pastel") {
      return true
    }
    return false
})
  const lancheCategory = restaurant.products && restaurant.products.filter( product => {
    if(product.category === "Lanche") {
      return true
    }
    return false
})

  const acompanhamentoCategory = restaurant.products && restaurant.products.filter( product => {
    if(product.category === "Acompanhamento") {
      return true
    }
    return false
})

  const pizzaCategory = restaurant.products && restaurant.products.filter( product => {
    if(product.category === "Pizza") {
      return true
    }
    return false
})

  const bebidaCategory = restaurant.products && restaurant.products.filter( product => {
    if(product.category === "Bebida") {
      return true
    }
    return false
})

const sorveteCategory = restaurant.products && restaurant.products.filter( product => {
  if(product.category === "Sorvete") {
    return true
  }
  return false
})

const refeicaoCategory = restaurant.products && restaurant.products.filter( product => {
  if(product.category === "Refeição") {
    return true
  }
  return false
})

const outrosCategory = restaurant.products && restaurant.products.filter( product => {
  if(product.category === "Outros") {
    return true
  }
  return false
})

const doceCategory = restaurant.products && restaurant.products.filter( product => {
  if(product.category === "Doce") {
    return true
  }
  return false
})

  return (
    <Container>
      {showQuantity && <AddQuantity showQuantity={showQuantity} setShowQuantity={setShowQuantity} selectedProduct={product} restaurant={restaurant}/>}
      
      <Header>
        <p onClick={goToRestaurantPage}><ArrowBackIosIcon /></p>
        <HeaderTitle>Restaurante</HeaderTitle> 
      </Header>
      <RestContainer>
        <div>
          <Image BackgroundImage={restaurant.logoUrl} />
          <RestaurantTitle>{restaurant.name}</RestaurantTitle>
          <Description>Burguer</Description>
          <RestaurantDescription>
              <Description>{restaurant.deliveryTime}min</Description>
              <Description>Frete R${restaurant.shipping && restaurant.shipping.toFixed(2)}</Description>
          </RestaurantDescription>
          <Description>{restaurant.address}</Description>    
        </div>
        <SectionContainer>
        {refeicaoCategory && refeicaoCategory.length !== 0 ? <SectionTitle>Refeição</SectionTitle> : <></>}
            {restaurant.products && restaurant.products.map((product) => {
                if(product.category === "Refeição") {
                  return (
                    <ProductContainer key={product.id}>
                        <div>
                          {product.photoUrl && <ImageProduct BackgroundImage={product.photoUrl} />}
                        </div>
                        <DescriptionContainer>
                        <Top>
                            <ProductTitle>{product.name}</ProductTitle>
                            {cartContext.carrinho.carrinho.map( productCart => {
                              if ( product.id === productCart.id ) {
                                return <ContainerContador key={productCart.id}><Contador>{productCart.quantity}</Contador></ContainerContador>
                              }
                              else return <div key={productCart.id}></div>
                            })}
                        </Top>
                            <Ingredients>{product.description}</Ingredients>
                                <Bottom>
                                  <Price>R${product.price.toFixed(2)}</Price>
                                  <ButtonAdd onClick={() => goToAddQuantity(product)}>adicionar</ButtonAdd>
                                </Bottom>
                        </DescriptionContainer>
                    </ProductContainer>
                  )}
                  else return <div key={product.id}></div>
            })}
          {salgadoCategory && salgadoCategory.length !== 0 ? <SectionTitle>Salgado</SectionTitle> : <></>}
            {restaurant.products && restaurant.products.map((product, index) => {
                if(product.category === "Salgado") {
                  return (
                    <ProductContainer key={product.id}>
                        <div>
                          {product.photoUrl && <ImageProduct BackgroundImage={product.photoUrl} />}
                        </div>
                        <DescriptionContainer>
                          <Top>
                            <ProductTitle>{product.name}</ProductTitle>
                            {cartContext.carrinho.carrinho.map( productCart => {
                              if ( product.id === productCart.id ) {
                                return <ContainerContador key={productCart.id}><Contador >{productCart.quantity}</Contador></ContainerContador>
                              }
                              else return <div key={productCart.id}></div>
                            })}
                          </Top>
                            <Ingredients>{product.description}</Ingredients>
                                <Bottom>
                                  <Price>R${product.price.toFixed(2)}</Price>
                                  <ButtonAdd onClick={() => goToAddQuantity(product)}>adicionar</ButtonAdd>
                                </Bottom>
                        </DescriptionContainer>
                    </ProductContainer>
                  )}
                  else return <div key={product.id}></div>
            })}

            {pastelCategory && pastelCategory.length !== 0 ? <SectionTitle>Pastel</SectionTitle> : <></>}
            {restaurant.products && restaurant.products.map((product) => {
                if(product.category === "Pastel") {
                  return (
                    <ProductContainer key={product.id}>
                        <div>
                          {product.photoUrl && <ImageProduct BackgroundImage={product.photoUrl} />}
                        </div>
                        <DescriptionContainer>
                        <Top>
                            <ProductTitle>{product.name}</ProductTitle>
                            {cartContext.carrinho.carrinho.map( productCart => {
                              if ( product.id === productCart.id ) {
                                return <ContainerContador key={productCart.id}><Contador>{productCart.quantity}</Contador></ContainerContador>
                              }
                              else return <div key={productCart.id}></div>
                            })}
                        </Top>
                            <Ingredients>{product.description}</Ingredients>
                                <Bottom>
                                  <Price>R${product.price.toFixed(2)}</Price>
                                  <ButtonAdd onClick={() => goToAddQuantity(product)}>adicionar</ButtonAdd>
                                </Bottom>
                        </DescriptionContainer>
                    </ProductContainer>
                  )}
                  else return <div key={product.id}></div>
            })}

            {lancheCategory && lancheCategory.length !== 0 ? <SectionTitle>Lanche</SectionTitle> : <></>}
            {restaurant.products && restaurant.products.map((product) => {
                if(product.category === "Lanche") {
                  return (
                    <ProductContainer key={product.id}>
                        <div>
                          {product.photoUrl && <ImageProduct BackgroundImage={product.photoUrl} />}
                        </div>
                        <DescriptionContainer>
                        <Top>
                            <ProductTitle>{product.name}</ProductTitle>
                            {cartContext.carrinho.carrinho.map( productCart => {
                              if ( product.id === productCart.id ) {
                                return <ContainerContador  key={productCart.id}><Contador>{productCart.quantity}</Contador></ContainerContador>
                              }
                              else return <div key={productCart.id}></div>
                            })}
                        </Top>
                            <Ingredients>{product.description}</Ingredients>
                                <Bottom>
                                  <Price>R${product.price.toFixed(2)}</Price>
                                  <ButtonAdd onClick={() => goToAddQuantity(product)}>adicionar</ButtonAdd>
                                </Bottom>
                        </DescriptionContainer>
                    </ProductContainer>
                  )}
                  else return <div key={product.id}></div>
            })}

            {acompanhamentoCategory && acompanhamentoCategory.length !== 0 ? <SectionTitle>Acompanhamento</SectionTitle> : <></>}
            {restaurant.products && restaurant.products.map((product) => {
                if(product.category === "Acompanhamento") {
                  return (
                    <ProductContainer key={product.id}>
                        <div>
                          {product.photoUrl && <ImageProduct BackgroundImage={product.photoUrl} />}
                        </div>
                        <DescriptionContainer>
                        <Top>
                            <ProductTitle>{product.name}</ProductTitle>
                            {cartContext.carrinho.carrinho.map( productCart => {
                              if ( product.id === productCart.id ) {
                                return <ContainerContador key={productCart.id}><Contador>{productCart.quantity}</Contador></ContainerContador>
                              }
                              else return <div key={productCart.id}></div>
                            })}
                        </Top>
                            <Ingredients>{product.description}</Ingredients>
                                <Bottom>
                                  <Price>R${product.price.toFixed(2)}</Price>
                                  <ButtonAdd onClick={() => goToAddQuantity(product)}>adicionar</ButtonAdd>
                                </Bottom>
                        </DescriptionContainer>
                    </ProductContainer>
                  )}
                  else return <div key={product.id}></div>
            })}

            {pizzaCategory && pizzaCategory.length !== 0 ? <SectionTitle>Pizza</SectionTitle> : <></>}
            {restaurant.products && restaurant.products.map((product) => {
                if(product.category === "Pizza") {
                  return (
                    <ProductContainer key={product.id}>
                        <div>
                          {product.photoUrl && <ImageProduct BackgroundImage={product.photoUrl} />}
                        </div>
                        <DescriptionContainer>
                        <Top>
                            <ProductTitle>{product.name}</ProductTitle>
                            {cartContext.carrinho.carrinho.map( productCart => {
                              if ( product.id === productCart.id ) {
                                return <ContainerContador key={productCart.id}><Contador>{productCart.quantity}</Contador></ContainerContador>
                              }
                              else return <div key={productCart.id}></div>
                            })}
                        </Top>
                            <Ingredients>{product.description}</Ingredients>
                                <Bottom>
                                  <Price>R${product.price.toFixed(2)}</Price>
                                  <ButtonAdd onClick={() => goToAddQuantity(product)}>adicionar</ButtonAdd>
                                </Bottom>
                        </DescriptionContainer>
                    </ProductContainer>
                  )}
                  else return <div key={product.id}></div>
            })}

            {bebidaCategory && bebidaCategory.length !== 0 ? <SectionTitle>Bebida</SectionTitle> : <></>}
            {restaurant.products && restaurant.products.map((product) => {
                if(product.category === "Bebida") {
                  return (
                    <ProductContainer key={product.id}>
                        <div>
                          {product.photoUrl && <ImageProduct BackgroundImage={product.photoUrl} />}
                        </div>
                        <DescriptionContainer>
                        <Top>
                            <ProductTitle>{product.name}</ProductTitle>
                            {cartContext.carrinho.carrinho.map( productCart => {
                              if ( product.id === productCart.id ) {
                                return <ContainerContador key={productCart.id}><Contador>{productCart.quantity}</Contador></ContainerContador>
                              }
                              else return <div key={productCart.id}></div>
                            })}
                        </Top>
                            <Ingredients>{product.description}</Ingredients>
                                <Bottom>
                                  <Price>R${product.price.toFixed(2)}</Price>
                                  <ButtonAdd onClick={() => goToAddQuantity(product)}>adicionar</ButtonAdd>
                                </Bottom>
                        </DescriptionContainer>
                    </ProductContainer>
                  )}
                  else return <div key={product.id}></div>
            })}

            {sorveteCategory && sorveteCategory.length !== 0 ? <SectionTitle>Sorvete</SectionTitle> : <></>}
            {restaurant.products && restaurant.products.map((product) => {
                if(product.category === "Sorvete") {
                  return (
                    <ProductContainer key={product.id}>
                        <div>
                          {product.photoUrl && <ImageProduct BackgroundImage={product.photoUrl} />}
                        </div>
                        <DescriptionContainer>
                        <Top>
                            <ProductTitle>{product.name}</ProductTitle>
                            {cartContext.carrinho.carrinho.map( productCart => {
                              if ( product.id === productCart.id ) {
                                return <ContainerContador key={productCart.id}><Contador>{productCart.quantity}</Contador></ContainerContador>
                              }
                              else return <div key={productCart.id}></div>
                            })}
                        </Top>
                            <Ingredients>{product.description}</Ingredients>
                                <Bottom>
                                  <Price>R${product.price.toFixed(2)}</Price>
                                  <ButtonAdd onClick={() => goToAddQuantity(product)}>adicionar</ButtonAdd>
                                </Bottom>
                        </DescriptionContainer>
                    </ProductContainer>
                  )}
                  else return <div key={product.id}></div>
            })}

            {doceCategory && doceCategory.length !== 0 ? <SectionTitle>Doce</SectionTitle> : <></>}
            {restaurant.products && restaurant.products.map((product) => {
                if(product.category === "Doce") {
                  return (
                    <ProductContainer key={product.id}>
                        <div>
                          {product.photoUrl && <ImageProduct BackgroundImage={product.photoUrl} />}
                        </div>
                        <DescriptionContainer>
                        <Top>
                            <ProductTitle>{product.name}</ProductTitle>
                            {cartContext.carrinho.carrinho.map( productCart => {
                              if ( product.id === productCart.id ) {
                                return <ContainerContador key={productCart.id}><Contador>{productCart.quantity}</Contador></ContainerContador>
                              }
                              else return <div key={productCart.id}></div>
                            })}
                        </Top>
                            <Ingredients>{product.description}</Ingredients>
                                <Bottom>
                                  <Price>R${product.price.toFixed(2)}</Price>
                                  <ButtonAdd onClick={() => goToAddQuantity(product)}>adicionar</ButtonAdd>
                                </Bottom>
                        </DescriptionContainer>
                    </ProductContainer>
                  )}
                  else return <div key={product.id}></div>
            })}

            {outrosCategory && outrosCategory.length !== 0 ? <SectionTitle>Outros</SectionTitle> : <></>}
            {restaurant.products && restaurant.products.map((product) => {
                if(product.category === "Outros") {
                  return (
                    <ProductContainer key={product.id}>
                        <div>
                          {product.photoUrl && <ImageProduct BackgroundImage={product.photoUrl} />}
                        </div>
                        <DescriptionContainer>
                        <Top>
                            <ProductTitle>{product.name}</ProductTitle>
                            {cartContext.carrinho.carrinho.map( productCart => {
                              if ( product.id === productCart.id ) {
                                return <ContainerContador key={productCart.id}><Contador>{productCart.quantity}</Contador></ContainerContador>
                              }
                              else return <div key={productCart.id}></div>
                            })}
                        </Top>
                            <Ingredients>{product.description}</Ingredients>
                                <Bottom>
                                  <Price>R${product.price.toFixed(2)}</Price>
                                  <ButtonAdd onClick={() => goToAddQuantity(product)}>adicionar</ButtonAdd>
                                </Bottom>
                        </DescriptionContainer>
                    </ProductContainer>
                  )}
                  else return <div key={product.id}></div>
            })}
        </SectionContainer>
      </RestContainer>
    </Container>
  );
}

export default RestaurantDetailPage;
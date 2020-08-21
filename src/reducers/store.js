export const initialState = {
  carrinho: [],
  restauranteId: ""
}

export const storeReducer = (state, action) => {
  switch (action.type) {
    case "ADICIONA_NO_CARRINHO":
      const produtosCarrinho = state.carrinho.findIndex(produto => {
        return produto.id === action.produto.id
      })
      
      let novoCarrinho
      let newRestauranteId
      if (produtosCarrinho === -1) {
        novoCarrinho = [...state.carrinho, { ...action.produto, quantity: action.quantidadeSelecionada}]
        newRestauranteId = action.restauranteId
      } else {
        novoCarrinho = state.carrinho.map(produto => {
          if(produto.id === action.produto.id) {
            return {
              ...produto,
              quantity: action.quantidadeSelecionada
            }
          }
          return produto
        })
      }
      return { ...state, carrinho: novoCarrinho, restauranteId: newRestauranteId }

      case "REMOVE_ITEM_FROM_CART": {
        const novoCarrinho = state.carrinho.filter(produto => {
          return produto.id !== action.productId
        })
        return { ...state, carrinho: novoCarrinho }
      }

      case "RESET_CART": {
        return {...state, carrinho: [], restauranteId:""}
      }

      default: 
      return state

  }
}
import styled from 'styled-components';

export const ContainerFooter = styled.div `
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #fff;
`;

export const CartHeader = styled.div`
    height: 4rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

export const HeaderTitle = styled.p`
    font-family: Roboto;
    font-size: 1rem;
    letter-spacing: -0.39px;
    text-align: center;
    margin: 0.75rem;
    padding: 0;
`

export const AddressContainer = styled.div`
    height: 4.75rem;
    background-color: #eeeeee;
    width: 100%;
    border-top: 1px solid lightgrey;
`

export const AdressTitle = styled.p`
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #b8b8b8;
    padding: 0.5rem 1rem;
    padding-top: 1rem;
    margin: 0;
`

export const AddressInfo = styled.p`
    padding: 0 1rem;
    margin: 0;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
`

export const CartContainer = styled.div`
    width: 100%;
    margin-top: 0.5rem;
`

export const CartItem = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid #b8b8b8;
    height: 7rem;
    border-radius: 8px;
    margin-top: 0.5rem;
    width: 20.5rem;
    margin: 0 auto;
`

export const ItemImg = styled.img`
    background-image: url(${props => props.BackgroundImage});
    background-size: cover;
    background-position: center;
    height: 7rem;
    width: 6rem;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    margin-right: 1rem;
`

export const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
`

export const Top = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 14.3rem;
`

export const ProductTitle = styled.p `
    color: #e8222e;
    margin: 0.75rem 0 0 0;
    width: 18.5rem;
    height: 1.125rem;
    font-family: Roboto;
    font-size: 1rem;
    letter-spacing: -0.39px;
`

export const QuantityContainer = styled.div `
    width: 2.063rem;
    height: 1.5rem;
    border-radius: 0 8px 0 8px ;
    background-color: white;
    border: solid 1px #e8222e;
    margin-left: 0.3rem;
    color: #e8222e;
    text-align: center;
`

export const Quantity = styled.p `
    margin: 0;
    padding: 0;
`

export const ProductDescription = styled.p `
    font-size: 0.75rem;
    color: #b8b8b8;
`

export const Bottom = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 14.3rem;
`

export const Price = styled.p `
    margin-top: 0.75rem;
    width: 7.375rem;
    height: 1.188rem;
    font-family: Roboto;
    font-size: 1rem;
    letter-spacing: -0.39px;
    color: #000000;
`

export const RemoveButton = styled.button `
    margin-top: 0.75rem;
    width: 5.625rem;
    height: 1.938rem;
    border-radius: 8px 0 8px 0;
    background-color: white;
    border: solid 1px #e02020;
    color: #e02020;
`

export const NoItemMessage = styled.p`
    text-align: center;
`
import { useState } from 'react';
import { onChangeArgs, ProductInCart } from '../interfaces/product.interfaces';


export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key:string]: ProductInCart }>({});
    const onProductCountChange = ({count,product}:onChangeArgs) => {
        console.log(count)
        setShoppingCart(oldShoppingCart => {
                

                const productInCart:ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0};
                console.log(productInCart)
                if ( Math.max(productInCart.count + count, 0 ) > 0 ) {
                    productInCart.count += count;
                    return {
                        ...oldShoppingCart,
                        [product.id]: productInCart
                    }
                }
                const { [product.id]: toDelete, ...rest } = oldShoppingCart;
                return rest;
                // if (count === 0 ){
                //     delete oldShoppingCart[product.id];
                //     return {
                //         ...oldShoppingCart
                //     }
                // }
                // return {
                //     ...oldShoppingCart,
                //     [product.id]: {...product, count}
                // }
            }
        )
    }
  return {
    onProductCountChange,
    shoppingCart

  }
}

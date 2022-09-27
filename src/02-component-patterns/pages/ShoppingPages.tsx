import ProductCard from '../components';
import { ProductImage, ProductTitle, ProductButtons } from '../components';
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/products';
import '../styles/custom-styles.css'


export const ShoppingPages = () => {

   const { onProductCountChange, shoppingCart} = useShoppingCart()
  return (
      <div>
        <h1> ShoppingPages</h1>
        <hr />
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>


            {
                products.map(product => (

                    <ProductCard 
                        product={product} 
                        className="bg-dark"
                        key={product.id}
                        onChange={onProductCountChange}
                        value={ shoppingCart[product.id]?.count }
                        >
                        <ProductImage className="custom-image"/>
                        <ProductTitle className="text-white text-bold"/>
                        <ProductButtons className="custom-button" />
                    </ProductCard>
                      ))
                  }
        </div>


        <div className="shopping-cart">
            {
                Object.values(shoppingCart).map(productInCart => (
                    <ProductCard 
                        product={productInCart} 
                        className="bg-dark"
                        style={{ width: '100px'}}
                        onChange={onProductCountChange}
                        key={productInCart.id}
                        value={productInCart.count}
                        >
                        <ProductImage className="custom-image"/>
                        <ProductButtons className="custom-button" 
                                        style={{display: 'flex', justifyContent: 'center'}}
                        />
                    </ProductCard>
                ))
            }
        </div>

        <code>
            {
                JSON.stringify(shoppingCart)
            }
        </code>
      </div>
  )
}

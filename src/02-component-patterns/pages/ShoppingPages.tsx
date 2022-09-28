import ProductCard from '../components';
import { ProductImage, ProductTitle, ProductButtons } from '../components';
import { products } from '../data/products';
import '../styles/custom-styles.css'


const product = products[0]

export const ShoppingPages = () => {

  return (
      <div>
        <h1> ShoppingPages</h1>
        <hr />
            <ProductCard 
                product={product} 
                className="bg-dark"
                key={product.id}
                initialValues={{
                    count: 3,
                    maxCount: 10
                }}
                >
                    {
                        ({reset, count, increaseBy, isMaxCountReached}) => (
                            <>
                                <ProductImage className="custom-image"/>
                                <ProductTitle className="text-white text-bold"/>
                                <ProductButtons className="custom-button" />
                                <button onClick={reset}>
                                    reset
                                </button>
                                <button onClick={() => increaseBy(-2)}>-2</button>
                                <button disabled={isMaxCountReached} onClick={() => increaseBy(2)}>+2</button>
                                <span>{count}</span>
                            </>
                        )
                    }
            </ProductCard>
      </div>
  )
}

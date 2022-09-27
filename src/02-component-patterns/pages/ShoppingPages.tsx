import ProductCard from '../components';
import { ProductImage } from '../components/ProductImage';
import { ProductTitle } from '../components/ProductTitle';
import { ProductButtons } from '../components/ProductButtons';
import '../styles/custom-styles.css'

const product = {
    id: '1',
    title: 'Coffe Mug - Card',
    img: './coffee-mug.png'
}

export const ShoppingPages = () => {
  return (
      <div>
        <h1> ShoppingPages</h1>
        <hr />
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>
        <ProductCard product={product} >
            <ProductCard.Image className="custom-image" />
            <ProductCard.Title className="text-bold" />
            <ProductCard.Buttons />
        </ProductCard>

        <ProductCard 
                  product={product} 
                  className="bg-dark"
                  >
            <ProductImage className="custom-image" />
            <ProductTitle title="HOlA" className="text-white text-bold"/>
            <ProductButtons className="custom-button" />
        </ProductCard>

        <ProductCard 
                  product={product} 
                  style={{
                      backgroundColor: '#70d1f8'
                  }}
                  >
            <ProductImage style={{
                boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
            }} />
            <ProductTitle style={{
                fontWeight: 'bold'
            }} />
            <ProductButtons style={{
                display: 'flex',
                justifyContent: 'end'
            }}/>
        </ProductCard>
        </div>
      </div>
  )
}

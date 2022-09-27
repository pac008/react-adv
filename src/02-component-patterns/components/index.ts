import { ProductCard as ProductCardComponent } from './ProductCard';
import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';
import { ProductCardHOCProps } from '../interfaces/product.interfaces';
export * from './ProductButtons';
export * from './ProductImage';
export * from './ProductTitle';
// export * from './ProductCard';



const ProductCard: ProductCardHOCProps = Object.assign( ProductCardComponent, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
})


export default ProductCard;
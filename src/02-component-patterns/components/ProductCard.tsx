import { createContext } from 'react';
import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/product.interfaces';
import { useProduct } from '../hooks/useProduct';

import styles from '../styles/styles.module.css';

// import { ProductImage } from './ProductImage';
// import { ProductTitle } from './ProductTitle';
// import { ProductButtons } from './ProductButtons';


export const  ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props { 
  product: Product;
  // children?: React.ReactElement | React.ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues 
}


export const ProductCard = ({children, product, className, style, onChange, value, initialValues}: Props) => {
    const {counter, increaseBy, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues})
  return (
      <Provider value={{
          counter,
          increaseBy,
          product,
          isMaxCountReached
      }}>

        <div className={`${styles.productCard} ${ className } `}
              style={style}
        >
            { 
              children({
                count: counter,
                isMaxCountReached,
                maxCount: initialValues?.maxCount,
                product,
                increaseBy,
                reset
              })
            }
        </div>
    </Provider>
  )
}


// ProductCard.Image = ProductImage;
// ProductCard.Title = ProductTitle;
// ProductCard.Buttons = ProductButtons;


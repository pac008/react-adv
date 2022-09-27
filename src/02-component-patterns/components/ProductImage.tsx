import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export interface Props {
    className?:string;
    img?:string;
    style?: React.CSSProperties;
}

export const ProductImage = ({img = '', className, style}: Props) => {

    const { product } = useContext( ProductContext );
    let imgToShow: string | undefined;

    ( img ) 
        ? imgToShow = img
        : imgToShow = product.img;

    return (
        <img src={ imgToShow || noImage} style={style} alt="Coffe Mug" className={`${ styles.productImg } ${ className } `}  />
    )
}
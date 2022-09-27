import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export const ProductImage = ({img = ''}) => {

    const { product } = useContext( ProductContext );
    let imgToShow: string | undefined;

    ( img ) 
        ? imgToShow = img
        : imgToShow = product.img;

    return (
        <img src={ imgToShow || noImage} alt="Coffe Mug" className={styles.productImg} />
    )
}
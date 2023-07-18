import { Max_Rating } from "./constant";
import Star from "./img/star.svg";
import GoldStar from "./img/star-gold.svg"

import styles from "./styles.module.css"
import { Size } from './../../constants/ui';
import classnames from 'classnames';

export const Rating = ({ value, size = Size.m, className }) => {

    return (

        <div className={className}>
            {new Array(Max_Rating).fill(null).map((_, index) => (
                <img
                    src={index >= value ? Star : GoldStar}
                    key={index}
                    className={classnames(styles.star, styles[size])}
                    loading='lazy'
                />
            ))}
        </div>
    );
};
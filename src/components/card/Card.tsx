import { mergeClassNames } from "src/utils/utils";

import classes from "./Card.module.scss";
import { CardProps } from "./Card.type";

const Card: React.FC<CardProps> = ({ children }) => {
  return <div className={mergeClassNames(classes.card)}>
    <div>
      {children}
    </div>
  </div>;
};

export default Card;

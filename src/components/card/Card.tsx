import { mergeClassNames } from "src/utils/utils";

import classes from "./Card.module.scss";

const Card: React.FC = () => {
  return <div className={mergeClassNames(classes.card)}>
    <div>
        This is Good
    </div>
  </div>;
};

export default Card;

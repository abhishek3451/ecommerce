import { Fragment } from "react";
import classes from "./productList.module.css";
import ProductList from "./productList";
import { productsArr } from "./data";

const MusicAlbums = () => {
  return (
    <Fragment>
      <div className={classes.heading}>MUSIC</div>
      <div className={classes.Cont}>
        <div className={classes.wrap}>
          {productsArr.map((item) => {
            return <ProductList key={item.id} item={item} />;
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default MusicAlbums;

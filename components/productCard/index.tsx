import { Product } from "api/productsData";
import routes, { routesNames } from "routes";
import { useUserStore } from "@/store/userStore";
import { buttonTypes } from "settings/themeSettings";

import Link from "next/link";
import Image from "next/image";
import { Button } from "antd";
import { HeartOutlined, HeartFilled, ShoppingCartOutlined } from "@ant-design/icons";

import styles from "./productCard.module.scss";

interface PopularGoodsCardProps {
  product: Product;
}

const ProductCard = ({ product }: PopularGoodsCardProps) => {
  const [favoriteProductList, addProductToFavorite, removeProductFromFavorite] =
    useUserStore((state) => [
      state.favoriteProduct,
      state.addProductToFavorite,
      state.removeProductFromFavorite,
    ]);
  const isProductInFavorites = favoriteProductList.includes(product.id);

  const productRoute = `${routes[routesNames.product].path}/${product.id}`;

  const favoriteClickHander = (event: React.MouseEvent) => {
    event.preventDefault();

    if (isProductInFavorites) {
      removeProductFromFavorite(product.id);
    } else {
      addProductToFavorite(product.id);
    }
  };

  return (
    <Link className={styles.card} href={productRoute}>
      <div className={styles.card__imageWrapper}>
        <Image
          className={styles.card__image}
          src={product.image}
          alt={product.title}
          width={398}
          height={604}
        />
        <Button
          className={styles.card__favorite}
          type={buttonTypes.default}
          icon={isProductInFavorites ? <HeartFilled /> : <HeartOutlined />}
          onClick={favoriteClickHander}
        />
        <Button
          className={styles.card__cart}
          type={buttonTypes.primary}
          icon={<ShoppingCartOutlined />}
          onClick={(event) => {
            event.stopPropagation();
            alert("add to cart");
          }}
        >
          Add
        </Button>
      </div>

      <div className={styles.card__info}>
        <span className={styles.card__category}>{product.category}</span>
        <span className={styles.card__title}>{product.title}</span>
        <span className={styles.card__price}>{`${product.price}$`}</span>
      </div>
    </Link>
  );
};

export default ProductCard;

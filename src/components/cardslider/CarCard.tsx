import { Car } from "../../models/car";
import styles from "./CarCard.module.css";
import { Block, Text, Spacer, Link, Click } from "vcc-ui";
import Image from "next/image";

export type CarCardProps = {
  car: Car;
  ariaControls?: string;
};
const CarCard = (props: CarCardProps) => {
  return (
    <div
      className={styles.card}
      role="listitem"
      aria-controls={props.ariaControls}
    >
      <Click href={`/learn/${props.car.id}/`} disabled={false}>
        <Block extend={{ textAlign: "left" }}>
          <Text fg="foreground.secondary" subStyle="emphasis">
            {props.car.bodyType.toLocaleUpperCase()}
          </Text>
          <Block
            extend={{
              "@media (min-width: 1024px)": {
                display: "flex",
                gap: "8px",
              },
            }}
          >
            <Text subStyle="emphasis" data-cy={`carname-${props.car.id}`}> {props.car.modelName}</Text>
            <Text fg="foreground.secondary"> {props.car.modelType}</Text>
          </Block>
        </Block>
        <Spacer />
        <Image
          src={props.car.imageUrl}
          alt={"Image for the car " + props.car.modelName}
          aria-label={"Image for the car " + props.car.modelName}
          width={"100%"}
          height={"90%"}
          layout="responsive"
          priority={true}
          className={styles.image}
          data-cy={`image-${props.car.id}`}
        ></Image>
      </Click>

      <Spacer />
      <Block
        extend={{
          display: "flex",
          gap: "16px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link data-cy={`learn-${props.car.id}`} href={`/learn/${props.car.id}/`} arrow="right">
          LEARN
        </Link>
        <Link data-cy={`shop-${props.car.id}`} href={`/shop/${props.car.id}/`} arrow="right">
          SHOP
        </Link>
      </Block>
    </div>
  );
};

export default CarCard;

import BackgroundImg from "./backgroundImg/BackgroundImg";
import LabelNew from "./backgroundImg/LabelNew";
import Infos from "./infos/Infos";
import "./Restaurant.scss";
import { Link } from "react-router-dom"

const Restaurant = (props) => {
  return (
    <Link
        to={{
            pathname: '/menu',
            search: `?id=${props.restaurant.id}`
        }}
    >
      <div className="restaurant__card">
        <BackgroundImg img={props.restaurant.img} />
        {props.restaurant.isNew && <LabelNew />}
        <Infos name={props.restaurant.name} city={props.restaurant.city} />
      </div>
    </Link>
  );
};

export default Restaurant;

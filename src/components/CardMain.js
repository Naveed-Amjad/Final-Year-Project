import { Products } from "./products";
import contents from "./content";
import "./Cards.css";
const CardMain = () => {
  return (
    <div className="App">
      {contents.map((contents) => (
        <Products
          key={contents.id}
          image={contents.image}
          name={contents.name}
          paraname={contents.paraname}
          rating={contents.rating}
          numOfRatings={contents.numOfRatings}
        />
      ))}
    </div>
  );
};
export default CardMain;

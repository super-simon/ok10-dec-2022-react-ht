import Cats from "../../components/Cats/Cats";
import Dogs from "../../components/Dogs/Dogs";
import "./CatsAndDogs.css";

export default function CatsAndDogs() {
  return (
    <>
      <h1>Cats And Dogs</h1>
      <div className="cats-and-dogs__container">
        <Cats />
        <Dogs />
      </div>
    </>
  );
}

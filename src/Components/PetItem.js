import { useState } from "react";

function PetItem({ pet, setPets, pets }) {
  const [Gif, setGif] = useState(pet.image);
  const petThe = () => {
    setGif(pet.image2);
  };

  const filterThisPet = () => {
    const res = pets.filter((_pet) => {
      return _pet.id != pet.id;
    });

    setPets(res);
  };

  return (
    <div className="col-lg-4 col-md-8 col-sm-10">
      <div className="single-doctor">
        <img className="image" alt={pet.name} src={Gif} />
        <div className="content">
          <h3>{pet.name}</h3>
          <button onClick={petThe} type="button" className="btn btn-info">
            Pet
          </button>
          <button
            onClick={filterThisPet}
            type="button"
            class="btn btn-info  m-2"
          >
            Adopt
          </button>
        </div>
      </div>
    </div>
  );
}

export default PetItem;

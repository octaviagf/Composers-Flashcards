import { useState } from "react";

const composers = [
  {
    id: 1,
    name: "Bach",
    period: "Baroque",
    photo: "./img/bach.jpg",
  },
  {
    id: 2,
    name: "Handel",
    period: "Baroque",
    photo: "./img/handel.jpg",
  },
  {
    id: 3,
    name: "Liszt",
    period: "Romantic",
    photo: "./img/liszt.jpg",
  },
  {
    id: 4,
    name: "Mozart",
    period: "Classic",
    photo: "./img/mozart.jpg",
  },
  {
    id: 5,
    name: "Schumann",
    period: "Romantic",
    photo: "./img/schumann.jpg",
  },
  {
    id: 6,
    name: "Tchaicovsky",
    period: "Baroque",
    photo: "./img/tchaicovsky.jpg",
  },
];

export default function App() {
  return (
    <div>
      <Flashcards />
    </div>
  );
}

function Flashcards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {composers.map((composer) => (
        <div
          key={composer.id}
          onClick={() => handleClick(composer.id)}
          className={composer.id === selectedId ? "selected" : ""}
          style={{ backgroundImage: `url(${composer.photo})` }}
        >
          <p>{composer.id === selectedId ? composer.period : composer.name}</p>
        </div>
      ))}
    </div>
  );
}

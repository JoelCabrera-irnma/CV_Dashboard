import ListSquares from "../comp/mapSquare.jsx";
import Profile from "../comp/Profile.jsx";
import Sort from "../comp/Sort.jsx";
import TierSkill from "@/Tierlist.jsx";

// Renderizado condicional del componente en Main
export const renderComponent = (count) => {
  switch (count) {
    case 0:
      return <div>Hola aqui va la carta de presentacion</div>;
    case 1:
      return <Profile />;
    case 2:
      return <ListSquares />;
    case 3:
      return <TierSkill />;
    case 4:
      return <Sort />;
    default:
      return;
  }
};

export const replaceClassInMain = (component) => {
  const mainElement = document.querySelector("#main__content");

  if (mainElement) {
    // Remueve cualquier clase existente que no coincida con el nuevo componente
    mainElement.classList.remove(...mainElement.classList);
    if (component == 0) {
      mainElement.classList.add("projects");
    }
    if (component == 1) {
      mainElement.classList.add("profile");
    }
    // Agrega la nueva clase basada en el componente
  }
};

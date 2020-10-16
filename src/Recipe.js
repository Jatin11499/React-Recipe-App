import React from "react";
import style from "./recipe.module.css";

function Recipe({ title, calories, image, ingredients }) {
  return (
    <div className={style.recipe}>
      <img src={image} alt="" className={style.image} />
      <h1 className={style.title}>{title}</h1>
      <ol>
        {ingredients.map((ingredient) => {
          return <li>{ingredient.text}</li>;
        })}
      </ol>
      <h3>Calories: {calories}</h3>
    </div>
  );
}

export default Recipe;

import '../recipe.css';
import Titre from './titre';
import React from 'react';
import Recettes from './recettes';
import Barre from './search';

function Recipe() 
{
  return (
    <div>
      <Titre text="Recettes" />
      <Barre list={Recettes.recettes}/>
      {Recettes.recettes.map((item, i) => (
      <tr key={i}>
        <div className='recette'>
        <h2>Recette</h2>
        <h4>
          <td>{item.name}</td>
        </h4>
      
       <div>
       <h4>Ingrédients</h4>
        {Recettes.recettes.ingredients?.map((data) => (
          <tr key={data}>
          
          <ul>
            <li>{data.ingredient}</li>
            <li>{data.quantity}</li>
            <li>{data.unit}</li>
          </ul>
          </tr>
        ))}
          
          
         
       </div>
        <h4>description</h4>
        <p>
        <td><br/>{item.description}</td>
        </p>
        </div>
    </tr>
))}
      
    </div>
  );
}


export default Recipe;
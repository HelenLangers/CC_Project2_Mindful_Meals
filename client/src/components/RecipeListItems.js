import React, {useState, useRef, useEffect } from 'react';
import './RecipeList.css';
import RecipeFront from './RecipeFront';
import RecipeBack from './RecipeBack';

const RecipeListItems = ({ recipe }) => {
  
  const [flip, setFlip] = useState(false)

  return (
    <div className={`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
      <div className="front">
        <RecipeFront recipe={recipe}/>
      </div>
      <div className="back">
        <RecipeBack recipe={recipe}/>
      </div>
    </div>
  )
}

export default RecipeListItems
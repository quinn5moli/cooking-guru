import { useRef, useState } from 'react'

// styles
import'./Create.css'



export default function Create() {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  const ingredientInput = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(title, method, cookingTime, ingredients)
  }

  const handleAdd = (e) => {
    e.preventDefault()
    const ing = newIngredient.trim()

    if (ing && !ingredients.includes(ing)){
      setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
    setNewIngredient('')
    ingredientInput.current.focus()
  }

  return (
    <div className="create">
        <h2 className="page-title"></h2>

        <form onSubmit={handleSubmit}>
          <label>
            <span>Recipe title:</span>
            <input 
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required 
            />
          </label>

          <label>
            <span>Recipe ingredients:</span>
            <div className="ingredients">
              <input 
                type="text" 
                onChange={(e) => setNewIngredient(e.target.value)}
                value={newIngredient}
                ref={ingredientInput}
              />
              <button onClick={handleAdd} className="btn">add</button>
            </div>
          </label>
          <p>Current ingredients: {ingredients.map(i=> <em key={i}>{i},</em>)}</p>

          <label>
            <span>Recipe method:</span>
            <textarea 
              onChange={(e) => setMethod(e.target.value)}
              value={method}
              required
            />
          </label>

          <label>
            <span>Cooking time (minutes):</span>
            <input 
              type="number"
              onChange={(e) => setCookingTime(e.target.value)}
              value={cookingTime}
              required
            />
          </label>

          <button className="btn">submit</button>

        </form>
    </div>
  )
}

import { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

// hooks
import { useFetch } from '../../hooks/useFetch'

// styles
import './Recipe.css'

export default function Recipe() {
  const { id } = useParams()
  const url = 'http://localhost:3000/recipes/' + id 
  const { data: recipe, isPending, error } = useFetch(url)
  const history = useHistory()

  useEffect(() => {
    if(error){
        // redirect
        // history.goBack()
        setTimeout(() => {
            history.push('/')
        }, 2000)
    }
}, [error])

  return (
    <div className="recipe">
        {isPending && <div className="loading">Loading...</div>}
        {error && <div className="error">{error}</div>}
        {recipe && (
            <>
              <h2 className="page-title">{recipe.title}</h2>
              <p>Takes {recipe.cookTime} to make</p>
              <ul>
                {recipe.ingredients.map(ing => <li key ={ing}>{ing}</li> )}
              </ul>
              <p className="method">{recipe.method}</p>
            </>
        )}
    </div>
  )
}

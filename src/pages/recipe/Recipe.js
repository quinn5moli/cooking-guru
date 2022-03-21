import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { projectFirestore } from '../../firebase/config'

// custom hooks
import { useTheme } from '../../hooks/useTheme'


// styles
import './Recipe.css'

export default function Recipe() {
  const { id } = useParams()
  const { mode } = useTheme()

  const [recipe, setRecipe] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsPending(true)

    projectFirestore.collection('recipes').doc(id).get().then((doc) => {
      if(doc.exists) {
        setIsPending(false)
        setRecipe(doc.data())
      } else{
        setIsPending(false)
        setError('Could not find recipe')
      }
    })
  }, [id])

  const handleClick = () => {
    projectFirestore.collection('recipes').doc(id).update({
      title: 'Something completely different'
    })
  }

  return (
    <div className={`recipe ${mode}`}>
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
              <button onClick={handleClick}>Update</button>
            </>
        )}
    </div>
  )
}

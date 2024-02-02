import './app.css'
import { useCatFact } from './hooks/useCatFact'
import { useCatImages } from './hooks/useCatImages'

export const App = () => {
  const { fact, refreshRandomFact } = useCatFact()
  const { imageUrl } = useCatImages({ fact })

  const handleClick = async () => {
    refreshRandomFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>

      <button onClick={handleClick}>Get New Fact</button>
      {/* <section> */}
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`Image extracted using the first three words for ${fact}`}
        />
      )}
      {/* </section> */}
    </main>
  )
}

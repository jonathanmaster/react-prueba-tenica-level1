import { useEffect, useState } from 'react'

// eslint-disable-next-line space-before-function-paren
export function useCatImages({ fact }) {
  // para recuperar la imagen cada vez que tenemos una cita nueva
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return // si no hay un fact no hace nada y si hay se ejecuta el effect

    // const firstWord = fact.split(' ')[0] // split es para dividir la cadena de texto en espacions
    // const firstWord = fact.split(' ').slice(0, 3).join(' ') // esto me trae las 3 palabras gracias al slice y al join que retorna esas nuevas palabras
    const threeFirstWords = fact.split(' ', 3).join(' ')

    fetch(
      `https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red`
    ).then((resp) => {
      const { url } = resp
      setImageUrl(url)
    })
  }, [fact]) // cada vez que cambie el fact se ejecuta el efecto

  return { imageUrl }
}

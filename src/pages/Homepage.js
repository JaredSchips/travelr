import Earth from "../components/Earth"
import { useContext, useEffect } from "react"
import { GlobalContext } from "../context/context"
import { useState } from "react"


export default function Homepage() {
  const { selection } = useContext(GlobalContext)
  const [summary, setSummary] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    if (!selection) {console.log('null');return}
    fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${selection.properties.name}`)
      .then(res => res.json())
      .then(description => {console.log(description);setSummary(description.extract)})
    
    fetch(`https://en.wikipedia.org/api/rest_v1/page/media-list/${selection.properties.name}`)
      .then(res => res.json())
      .then(result => {console.log(result);setImageUrl(result.items[0].srcset[0].src)})
  }, [selection])

  return (
    <div>
      <div>
      </div>
      {selection && <div className="absolute left-0 top-0 bg-black z-10 w-3/12 h-full opacity-80 text-white">
        <img className="min-w-full" alt="ny" src={imageUrl} />
        <div className="grid gap-2 p-4">
          <div>
            <h2 className="text-2xl">
              {selection.properties.name}
            </h2>
            <h5 className="text-lg" style={{color:'lightgray'}}>
              {selection.properties.adm0name}
            </h5>
          </div>
          <p className="text-sm pr-2 overflow-auto max-h-48">
            {summary}
          </p>
        </div>
        
      </div>}
      <Earth />
    </div>
  )
}
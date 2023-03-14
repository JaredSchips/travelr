import Earth from "../components/Earth"
import { useContext, useEffect } from "react"
import { GlobalContext } from "../context/context"


export default function Homepage() {
  useEffect(() => {
    console.log(selection)
  })
  const { selection, selectionDispatch } = useContext(GlobalContext)
  return (
    <div>
      <div>
      </div>
      {selection && <div className="p-4" style={{color:'white',position:'absolute',left:0,top:0,backgroundColor:'#111',zIndex:2,width:'250px',height:'100%',opacity:'95%'}}>
        <h2 className="text-2xl">
          {selection.properties.name}
        </h2>
        <h5 className="text-lg" style={{color:'lightgray'}}>
          {selection.properties.adm0name}
        </h5>
      </div>}
      <Earth />
    </div>
  )
}
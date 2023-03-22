import Earth from "../components/Earth";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/context";
import { useState } from "react";
import { BiMessageSquareDetail } from "react-icons/bi";
import {
  AiOutlinePlusCircle,
  AiOutlineUnorderedList,
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineClose,
} from "react-icons/ai";
import { SET_SELECTION } from "../context/actions";

import { useMutation, useQuery } from "@apollo/client";
import {
  ADD_FAVORITE,
  DELETE_FAVORITE
} from "../utils/mutations";
import { ME } from '../utils/queries'

export default function Homepage({ setIconsBlack }) {
  setIconsBlack = false;
  const { selection, selectionDispatch } = useContext(GlobalContext);
  const [summary, setSummary] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [addFavorite] = useMutation(ADD_FAVORITE)
  const [deleteFavorite] = useMutation(DELETE_FAVORITE)
  const { data, refetch } = useQuery(ME)
  const me = data?.me

  function onFavoriteClick() {
    if (me.favoritesList.map(city => city.name).includes(selection.properties.name)) {
      deleteFavorite({
        variables: {
          city: selection.properties.name
        }
      })
      console.log('deleted!')
    }
    
    else {
      addFavorite({
        variables: {
          city: selection.properties.name,
          country: selection.properties.adm0name
        }
      })
      console.log(`${selection.properties.name} in ${selection.properties.adm0name} added to favorites!`)
    }

    refetch()
  }

  useEffect(() => {
    if (!selection) return;
    fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${selection.properties.name}`
    )
      .then((res) => res.json())
      .then((description) => setSummary(description.extract));

    fetch(
      `https://en.wikipedia.org/api/rest_v1/page/media-list/${selection.properties.name}`
    )
      .then((res) => res.json())
      .then((result) => setImageUrl(result.items[0].srcset[0].src));
  }, [selection]);


  return (
    <div>
      <div></div>
      {selection && (
        <div className="absolute left-0 top-0 bg-black z-10 w-3/12 h-full opacity-80 text-white overflow-scroll">
          <button
            onClick={() =>
              selectionDispatch({ type: SET_SELECTION, payload: null })
            }
            className="absolute text-3xl p-2 rounded-bl-xl bg-black/50 top-0 right-0"
          >
            <AiOutlineClose />
          </button>
          <img className="min-w-full" alt="A city" src={imageUrl} />
          <div className="grid gap-2 p-4">
            <div>
              <h2 className="text-2xl">{selection.properties.name}</h2>
              <h5 className="text-lg" style={{ color: "lightgray" }}>
                {selection.properties.adm0name}
              </h5>
            </div>
            <p className="text-sm pr-2 overflow-auto max-h-48">{summary}</p>
            <div className="w-full pt-5 flex justify-evenly">
              <button onClick={onFavoriteClick} className="text-3xl w-fit">
                {me.favoritesList.map(city => city.name)
                  .includes(selection.properties.name)
                ? <AiFillHeart />
                : <AiOutlineHeart />}
              </button>
              <button className="text-3xl w-fit">
                <BiMessageSquareDetail />
              </button>
              <button className="text-3xl w-fit">
                <AiOutlinePlusCircle />
              </button>
              <button className="text-3xl w-fit">
                <AiOutlineUnorderedList />
              </button>
            </div>
          </div>
        </div>
      )}
      <Earth />
    </div>
  );
}

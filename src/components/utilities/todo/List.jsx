import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { delItems } from "../../redux/actions/actions";
function List() {
  const listItems = useSelector((state) => {
    return state.toDo;
  });
  const dispatch = useDispatch();
  return (
    <div>
      {listItems.map((items, index) => {
        return (
          <div className="flex justify-center items-center" key={index}>
            <input className="text-2xl bg-transparent focus::bg-white uppercase" value={items}></input>
            <FontAwesomeIcon
              icon={faTrash}
              className="text-red-500 p-3 text-xl hover:scale-110 active:scale-95"
              onClick={() => dispatch(delItems(index))}
            />
            <FontAwesomeIcon icon={faEdit}/>
          </div>
        );
      })}
    </div>
  );
}

export default List;

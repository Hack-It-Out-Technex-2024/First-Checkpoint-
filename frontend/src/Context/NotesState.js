import react, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const Datatinitial = [];
  const [Data, setData] = useState(Datatinitial);

  //get all data
  const getData = async () => {
    //TODO API CALL
    console.log(localStorage.getItem('token'))
    const response = await fetch(`${host}/api/data/fetchdata`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      },
    });
    const json = await response.json();
    setData(json);
  };
  //add a note
  const addData = async ( plastic, rubber, days ) => {
    //TODO API CALL
    const response = await fetch(`${host}/api/data/adddata`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
         localStorage.getItem('token')
      },
      body: JSON.stringify({ plastic, rubber, days }),
    });
    //logic to edit in client site
    const note = await response.json();
    setData(Data);
  };
  return (
    <NoteContext.Provider
      value={{ Data, setData, addData, getData }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;

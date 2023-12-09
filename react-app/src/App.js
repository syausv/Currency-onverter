import React, {useState} from 'react';
import './style/App.css';
import * as ReactDOM from 'react-dom/client';
import PostItem from "./components/PostItem";
import ValuteTable from "./components/ValuteTable";
import { StyledEngineProvider } from '@mui/material/styles';
import MySelect from "./components/UI/MySelect";
import axios from "axios";



function App() {
  const [posts, setPosts] = useState([
    { CharCode: 2, id: 1, Name: 1, Nominal: 1, Value: 1}
  ])

 async function fetchPosts() {
    const responce = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
    console.log(responce.data.Valute);
    const jsonPosts = responce.data.Valute;
    console.log(jsonPosts);
    setPosts(jsonPosts);
  }

   const [selectedSort, setSelectedSort] = useState('')
   const sortPosts = (sort) => {
    console.log(sort);
     setSelectedSort(sort);
   }

  return (
    <div className="App">
      <div>
        <button onClick={fetchPosts}>GET DATA</button>
       <MySelect
         value={selectedSort}
         onChange={sortPosts}
         defaultValue="Выберете валюту"
         options={[
           {value:"EUR", name:"EUR"},
           {value:"USD", name:"USD"},
           {value:"RUB", name:"RUB"},
         ]}
       />
      </div>
      {posts.map((post) =>
        <PostItem post={post} key={post.id}/>
      )}

    </div>
  );
}

export default App;

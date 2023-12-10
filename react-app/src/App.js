import React, {useState} from 'react';
import './style/App.css';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import MySelect from "./components/UI/MySelect";
import axios from "axios";
import TableItems from "./components/TableItems";
import {Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import Favorite from "@mui/icons-material/Favorite";



function App() {
  const [posts, setPosts] = useState([])

 async function fetchPosts() {
    const responce = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
    console.log(responce.data.Valute);
    const jsonPosts = responce.data.Valute;
    let dataValues = Object.values(jsonPosts);
    setPosts(dataValues);
    localStorage.setItem("EUR to RUB",JSON.stringify(jsonPosts.EUR));
    localStorage.setItem("USD to RUB",JSON.stringify(jsonPosts.USD));
    localStorage.setItem("RUB",JSON.stringify(dataValues));
  }

   const [selectedSort, setSelectedSort] = useState('')
   const sortPosts = (sort) => {
     console.log(sort);
     setSelectedSort(sort);
       let savedCurrencyValues = JSON.parse(localStorage.getItem('RUB'));
       if (sort === "EUR") {
        const savedCurrencyEUR =  JSON.parse(localStorage.getItem('EUR to RUB'));
        const priceEUR = savedCurrencyEUR.Value;
         console.log(sort,priceEUR);
         console.log(savedCurrencyValues);
         console.log(savedCurrencyEUR);
         const newEUR = savedCurrencyValues.map((savedCurrencyValue) => (
           { ...savedCurrencyValue, Value: (savedCurrencyValue.Value/priceEUR).toFixed(4) }
         ));
         localStorage.setItem("EUR",JSON.stringify(newEUR));
         setPosts(newEUR);
       }
       else if (sort === "USD") {
           const savedCurrencyUSD = JSON.parse(localStorage.getItem('USD to RUB'));
           const priceUSD = savedCurrencyUSD.Value;
           console.log(sort, priceUSD);
           console.log(savedCurrencyValues);
           console.log(savedCurrencyUSD);
           const newUSD = savedCurrencyValues.map((savedCurrencyValue) => (
             {...savedCurrencyValue, Value: (savedCurrencyValue.Value / priceUSD).toFixed(4)}
           ));
           localStorage.setItem("USD", JSON.stringify(newUSD));
           setPosts(newUSD);
         }
        else if (sort === "RUB") {
         setPosts(savedCurrencyValues);
       }
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

     {/* {
        posts.map((post) =>
        <PostItem post={post} key={post.id}/>
      )}*/}

      {
          //<ValuteTable rows={posts}/>
        }

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Избранное</TableCell>
              <TableCell>Валюта</TableCell>
              <TableCell>Единиц</TableCell>
              <TableCell>Буквенный код</TableCell>
              <TableCell>Курс</TableCell>

            </TableRow>
          </TableHead>
          <TableBody> { posts.map((post) =>
            <TableRow post={post} key={post.ID}>
              <TableCell><Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></TableCell>
              <TableCell>{post.Name}</TableCell>
              <TableCell>{post.Nominal}</TableCell>
              <TableCell>{post.CharCode}</TableCell>
              <TableCell>{post.Value}</TableCell>
            </TableRow>
          )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;

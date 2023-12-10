import React, {useEffect, useState} from 'react';
import './style/App.css';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import {Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import Favorite from "@mui/icons-material/Favorite";
import GetService from "./API/GetService";
import NewMySelect from "./components/UI/NewMySelect";


function App() {
  const [posts, setPosts] = useState([])

  useEffect(() =>{
    fetchPosts()
  }, [])


 async function fetchPosts() {
    const jsonPosts = await GetService.getAll();
    console.log(jsonPosts);

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

       <NewMySelect
         value={selectedSort}
         onChange={sortPosts}
         defaultValue="Выберете валюту"
         options={[
           {value:"EUR", name:"EUR"},
           {value:"USD", name:"USD"},
           {value:"RUB", name:"RUB"},
         ]}
       />

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

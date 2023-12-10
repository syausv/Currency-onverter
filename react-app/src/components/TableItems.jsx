import React from 'react';
import {Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";



const TableItems = (props) => {
  console.log(props)
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
              <TableCell>Избранное</TableCell>
              <TableCell>Валюта</TableCell>
              <TableCell>Единиц</TableCell>
              <TableCell>Буквенный код</TableCell>
              <TableCell>Курс</TableCell>
            }
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow key={props.post.ID}>
              <TableCell><Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></TableCell>
              <TableCell>{props.post.Name}</TableCell>
              <TableCell>{props.post.Nominal}</TableCell>
              <TableCell>{props.post.CharCode}</TableCell>
              <TableCell>{props.post.Value}</TableCell>
            </TableRow>
           }
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableItems;
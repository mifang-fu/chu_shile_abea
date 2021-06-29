/* eslint-disable */
import {
  Box,
  Button,
  Card,
  Link,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon
} from '@material-ui/core';
import { useContext, useState } from "react";
import { AppContext } from "src/Context";

const All = () => {
  const {
    alls,
    allLength,
    selectall,
  } = useContext(AppContext);

  const submitall = (e) => {
    e.preventDefault();
    selectall(e);
    e.target.reset();
  };
  const[search,setSearch]= useState('');

  const gettext =(e,field) =>{
    setSearch({
      ...search,
      [field]: e.target.value, 
    });
    const o={};
    o.orderdate=e.target.value;
    console.log(o);
  };


  return !allLength ? (
    <p>{allLength === null ? "Loading..." : "Please insert some product."}</p>
  ) : (
    <>
    <Box sx={{ mt: 3 }}>
      <Card>
        <CardContent>
        <TextField
        type="date"
        id="orderdate"
        defaultValue="2016-01-01"
        onChange={(e) => gettext(e, "orderdate")}
        placeholder="Enter orderdate"
        autoComplete="off"
      />
      
      <Button
          onClick={submitall}
          >
            搜尋
          </Button>
        </CardContent>
      </Card>
    </Box>
    <table>
      <thead>
        <tr>
          <th>時間</th>
          <th>客戶名稱</th>
          <th>客戶寶號</th>
          <th>總銷售金額</th>
          <th>總利潤</th>
        </tr>
      </thead>
      <tbody>
        {alls.map(({ orderdate,custname,custid,allcost,realcost, isEditing }) => {
          return isEditing === true ? (
            <tr>
              <td>
                <input
                  type="text"
                  defaultValue={orderdate}
                />
              </td>
              <td>
                <input
                  type="text"
                  defaultValue={custname}
                />
              </td>
              <td>
                <input
                  type="text"
                  defaultValue={custid}
                />
              </td>
              <td>
                <input
                  type="text"
                  defaultValue={allcost}
                />
              </td>
              <td>
                <input
                  type="text"
                  defaultValue={realcost}
                />
              </td>
            </tr>
          ) : (
            <tr>
              <td>{orderdate}</td>
              <td>{custname}</td>
              <td>{custid}</td>
              <td>{allcost}</td>
              <td>{realcost}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </>
  );
};
export default All;
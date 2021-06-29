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
import { Search, Search as SearchIcon } from 'react-feather';
import { Link as RouterLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AppContext } from "src/Context";

export const ProdList = () => {

  const {
    prods,
    prodLength,
    editModeProd,
    cancelEditProd,
    selectprod,
    updateProd,
    deleteProd,
  } = useContext(AppContext);

  const [newData, setNewData] = useState({});

  const[search,setSearch]= useState('');
    
  const gettext =(e,field) =>{
    setSearch({
      ...search,
      [field]: e.target.value, 
    });
  
  const o={};
  o.pid=e.target.value;
  selectprod(o);
  console.log(o);
  };

  const saveBtn = () => {
    updateProd(newData);
  };

  const updateNewData = (e, field) => {
    setNewData({
      ...newData,
      [field]: e.target.value,
    });
  };

  const enableEdit = (pid, pName, unitprice, cost) => {
    setNewData({ pid, pName, unitprice, cost });
    editModeProd(pid);
  };

  const deleteConfirm = (pid) => {
    if (window.confirm("Are you sure?")) {
      deleteProd(pid);
    }
  };

  return !prodLength ? (
    <p>{prodLength === null ? "Loading..." : "Please insert some product."}</p>
  ) : (
    <>
    <Box sx={{ mt: 3 }}>
      <Card>
        <CardContent>
          <Box sx={{ maxWidth: 500 }}>
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon
                      fontSize="small"
                      color="action"
                    >
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                )
              }}
              placeholder="Search product (use productid)"
              variant="outlined"
              onChange={(e)=> gettext ( e ,"pid")}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
    <table>
      <thead>
        <tr>
          <th>產品代碼</th>
          <th>產品名稱</th>
          <th>單價</th>
          <th>成本</th>
          <th>動作</th>
        </tr>
      </thead>
      <tbody>
        {prods.map(({ pid, pName, unitprice, cost, isEditing }) => {
          return isEditing === true ? (
            <tr>
              <td defaultValue={pid}>
              </td>
              <td>
                <input
                  type="text"
                  defaultValue={pName}
                  onChange={(e) => updateNewData(e, "pName")}
                />
              </td>
              <td>
                <input
                  type="text"
                  defaultValue={unitprice}
                  onChange={(e) => updateNewData(e, "unitprice")}
                />
              </td>
              <td>
                <input
                  type="text"
                  defaultValue={cost}
                  onChange={(e) => updateNewData(e, "cost")}
                />
              </td>
              <td>
                <button className="btn green-btn" onClick={() => saveBtn()}>
                  Save
                </button>
                <button
                  className="btn default-btn"
                  onClick={() => cancelEditProd(pid)}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ) : (
            <tr>
              <td>{pid}</td>
              <td>{pName}</td>
              <td>{unitprice}</td>
              <td>{cost}</td>
              <td>
                <button
                  className="btn default-btn"
                  onClick={() => enableEdit(pid, pName, unitprice, cost)}
                >
                  Edit
                </button>
                <button
                  className="btn red-btn"
                  onClick={() => deleteConfirm(pid)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </>
  );
};

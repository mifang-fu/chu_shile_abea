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

const SaleList = () => {
  const {
    sales,
    saleLength,
    editModeSale,
    cancelEditSale,
    selectdetail,
    updateSale,
    deleteSale,
    selectsale,
  } = useContext(AppContext);

    const[search,setSearch]= useState('');

    const gettext =(e,field) =>{
      setSearch({
        ...search,
        [field]: e.target.value, 
      });
    
    const o={};
    o.orderid=e.target.value;
    selectsale(o);
    console.log(o);
    };

  // Storing users new data when they editing their info.
  const [newData, setNewData] = useState({});

  const saveBtn = () => {
    updateSale(newData);
  };

  const updateNewData = (e, field) => {
    setNewData({
      ...newData,
      [field]: e.target.value,
    });
  };

  const enableEdit = (seq, orderid, empid, custid, orderdate, descript) => {
    setNewData({ seq, orderid, empid, custid, orderdate, descript });
    editModeSale(seq);
  };

  const deleteConfirm = (seq) => {
    if (window.confirm("Are you sure?")) {
      deleteSale(seq);
    }
  };

  const showdetail = (orderid) => {
      selectdetail(orderid);
  };

  return !saleLength ? (
    <p>{saleLength === null ? "Loading..." : "Please insert some users."}</p>
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
              placeholder="Search sale (use orderid)"
              variant="outlined"
              onChange={(e)=> gettext ( e ,"orderid")}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
    <table>
      <thead>
        <tr>
          <th>訂單編號</th>
          <th>員工代號</th>
          <th>客戶代號</th>
          <th>訂貨日期</th>
          <th>備註</th>
          <th>動作</th>
        </tr>
      </thead>
      <tbody>
        {sales.map(({ seq, orderid, empid, custid, orderdate, descript, isEditing }) => {
          return isEditing === true ? (
            <tr key={seq}>
              <td>
                <input
                  type="text"
                  defaultValue={orderid}
                  onChange={(e) => updateNewData(e, "orderid")}
                />
              </td>
              <td>
                <input
                  type="text"
                  defaultValue={empid}
                  onChange={(e) => updateNewData(e, "empid")}
                />
              </td>
              <td>
                <input
                  type="text"
                  defaultValue={custid}
                  onChange={(e) => updateNewData(e, "custid")}
                />
              </td>
              <td>
                <input
                  type="date"
                  defaultValue={orderdate}
                  onChange={(e) => updateNewData(e, "orderdate")}
                />
              </td>
              <td>
                <input
                  type="text"
                  defaultValue={descript}
                  onChange={(e) => updateNewData(e, "descript")}
                />
              </td>
              <td>
                <button className="btn green-btn" onClick={() => saveBtn()}>
                  Save
                </button>
                <button
                  className="btn default-btn"
                  onClick={() => cancelEditSale(seq)}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ) : (
            <tr key={seq}>
              <td>{orderid}</td>
              <td>{empid}</td>
              <td>{custid}</td>
              <td>{orderdate}</td>
              <td>{descript}</td>
              <td>
                <button
                  className="btn default-btn"
                  onClick={() => enableEdit(seq, orderid, empid, custid, orderdate, descript)}
                >
                  Edit
                </button>
                <button
                  className="btn red-btn"
                  onClick={() => deleteConfirm(seq)}
                >
                  Delete
                </button>
                <Link
                  component={RouterLink}
                  to="/detail"
                  variant="h6"
                >
                <button
                  className="btn default-btn"
                  onClick={() => showdetail(orderid)}
                >
                  detail
                </button>
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </>
  );
};

export default SaleList;

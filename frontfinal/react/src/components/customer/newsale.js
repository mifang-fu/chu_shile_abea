/* eslint-disable */
import { useState, useContext } from "react";
import { AppContext } from "src/Context";
import { Link as RouterLink } from 'react-router-dom';
import { Button,Link } from "@material-ui/core";

const FormSale = () => {
  const { insertSale } = useContext(AppContext);
  const [newSale, setNewSale] = useState({});

  const addNewSale = (e, field) => {
    setNewSale({
      ...newSale,
      [field]: e.target.value,
    });
  };

  const submitSale = (e) => {
    e.preventDefault();
    insertSale(newSale);
    e.target.reset();
  };

  return (
    <form className="insertForm" onSubmit={submitSale}>
      <h2>新增訂單</h2>
      <label htmlFor="seq">序號</label>
      <input
        type="text"
        id="seq"
        onChange={(e) => addNewSale(e, "seq")}
        placeholder="Enter seq"
        autoComplete="off"
        required
      />
      <label htmlFor="orderid">訂單編號</label>
      <input
        type="text"
        id="orderid"
        onChange={(e) => addNewSale(e, "orderid")}
        placeholder="Enter orderid"
        autoComplete="off"
        required
      />
      <label htmlFor="empid">員工代號</label>
      <input
        type="text"
        id="empid"
        onChange={(e) => addNewSale(e, "empid")}
        placeholder="Enter empid"
        autoComplete="off"
        required
      />
      <label htmlFor="custid">客戶代號</label>
      <input
        type="text"
        id="custid"
        onChange={(e) => addNewSale(e, "custid")}
        placeholder="Enter custid"
        autoComplete="off"
        required
      />
      <label htmlFor="date">訂單編號</label>
      <input
        type="date"
        id="date"
        onChange={(e) => addNewSale(e, "orderdate")}
        placeholder="Enter orderdate"
        autoComplete="off"
        required
      />
      <label htmlFor="des">備註</label>
      <input
        type="text"
        id="des"
        onChange={(e) => addNewSale(e, "descript")}
        placeholder="Enter descript"
        autoComplete="off"
      />
      <input type="submit" value="新增" />
      <Link
       component={RouterLink}
       to="/app/customers"
       variant="h6"
      >
        <Button
            color="secondary"
            size="large"
            type="submit"
            variant="contained"
            fullWidth
        >
            結束新增訂單
        </Button>
    </Link>
    </form>
  );
};

export default FormSale;
/* eslint-disable */
import { useState, useContext } from "react";
import { AppContext } from "src/Context";
import { Link as RouterLink} from 'react-router-dom';
import { Button,Link } from "@material-ui/core";

const Formdetail = () => {
  const { insertdetail,details } = useContext(AppContext);
  const [newdetail, setNewdetail] = useState({});

  // Storing the Insert User Form Data.
  const addNewdetail = (e, field) => {
    setNewdetail({
      ...newdetail,
      [field]: e.target.value,
    });
  };

  // Inserting a new user into the Database.
  const submitdetail = (e) => {
    e.preventDefault();
    insertdetail(newdetail);
    e.target.reset();
  };

  return (
    <form className="insertForm" onSubmit={submitdetail}>
      <h2>新增訂單明細</h2>
      <label htmlFor="seq">序號</label>
      <input
        type="text"
        id="seq"
        onChange={(e) => addNewdetail(e, "seq")}
        placeholder={"123"}
        autoComplete="off"
        required
      />
      <label htmlFor="orderid">訂單編號</label>
      <input
        type="text"
        id="orderid"
        onChange={(e) => addNewdetail(e, "orderid")}
        placeholder="Enter orderid"
        autoComplete="off"
        required
      />
      <label htmlFor="pid">產品代號</label>
      <input
        type="text"
        id="pid"
        onChange={(e) => addNewdetail(e, "pid")}
        placeholder="Enter pid"
        autoComplete="off"
        required
      />
      <label htmlFor="qty">數量</label>
      <input
        type="text"
        id="text"
        onChange={(e) => addNewdetail(e, "qty")}
        placeholder="Enter qty"
        autoComplete="off"
        required
      />
      <label htmlFor="discount">折扣</label>
      <input
        type="text"
        id="discount"
        onChange={(e) => addNewdetail(e, "discount")}
        placeholder="Enter discount"
        autoComplete="off"
        required
      />
      <input type="submit" value="新增" />
      <Link
       component={RouterLink}
       to="/detail"
       variant="h6"
      >
        <Button
            color="secondary"
            size="large"
            type="submit"
            variant="contained"
            fullWidth
        >
            結束新增明細
        </Button>
    </Link>
    </form>
  );
};

export default Formdetail;
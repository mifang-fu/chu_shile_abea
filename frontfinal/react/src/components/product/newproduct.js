/* eslint-disable */
import { useState, useContext } from "react";
import { AppContext } from "src/Context";
import { Link as RouterLink} from 'react-router-dom';
import { Button,Link } from "@material-ui/core";

const FormProd = () => {
  const { insertProd } = useContext(AppContext);
  const [newProd, setNewProd] = useState({});

  const addNewProd = (e, field) => {
    setNewProd({
      ...newProd,
      [field]: e.target.value,
    });
  };

  const submitProd = (e) => {
    e.preventDefault();
    insertProd(newProd);
    e.target.reset();
  };

  return (
    <form className="insertForm" onSubmit={submitProd}>
      <h2>新增產品</h2>
      <label htmlFor="_id">產品編號</label>
      <input
        type="text"
        id="_id"
        onChange={(e) => addNewProd(e, "pid")}
        placeholder="Enter id"
        autoComplete="off"
        required
      />
      <label htmlFor="_name">產品名稱</label>
      <input
        type="text"
        id="_name"
        onChange={(e) => addNewProd(e, "pName")}
        placeholder="Enter name"
        autoComplete="off"
        required
      />
      <label htmlFor="_price">單價</label>
      <input
        type="text"
        id="_price"
        onChange={(e) => addNewProd(e, "unitprice")}
        placeholder="Enter unitprice"
        autoComplete="off"
        required
      />
      <label htmlFor="_cost">成本</label>
      <input
        type="text"
        id="_cost"
        onChange={(e) => addNewProd(e, "cost")}
        placeholder="Enter cost"
        autoComplete="off"
        required
      />
      <input 
      type="submit"
      value="新增"
      />
      <Link
       component={RouterLink}
       to="/app/products"
       variant="h6"
      >
        <Button
            color="secondary"
            size="large"
            type="submit"
            variant="contained"
            fullWidth
        >
            結束新增產品
        </Button>
    </Link>
    </form>

  );
};

export default FormProd;
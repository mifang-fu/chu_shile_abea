/* eslint-disable */
import { useEffect, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

export const Actions = () => {
  let [prods, setProd] = useState([]);
  let [sales, setSales] = useState([]);
  let [details, setdetails] = useState([]);
  let [alls, setAlls] = useState([]);

  let [prodLength, setProdLength] = useState(null);
  let [saleLength, setSaleLength] = useState(null);
  let [detailLength, setdetailLength] = useState(null);
  let [allLength, setAllLength] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost/php-react/all-all.php')
      .then((res) => {
        return res.json(); })
      .then((data) => {
        if (data.success) {
          setAlls(data.alls);
          setAllLength(true);
        } else {
          setAllLength(0);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const selectall = (data) => {
    // filter outing the user.
  fetch("http://localhost/php-react/select-all.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.success) {
        setAlls(data.alls);
        navigate('/app/register',{replace: true});
        
      } else {
        setAlls();
        navigate('/app/register',{replace: true});
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

  useEffect(() => {
    fetch('http://localhost/php-react/all-pro.php')
      .then((res) => {
        return res.json(); })
      .then((data) => {
        if (data.success) {
          setProd(data.prods);
          setProdLength(true);
        } else {
          setProdLength(0);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Inserting a new user into the database.
  const insertProd = (newProd) => {
    fetch('http://localhost/php-react/add-pro.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProd),
    })
      .then((res) => { 
        return res.json(); })
      .then((data) => {
        if (data.pid) {
          setProd([
            {
              pid: data.pid,
              ...newProd,
            },
            ...prods,
          ]);
          setProdLength(true);
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Enabling the edit mode for a listed user.
  const editModeProd = (pid) => {
    prods = prods.map((prod) => {
      if (prod.pid === pid) {
        prod.isEditing = true;
        return prod;
      }
      prod.isEditing = false;
      return prod;
    });
    setProd(prods);
  };

  // Cance the edit mode.
  const cancelEditProd = (pid) => {
    prods = prods.map((prod) => {
      if (prod.pid === pid) {
        prod.isEditing = false;
        return prod;
      }
      return prod;
    });
    setProd(prods);
  };

  // Updating a user.
  const updateProd = (prodData) => {
    fetch('http://localhost/php-react/update-pro.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(prodData),
    })
      .then((res) => { 
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          prods = prods.map((prod) => {
            if (prod.pid === prodData.pid) {
              prod.isEditing = false;
              prod.pid = prodData.pid;
              prod.pName = prodData.pName;
              prod.unitprice = prodData.unitprice;
              prod.cost = prodData.cost;
              return prod;
            }
            return prod;
          });
          setProd(prods);
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteProd = (theID) => {
  let ProdDeleted = prods.filter((prod) => {
    return prod.pid !== theID;
  });
  fetch("http://localhost/php-react/delete-pro.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ pid: theID }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.success) {
        setProd(ProdDeleted);
        if (prods.length === 1) {
          setprodLength(0);
        }
      } else {
        alert(data.msg);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

  //Sale

  useEffect(() => {
    fetch("http://localhost/php-react/all-sale.php")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setSales(data.sales);
          setSaleLength(true);
        } else {
          setSaleLength(0);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Inserting a new user into the database.
  const insertSale = (newSale) => {
    fetch("http://localhost/php-react/add-sale.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSale),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.seq) {
          setSales([
            {
              seq: data.seq,
              ...newSale,
            },
            ...sales,
          ]);
          setSaleLength(true);
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Enabling the edit mode for a listed user.
  const editModeSale = (seq) => {
    sales = sales.map((sale) => {
      if (sale.seq === seq) {
        sale.isEditing = true;
        return sale;
      }
      sale.isEditing = false;
      return sale;
    });
    setSales(sales);
  };

  // Cance the edit mode.
  const cancelEditSale = (seq) => {
    sales = sales.map((sale) => {
      if (sale.seq === seq) {
        sale.isEditing = false;
        return sale;
      }
      return sale;
    });
    setSales(sales);
  };

  // Updating a user.
  const updateSale = (saleData) => {
    fetch("http://localhost/php-react/update-sale.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(saleData),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          sales = sales.map((sale) => {
            if (sale.seq === saleData.seq) {
              sale.isEditing = false;
              sale.orderid = saleData.orderid;
              sale.empid = saleData.empid;
              sale.custid = saleData.custid;
              sale.orderdate = saleData.orderdate;
              sale.descript = saleData.descript;
              return sale;
            }
            return sale;
          });
          setSales(sales);
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Deleting a user.
  const deleteSale = (theID) => {
      // filter outing the user.
    let saleDeleted = sales.filter((sale) => {
      return sale.seq !== theID;
    });
    fetch("http://localhost/php-react/delete-sale.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ seq: theID }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setSales(saleDeleted);
          if (sales.length === 1) {
            setSaleLength(0);
          }
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };


  // Inserting a new user into the database.
  const insertdetail = (newdetail) => {
    fetch("http://localhost/php-react/add-detail.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newdetail),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.seq) {
          setdetails([
            {
              seq: data.seq,
              ...newdetail,
            },
            ...details,
          ]);
          setdetailLength(true);
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Enabling the edit mode for a listed user.
  const editModedetail = (seq) => {
    details = details.map((detail) => {
      if (detail.seq === seq) {
        detail.isEditing = true;
        return detail;
      }
      detail.isEditing = false;
      return detail;
    });
    setdetails(details);
  };

  // Cance the edit mode.
  const cancelEditdetail = (seq) => {
    details = details.map((detail) => {
      if (detail.seq === seq) {
        detail.isEditing = false;
        return detail;
      }
      return detail;
    });
    setdetails(details);
  };

  // Updating a user.
  const updatedetail = (detailData) => {
    fetch("http://localhost/php-react/update-detail.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(detailData),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          details = details.map((detail) => {
            if (detail.seq === detailData.seq) {
              detail.isEditing = false;
              detail.seq = detailData.seq;
              detail.pid = detailData.pid;
              detail.qty = detailData.qty;
              detail.discount = detailData.discount;
              return detail;
            }
            return detail;
          });
          setdetails(details);
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Deleting a user.
  const deletedetail = (theID) => {
      // filter outing the user.
    let detailDeleted = details.filter((detail) => {
      return detail.seq !== theID;
    });
    fetch("http://localhost/php-react/delete-detail.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ seq: theID }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setdetails(detailDeleted);
          if (details.length === 1) {
            setdetailLength(0);
          }
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const selectprod = (newprod) => {
    // filter outing the user.
  fetch("http://localhost/php-react/select-pro.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify( newprod ),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.success === 1) {
        setProd(data.prods);
        navigate('/app/products',{replace: true});
      } else {
        setProd();
        navigate('/app/products',{replace: true});
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

  const selectsale = (newsale) => {
    // filter outing the user.
  fetch("http://localhost/php-react/select-sale.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify( newsale ),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.success === 1) {
        setSales(data.sales);
        navigate('/app/customers',{replace: true});
      } else {
        setSales();
        navigate('/app/customers',{replace: true});
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

  const selectdetail = (orderid) => {
    // filter outing the user.
  fetch("http://localhost/php-react/select-detail.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ orderid: orderid }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.success) {
        setdetails(data.details);
        setdetailLength(true);
        
      } else {
        setdetailLength(0);
        alert(data.msg);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

  return {
    prods,
    sales,
    editModeProd,
    cancelEditProd,
    updateProd,
    insertProd,
    deleteProd,
    prodLength,
    editModeSale,
    cancelEditSale,
    updateSale,
    insertSale,
    deleteSale,
    selectsale,
    saleLength,
    details,
    editModedetail,
    cancelEditdetail,
    updatedetail,
    insertdetail,
    deletedetail,
    selectdetail,
    detailLength,
    alls,
    allLength,
    selectall,
    selectprod,
  };

};

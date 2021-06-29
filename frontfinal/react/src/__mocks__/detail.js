/* eslint-disable */
import { useContext, useState } from "react";
import { AppContext } from "src/Context";

export const Detail = () => {
  const {
    details,
    detailLength,
    editModedetail,
    cancelEditdetail,
    updatedetail,
    deletedetail,
  } = useContext(AppContext);

  // Storing users new data when they editing their info.
  const [newData, setNewData] = useState({});

  const saveBtn = () => {
    updatedetail(newData);
  };

  const updateNewData = (e, field) => {
    setNewData({
      ...newData,
      [field]: e.target.value,
    });
  };

  const enableEdit = (seq, pid, qty, discount) => {
    setNewData({ seq,  pid, qty, discount });
    editModedetail(seq);
  };

  const deleteConfirm = (seq) => {
    if (window.confirm("Are you sure?")) {
      deletedetail(seq);
    }
  };

  return !detailLength ? (
    <p>{detailLength === null ? "Loading..." : "Please insert some users."}</p>
  ) : (
    <table>
      <thead>
        <tr>
          <th>序號</th>
          <th>產品編號</th>
          <th>數量</th>
          <th>折扣</th>
          <th>動作</th>
        </tr>
      </thead>
      <tbody>
        {details.map(({ seq, pid, qty, discount, isEditing }) => {
          return isEditing === true ? (
            <tr>
              <td>
                <input
                  type="text"
                  defaultValue={seq}
                  onChange={(e) => updateNewData(e, "seq")}
                />
              </td>
              <td>
                <input
                  type="text"
                  defaultValue={pid}
                  onChange={(e) => updateNewData(e, "pid")}
                />
              </td>
              <td>
                <input
                  type="text"
                  defaultValue={qty}
                  onChange={(e) => updateNewData(e, "qty")}
                />
              </td>
              <td>
                <input
                  type="text"
                  defaultValue={discount}
                  onChange={(e) => updateNewData(e, "discount")}
                />
              </td>
              <td>
                <button className="btn green-btn" onClick={() => saveBtn()}>
                  Save
                </button>
                <button
                  className="btn default-btn"
                  onClick={() => cancelEditdetail(seq)}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ) : (
            <tr>
              <td>{seq}</td>
              <td>{pid}</td>
              <td>{qty}</td>
              <td>{discount}</td>
              <td>
                <button
                  className="btn default-btn"
                  onClick={() => enableEdit(seq, pid, qty, discount)}
                >
                  Edit
                </button>
                <button
                  className="btn red-btn"
                  onClick={() => deleteConfirm(seq)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Detail;
/* eslint-disable */
import { getAuthToken } from "src/utils/utils";

export const login = (empid,password) => {
    return fetch('https://localhost/php-react/all-emp.php', {
        method:"POST",
        headers: {
            //'Content-Type': 'application/json',
            'authorization': 'Bearer ',
        },
        body: JSON.stringify({
            empid,
            password
          }),
      })
      .then(res => res.json())
      .then(data => console.log(data))
  };

// 身分驗證
export const getMe = () => {
  // 從 localStorage 讀取 token
  const token = getAuthToken();
  return fetch(`${Bearer}/me`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
};
import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../features/cutomers/customerSlice";
const columns = [
  {
    title: "#",
    dataIndex: "key",
  },
  {
    title: "Nombre",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Correo Electrónico",
    dataIndex: "email",
  },
  {
    title: "Contacto",
    dataIndex: "mobile",
  },
];

const Customers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
 
  const customerstate = useSelector((state) => state.customer.customers.users);
  const data1 = [];

  if (customerstate) {
    for (let i = 0; i < customerstate.length; i++) {
      if (customerstate[i].rol !== "admin") {
        data1.push({
          key: i,
          name: customerstate[i].fullName,
          email: customerstate[i].email,
          mobile: customerstate[i].phone,
        });
      }
    }
  }
  return (
    <div>
      <h3 className="mb-4 title">Clientes</h3>
      <div>
        {customerstate && <Table columns={columns} dataSource={data1} />}
      </div>
    </div>
  );
};

export default Customers;

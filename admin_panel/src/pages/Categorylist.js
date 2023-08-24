import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteAProductCategory,
  getCategories,
  resetState,
} from "../features/pcategory/pcategorySlice";
import CustomModal from "../components/CustomModal";

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
    title: "Acción",
    dataIndex: "action",
  },
];

const Categorylist = () => {
  const [open, setOpen] = useState(false);
  const [pCatId, setpCatId] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const showModal = (id, name) => {
    setOpen(true);
    setpCatId(id);
    setCategoryName(name);
  };

  const hideModal = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetState());
    dispatch(getCategories());
  }, []);

  const pCatStat = useSelector((state) => state.pCategory.pCategories.category);
  const data1 = [];

  if (pCatStat) {
    for (let i = 0; i < pCatStat.length; i++) {
      data1.push({
        key: i + 1,
        name: pCatStat[i].title,
        action: (
          <>
            <Link
              to={`/admin/category/${pCatStat[i]._id}`}
              className=" fs-3 text-danger"
            >
              <BiEdit />
            </Link>
            <button
              className="ms-3 fs-3 text-danger bg-transparent border-0"
              onClick={() => showModal(pCatStat[i]._id, pCatStat[i].title)}
            >
              <AiFillDelete />
            </button>
          </>
        ),
      });
    }
  }

  const deleteCategory = async (categoryId) => {
    await dispatch(deleteAProductCategory(categoryId));
    setOpen(false);
    dispatch(getCategories());
  };
  return (
    <div>
      <h3 className="mb-4 title">Categorías - Productos</h3>
      <div>{pCatStat && <Table columns={columns} dataSource={data1} />}</div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deleteCategory(pCatId);
        }}
        title={`¿Está seguro de que desea eliminar la categoría: ${categoryName}?`}
      />
    </div>
  );
};

export default Categorylist;

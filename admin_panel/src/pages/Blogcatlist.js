import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteABlogCat,
  getCategories,
  resetState,
} from "../features/bcategory/bcategorySlice";
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

const Blogcatlist = () => {
  const [open, setOpen] = useState(false);
  const [blogCatId, setBlogCatId] = useState("");
  const [blogCategoryName, setBlogCategoryName] = useState("");
  const showModal = (id, name) => {
    setOpen(true);
    setBlogCatId(id);
    setBlogCategoryName(name);
  };

  const hideModal = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetState());
    dispatch(getCategories());
  }, []);
  const bCatState = useSelector(
    (state) => state.bCategory.bCategories.category
  );
  const data1 = [];

  if (bCatState) {
    for (let i = 0; i < bCatState.length; i++) {
      data1.push({
        key: i + 1,
        name: bCatState[i].title,
        action: (
          <>
            <Link
              to={`/admin/blog-category/${bCatState[i]._id}`}
              className=" fs-3 text-danger"
            >
              <BiEdit />
            </Link>
            <button
              className="ms-3 fs-3 text-danger bg-transparent border-0"
              onClick={() => showModal(bCatState[i]._id, bCatState[i].title)}
            >
              <AiFillDelete />
            </button>
          </>
        ),
      });
    }
  }

  const deleteBlogCategory = async (categoryId) => {
    await dispatch(deleteABlogCat(categoryId));
    setOpen(false);
    dispatch(getCategories());
  };

  return (
    <div>
      <h3 className="mb-4 title">Categorías - Blog</h3>
      <div>{bCatState && <Table columns={columns} dataSource={data1} />}</div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deleteBlogCategory(blogCatId);
        }}
        title={`¿Estás seguro de que quieres eliminar la categoría: ${blogCategoryName}?`}
      />
    </div>
  );
};

export default Blogcatlist;

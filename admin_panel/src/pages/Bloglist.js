import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteABlog, getBlogs, resetState } from "../features/blogs/blogSlice";
import CustomModal from "../components/CustomModal";

const columns = [
  {
    title: "#",
    dataIndex: "key",
  },
  {
    title: "Titulo",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Categoría",
    dataIndex: "category",
    sorter: (a, b) => a.category.length - b.category.length,
  },
  {
    title: "Acción",
    dataIndex: "action",
  },
];

const Bloglist = () => {
  const [open, setOpen] = useState(false);
  const [blogId, setBlogId] = useState("");
  const [blogName, setBlogName] = useState("");
  const showModal = (id, name) => {
    setOpen(true);
    setBlogId(id);
    setBlogName(name);
  };

  const hideModal = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetState());
    dispatch(getBlogs());
  }, []);
  const getBlogState = useSelector((state) => state.blogs.blogs.Blogs);
  const data1 = [];

  if (getBlogState) {
    for (let i = 0; i < getBlogState.length; i++) {
      data1.push({
        key: i + 1,
        name: getBlogState[i].title,
        category: getBlogState[i].category,

        action: (
          <>
            <Link
              to={`/admin/blog/${getBlogState[i].id}`}
              className=" fs-3 text-danger"
            >
              <BiEdit />
            </Link>
            <button
              className="ms-3 fs-3 text-danger bg-transparent border-0"
              onClick={() => showModal(getBlogState[i]._id, getBlogState[i].title)}
            >
              <AiFillDelete />
            </button>
          </>
        ),
      });
    }
  }

  const deleteBlog = async (blogId) => {
    await dispatch(deleteABlog(blogId));
    setOpen(false);
    dispatch(getBlogs());
  };
  
  return (
    <div>
      <h3 className="mb-4 title">Lista de Blogs</h3>
      <div>
        {getBlogState && <Table columns={columns} dataSource={data1} />}
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deleteBlog(blogId);
        }}
        title={`¿Estás seguro de que quieres eliminar la categoría: ${blogName}?`}
      />
    </div>
  );
};

export default Bloglist;

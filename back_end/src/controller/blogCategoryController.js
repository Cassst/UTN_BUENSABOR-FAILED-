const Category = require("../models/noSQL/blogCategoryModel");
const validateMongoDbId = require("../utils/validateMongoDB");

const createCategory = async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    return res
      .status(201)
      .send({ status: "Success", success: true, message: "Category created" });
  } catch (error) {
    return res.status(409).send({
      status: "Fail",
      success: false,
      message: "Category Already Exists",
    });
  }
};
const updateCategory = async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updatedCategory = await Category.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).send({
      status: "Success",
      success: true,
      message: "Blog Category Updated",
    });
  } catch (error) {
    return res.status(500).send({
      status: "Fail",
      success: false,
      message: "Error Server",
      error: error.message,
    });
  }
};
const deleteCategory = async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedCategory = await Category.findByIdAndDelete(id);
    return res.status(200).send({
      status: "Success",
      success: true,
      message: "Blog Category Removed",
    });
  } catch (error) {
    return res.status(500).send({
      status: "Fail",
      success: false,
      message: "Error Server",
      error: error.message,
    });
  }
};
const getCategory = async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getaCategory = await Category.findById(id);
    return res.status(200).send({
      status: "Success",
      success: true,
      message: "Category Details",
      category: getaCategory,
    });
  } catch (error) {
    return res.status(500).send({
      status: "Fail",
      success: false,
      message: "Error Server",
      error: error.message,
    });
  }
};
const getallCategory = async (req, res) => {
  try {
    const getallCategory = await Category.find();
    res.status(200).send({
      status: "Success",
      success: true,
      message: "All Categories Found",
      category: getallCategory,
    });
  } catch (error) {
    return res.status(500).send({
      status: "Fail",
      success: false,
      message: "Error Server",
      error: error.message,
    });
  }
};
module.exports = {
  createCategory,
  updateCategory,
  deleteCategory,
  getCategory,
  getallCategory,
};

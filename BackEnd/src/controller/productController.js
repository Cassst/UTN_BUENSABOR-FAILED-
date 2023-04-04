const Product = require("../models/noSQL/productModel");
const slugify = require("slugify");

const createProduct = async (req, res) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }

    const productName = req.body.productName;
    const findProduct = await Product.findOne({ productName });

    if (!findProduct) {
      const newProduct = await Product.create(req.body);
      return res
        .status(201)
        .send({ status: "Success", success: true, message: "Created Product" });
    } else {
      return res.status(409).send({
        status: "Fail",
        success: false,
        message: "Product Already Exists",
      });
    }
  } catch (error) {
    return res.status(500).send({
      status: "Fail",
      success: false,
      message: "Error Server",
      error: error.message,
    });
  }
};

const getProduct = async (req, res) => {
  try {
    let product = await Product.findById(req.params.productId);
    //validateMongoDBID(req.params.productId);
    return res.status(200).send({
      status: "Success",
      success: true,
      message: "Product Details",
      product,
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

const getAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.status(200).send({
      status: "Success",
      success: true,
      message: "All Products",
      allProducts,
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

const updateProduct = async (req, res) => {
  try {
    const updateProduct = await Product.findOneAndUpdate(
      req.params.productId,
      req.body,
      { new: true }
    );
    return res.status(200).send({
      status: "Success",
      success: true,
      message: "Product Updated",
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

const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.productId);
    return res.status(200).send({
      status: "Success",
      success: true,
      message: "Product Removed",
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
  createProduct,
  getProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
};

const Product = require("../models/noSQL/productModel");
const User = require("../models/noSQL/userModel");
const { cloudinaryUploadImg, cloudinaryDeleteImg } = require("../utils/cloudinary");
const slugify = require("slugify");
const fs = require("fs");

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
    const queryObject = { ...req.query };
    const excludeFields = ["page", "sort", "limit", "fields"];

    excludeFields.forEach((field) => delete queryObject[field]);

    let queryString = JSON.stringify(queryObject);
    queryString = queryString.replace(
      /\b(gte|gt|lte|lt)\b/g,
      (match) => `$${match}`
    );

    let query = Product.find(JSON.parse(queryString));

    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      query = query.sort(sortBy);
    } else {
      query = query.sort("-createdAt");
    }

    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      query = query.select(fields);
    } else {
      query = query.select("-createdAt");
    }

    const page = req.query.page;
    const limit = req.query.limit;
    const skip = (page - 1) * limit;
    query = query.skip(skip).limit(limit);

    if (req.query.page) {
      const productCount = await Product.countDocuments();
      if (skip >= productCount) {
        return res.status(404).send({
          status: "Fail",
          success: false,
          message: "This Page does not exist",
          error: error.message,
        });
      }
    }

    const product = await query;

    res.status(200).send({
      status: "Success",
      success: true,
      message: "All Products",
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

const addToWishlist = async (req, res) => {
  const { _id } = req.user;
  const { prodId } = req.body;
  try {
    const user = await User.findById(_id);
    const alreadyAdded = user.wishlist.find((id) => id.toString() === prodId);
    if (alreadyAdded) {
      let updatedUser = await User.findByIdAndUpdate(
        _id,
        {
          $pull: { wishlist: prodId },
        },
        {
          new: true,
        }
      );
      return res.status(200).send({
        status: "Success",
        success: true,
        message: "The product has been removed successfully from your wishlist",
      });
    } else {
      let updatedUser = await User.findByIdAndUpdate(
        _id,
        {
          $push: { wishlist: prodId },
        },
        {
          new: true,
        }
      );
      return res.status(200).send({
        status: "Success",
        success: true,
        message: "The product has been added successfully to your wishlist",
      });
    }
  } catch (error) {
    return res.status(500).send({
      status: "Fail",
      success: false,
      message: "Fail to add to the wishlist",
      error: error.message,
    });
  }
};

const rating = async (req, res) => {
  const { _id } = req.user;
  const { star, prodId, comment } = req.body;
  try {
    const product = await Product.findById(prodId);
    let alreadyRated = product.ratings.find(
      (userId) => userId.postedby.toString() === _id.toString()
    );
    if (alreadyRated) {
      const updateRating = await Product.updateOne(
        {
          ratings: { $elemMatch: alreadyRated },
        },
        {
          $set: { "ratings.$.star": star, "ratings.$.comment": comment },
        },
        {
          new: true,
        }
      );
    } else {
      const rateProduct = await Product.findByIdAndUpdate(
        prodId,
        {
          $push: {
            ratings: {
              star: star,
              comment: comment,
              postedby: _id,
            },
          },
        },
        {
          new: true,
        }
      );
    }
    const getallratings = await Product.findById(prodId);
    let totalRating = getallratings.ratings.length;
    let ratingsum = getallratings.ratings
      .map((item) => item.star)
      .reduce((prev, curr) => prev + curr, 0);
    let actualRating = Math.round(ratingsum / totalRating);
    let finalproduct = await Product.findByIdAndUpdate(
      prodId,
      {
        totalrating: actualRating,
      },
      { new: true }
    );
    return res.status(200).send({
      status: "Success",
      success: true,
      message: "Your rating was updated successfully",
    });
  } catch (error) {
    return res.status(500).send({
      status: "Fail",
      success: false,
      message: "Fail to put the rating",
      error: error.message,
    });
  }
};

const uploadImages = async (req, res) => {
  const { id } = req.params;
  try {
    const uploader = (path) => cloudinaryUploadImg(path, "images");
    const urls = [];
    const files = req.files;
    for (const file of files) {
      const { path } = file;
      const newPath = await uploader(path);
      urls.push(newPath);
      fs.unlinkSync(path);
    }
    const findProduct = await Product.findByIdAndUpdate(
      id,
      {
        images: urls.map((file) => {
          return file;
        }),
      },
      {
        new: true,
      }
    );
    res.json(findProduct);
  } catch (error) {
    return res.status(500).send({
      status: "Fail",
      success: false,
      message: "Fail to upload the image",
      error: error.message,
    });
  }
};

const deleteImages = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = (path) => cloudinaryDeleteImg(id, "images");
    res.json({message: "Delete images"})
  } catch (error) {
    return res.status(500).send({
      status: "Fail",
      success: false,
      message: "Fail to upload the image",
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
  addToWishlist,
  rating,
  uploadImages,
  deleteImages
};

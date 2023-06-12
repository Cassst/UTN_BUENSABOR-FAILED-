const Enquiry = require("../models/noSQL/enqModel");

const createEnquiry = async (req, res) => {
  try {
    const newEnquiry = await Enquiry.create(req.body);
    res.json(newEnquiry);
  } catch (error) {
    return res.status(500).send({
      status: "Fail",
      success: false,
      message: "Failed to create the enquiry",
      error: error.message,
    });
  }
};

const updateEnquiry = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedEnquiry = await Enquiry.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedEnquiry) {
      return res.status(404).send({
        status: "Fail",
        success: false,
        message: "Enquiry not found",
      });
    }
    res.json(updatedEnquiry);
  } catch (error) {
    return res.status(500).send({
      status: "Fail",
      success: false,
      message: "Failed to update the enquiry",
      error: error.message,
    });
  }
};

const deleteEnquiry = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedEnquiry = await Enquiry.findByIdAndDelete(id);
    if (!deletedEnquiry) {
      return res.status(404).send({
        status: "Fail",
        success: false,
        message: "Enquiry not found",
      });
    }
    res.json(deletedEnquiry);
  } catch (error) {
    return res.status(500).send({
      status: "Fail",
      success: false,
      message: "Failed to delete the enquiry",
      error: error.message,
    });
  }
};

const getEnquiry = async (req, res) => {
  const { id } = req.params;
  try {
    const getaEnquiry = await Enquiry.findById(id);
    if (!getaEnquiry) {
      return res.status(404).send({
        status: "Fail",
        success: false,
        message: "Enquiry not found",
      });
    }
    res.json(getaEnquiry);
  } catch (error) {
    return res.status(500).send({
      status: "Fail",
      success: false,
      message: "Failed to get the enquiry",
      error: error.message,
    });
  }
};

const getallEnquiry = async (req, res) => {
  try {
    const getallEnquiry = await Enquiry.find();
    res.json(getallEnquiry);
  } catch (error) {
    return res.status(500).send({
      status: "Fail",
      success: false,
      message: "Failed to get all enquiries",
      error: error.message,
    });
  }
};

module.exports = {
  createEnquiry,
  updateEnquiry,
  deleteEnquiry,
  getEnquiry,
  getallEnquiry,
};

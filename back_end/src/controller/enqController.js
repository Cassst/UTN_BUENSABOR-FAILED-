const Enquiry = require("../models/noSQL/enqModel");

const createEnquiry = async (req, res) => {
  try {
    const newEnquiry = await Enquiry.create(req.body);
    return res
        .status(201)
        .send({ status: "Success", success: true, message: "Created Enquiry" });
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
    return res.status(200).send({
      status: "Success",
      success: true,
      message: "Enquiry Updated",
    });
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
    return res.status(200).send({
      status: "Success",
      success: true,
      message: "Enquiry Removed",
    });
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
    return res.status(200).send({
      status: "Success",
      success: true,
      message: "Enquiry Details",
      getaEnquiry,
    });
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
    res.status(200).send({
      status: "Success",
      success: true,
      message: "All Enquiry",
      getallEnquiry,
    });
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

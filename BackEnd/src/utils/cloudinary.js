const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dwvqfdb5j",
  api_key: "862929877971219",
  api_secret: "AHh6UjMf3bGtNW2oNREq3VS9PZ4",
  secure: true,
});

const cloudinaryUploadImg = async (fileToUpload) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      fileToUpload,
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve({
            url: result.secure_url,
            resource_type: "auto",
          });
        }
      }
    );
  });
};
module.exports = { cloudinaryUploadImg };

import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME || "mattezl",
  api_key: process.env.API_KEY || "243842342754734",
  api_secret: process.env.API_SECRET || "s7xSV5BGEp1honbjGCqCKuw_tq0",
});

module.exports = async (file) => {
  try {
    const res = await cloudinary.uploader.upload(file);
    return res.secure_url;
  } catch (error) {
    return error;
  }
};

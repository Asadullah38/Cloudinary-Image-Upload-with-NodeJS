
exports.create = async (req, res, next) => {
  try {
    const result = await cloudinary.uploader.upload(
      "fileAsDataURLHere",
      {
        folder: "cloudinaryFolderNameHere",
      }
    );
    console.log(result);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

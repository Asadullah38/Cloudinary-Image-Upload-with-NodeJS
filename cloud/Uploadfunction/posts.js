import postMessage from "../model/schema.js";
import { v2 } from "../cloudinary/config.js";
export const getPosts = async (req, res) => {
  try {
    const data = await postMessage.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const createPosts = async (req, res) => {
  try {
    const image = req.body.image;
    const post = new postMessage({
      image: req.body.image,
      imgname: "ddd",
    });
    const response = await post.save();
    const result=await v2.uploader.upload(image,{upload_preset:'dev_setups',});
    console.log(result);
    res.send(response);
    // console.log(result);
    // res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
};

import Address from "../model/addressModel.js";
import { createError } from "../utils/error.js";

export const createAddress = async (req, res, next) => {
  const newAddress = new Address(req.body);
 
  try {
    const savedAddress = await newAddress.save();
    res.status(200).json("Address Created Successfully");
  } catch (err) {
    next(err);
  }
};

export const getAddress = async (req, res, next) => {
  const {userId}=req.query
  
  try {
    const address = await Address.find();
    const getaddress = address.filter(address=> address.userID === userId)
    res.status(200).json(getaddress);
    // res.status(200).json(address);
  } catch (err) {
    next(err);
  }
};
export const getOneAddress = async (req, res, next) => {
  try {
    const address = await Address.findById(req.params.id);
    res.status(200).json(address);
  } catch (err) {
    next(err);
  }
};

export const deleteAddress = async (req, res, next) => {
  try {
    await Address.findByIdAndDelete(req.params.id);
    res.status(200).json("Address has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const updateAddress = async (req, res, next) => {
  try {
    const updatedAddress = await Address.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json("Address Updated Successfully");
  } catch (err) {
    next(err);
  }
};

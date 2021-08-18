const User = require("../model/userModel");

module.exports = {
  //addUser
  addUser: async (req, res) => {
    const description_Service = req.body.description_Service;
    const date = req.body.date;
    const adress = req.body.adress;
    const phone = req.body.phone;
    const car_description = req.body.car_description;

    try {
      user = new User({
        description_Service,
        date,
        adress,
        phone,
        car_description,
      });
      await user.save();
      res.json(user);
    } catch (error) {
      console.error(error.message);
    }
  },
  //get user
  getUser: async (req, res) => {
    try {
      const user = await User.find();
      res.json(user);
    } catch (error) {
      console.error(error.message);
    }
  },
  //deleteuser
  deleteUser: async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.json(user);
    } catch (error) {
      console.error(error.message);
    }
  },
  //updateuser
  updateUser: async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.json(user);
    } catch (error) {
      console.error(error.message);
    }
  },
};

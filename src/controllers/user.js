const userService = require("../services/user");

module.exports.registerUser = async (req, res) => {
  try {
    const data = await userService.registerUser(req.body);
    if (data) {
      res.send({
        data: data,
        status: true,
        message: "user registered successfully ",
      });
    } else {
      res.send({
        status: false,
        message: "user registered successfully ",
      });
    }
  } catch (error) {
    return res.send({
      message: error.message || "somthing went wrong",
      status: false,
    });
  }
};

module.exports.deleteUser = async (req, res) => {
  try {
    // console.log(req.body)
    const email = await userService.deleteUser(req.body.email);
    if (email) {
      res.send({
        status: true,
        message: `${email} deleted successfully `,
      });
    } else {
      res.send({
        status: false,
        message: "somthing went wrong ",
      });
    }
  } catch (error) {
    return res.send({
      message: error.message || "somthing went wrong",
      status: false,
    });
  }
};

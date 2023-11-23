const Modal = require("./../modal/modal");

exports.getAllBooks = async (req, res) => {
  try {
    const allBooks = await Modal.find();
    res.status(200).json({
      status: "success",
      allBooks,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      Error: {
        error,
      },
    });
  }
};

exports.createBooks = async (req, res) => {
  try {
    const newBook = await Modal.create(req.body);
    res.status(201).json({
      status: "Success",
      newBook: {
        newBook,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "Failed",
      Error: {
        error,
      },
    });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const deletedBook = await Modal.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "Deleted",
      deletedBook,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      Error: {
        error,
      },
    });
  }
};

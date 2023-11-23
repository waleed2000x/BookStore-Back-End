const Modal = require("./../modal/modal");

exports.getBooks = async (req, res) => {
  try {
    const allBooks = await Modal.find().select("-__v");
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
exports.getBook = async (req, res) => {
  try {
    const id = req.params.id;
    const oneBook = await Modal.findById(id).select("-__v");
    res.status(200).json({
      status: "Success",
      oneBook,
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
    res.status(400).json({
      status: "Failed",
      Error: {
        error,
      },
    });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const updatedBook = await Modal.findByIdAndUpdate(req.params.id, req.body);

    res.status(201).json({
      status: "Success",
      updatedBook,
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

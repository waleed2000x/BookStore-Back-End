const Modal = require("./../modal/modal");

exports.getBooks = async (req, res) => {
  try {
    const queryObj = { ...req.query };
    let excludedFields = ["sort", "fields"];
    excludedFields.forEach((el) => delete queryObj[el]);

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.split(",").join(" ");

    let mongooseQuery = Modal.find(JSON.parse(queryStr)).select("-__v");

    if (req.query.sort) {
      let sortBy = req.query.sort.split(",").join(" ");
      mongooseQuery = mongooseQuery.sort(sortBy);
    }

    const allBooks = await mongooseQuery;
    res.status(200).json({
      status: "success",
      allBooks,
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

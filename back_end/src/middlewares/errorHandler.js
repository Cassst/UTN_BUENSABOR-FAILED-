const notFound = (req, res, next) => {
    const error = new Error(`Not Found: ${req.originalUrl}`);
    res.status(404);//.send({ status: "Fail", success: false, message: "Resource Not Found" });
    next(error);
};

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200? 500 : res.statusCode;
    res.status(statusCode);
    res.json({ status: "Fail", success: false, message: err?.message, stack: err?.stack });
};

module.exports = {
    notFound,
    errorHandler
};
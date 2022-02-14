const routeNotFound = (err, req, res, next) => {
  console.log("wdwewe", req.originalUrl);
  const error = new Error(`Not found- ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const customErrorHandler = (err, req, res, next) => {
  console.log("eeereerer", res.statusCode);
  const status = res.statusCode === 200 ? 500 : res?.statusCode;
  console.log("error");
  res.status(status);
  res.json({
    message: err?.message,
    stack: process.env.NODE_ENV === "PRODUCTION" ? undefined : err?.stack,
  });
};

export { routeNotFound, customErrorHandler };

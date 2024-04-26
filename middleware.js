module.exports = (req, res, next) => {
  // Perform some preprocessing
  console.log('Request received:', req.method, req.url)

  // Call the next middleware or route handler
  next()
}

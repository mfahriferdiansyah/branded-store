function errorHandler(err, req, res, next) {
  console.log(err)
  let status, message
  switch (err.name) {
    case 'SequelizeUniqueConstraintError':
    case 'SequelizeValidationError':
      status = 400
      message = err.errors[0].message
      break;

    case `JsonWebTokenError`:
    case `InvalidToken`:
      status = 401
      message = "Wrong Login Credential"
      break;

    case `Unauthenticated`:
      status = 401
      message = "You don't have access to this page"
      break;

    case `EmailRequired`:
      status = 400
      message = "Email is required"
      break;

    case `PasswordRequired`:
      status = 400
      message = "Password is required"
      break;

    case `InvalidEmailPassword`:
      status = 401
      message = "Invalid Email/Password"
      break;

    case `SequelizeForeignKeyConstraintError`:
    case `NotFound`:
      status = 404
      message = 'Data not found'
      break;

    default:
      status = 500
      message = 'Internal server error'
      break;
  }
  res.status(status).json(message)
}

module.exports = errorHandler
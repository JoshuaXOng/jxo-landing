'use strict'

abstract class ServerError {
    message: string;
    abstract getCode(): number;
}

class BadRequestError extends ServerError {
    name = 'Bad Request.';
    message: string;
    constructor (message: string) {
      super()
      this.message = message
    }

    getCode () {
      return 400
    }
}

class UnauthorizedError extends ServerError {
    name = 'Unauthorized.';
    message: string;
    constructor (message: string) {
      super()
      this.message = message
    }

    getCode () {
      return 401
    }
}

class ForbiddenError extends ServerError {
    name = 'Forbidden.';
    message: string;
    constructor (message: string) {
      super()
      this.message = message
    }

    getCode () {
      return 403
    }
}

class NotFoundError extends ServerError {
    name = 'Not Found.';
    message: string;
    constructor (message: string) {
      super()
      this.message = message
    }

    getCode () {
      return 404
    }
}

class TooManyRequestsError extends ServerError {
    name = 'Too Many Requests.';
    message: string;
    constructor (message: string) {
      super()
      this.message = message
    }

    getCode () {
      return 429
    }
}

class InternalServerErrorError extends ServerError {
    name = 'Internal Server Error.';
    message: string;
    constructor (message: string) {
      super()
      this.message = message
    }

    getCode () {
      return 500
    }
}

class NotImplementedError extends ServerError {
    name = 'Not Implemented.';
    message: string;
    constructor (message: string) {
      super()
      this.message = message
    }

    getCode () {
      return 501
    }
}

export {
  ServerError, BadRequestError, UnauthorizedError, ForbiddenError, NotFoundError,
  TooManyRequestsError, InternalServerErrorError, NotImplementedError
}

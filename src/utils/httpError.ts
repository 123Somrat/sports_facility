
class HttpError extends Error {
  status: number;
  code: string;
  constructor(status: number, code: string, message: string) {
    super(message);
    this.status = status;
    this.code = code;
    this.message = message;
    
        // Set the prototype explicitly to maintain the prototype chain
        Object.setPrototypeOf(this, HttpError.prototype);
  }
}

export default HttpError;

class ExpressError extends Error {
  constructor(message, status) {
    // 1. Call the parent constructor (Error) with the message
    super();

    // 2. Set the custom status property
    this.status = status;
    this.message = message;
  }
}

// Export for use in other files
module.exports = ExpressError;

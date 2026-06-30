class ExpressError extends Error {
    constructor(status, message) {
        super(message);
        this.statusCode = status;
        this.message = message;
    }
}

module.exports = ExpressError;
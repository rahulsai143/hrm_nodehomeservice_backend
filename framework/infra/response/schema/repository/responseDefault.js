module.exports = [
  {
    "code": 100,
    "name": "Continue",
    "message": "The server has received the request headers, and the client should proceed to send the request body.",
    "status": "info"
  },
  {
    "code": 101,
    "name": "Switching Protocols",
    "message": "The requester has asked the server to switch protocols and the server has agreed to do so.",
    "status": "info"
  },
  {
    "code": 102,
    "name": "Processing",
    "message": "The server is currently processing the request but no response is available yet.",
    "status": "info"
  },
  {
    "code": 200,
    "name": "OK",
    "message": "The request was successful.",
    "status": "success"
  },
  {
    "code": 201,
    "name": "Created",
    "message": "The request has been fulfilled and has resulted in the creation of a resource.",
    "status": "success"
  },
  {
    "code": 202,
    "name": "Accepted",
    "message": "The request has been accepted for processing, but the processing is not complete.",
    "status": "success"
  },
  {
    "code": 203,
    "name": "Non-Authoritative Information",
    "message": "The server successfully processed the request, but is returning information that may be from another source.",
    "status": "success"
  },
  {
    "code": 204,
    "name": "No Content",
    "message": "The server successfully processed the request and is not returning any content.",
    "status": "success"
  },
  {
    "code": 205,
    "name": "Reset Content",
    "message": "The server successfully processed the request and is not returning any content, but requires that the requester reset the document view.",
    "status": "success"
  },
  {
    "code": 206,
    "name": "Partial Content",
    "message": "The server is delivering only part of the resource due to a range header sent by the client.",
    "status": "success"
  },
  {
    "code": 207,
    "name": "Multi-Status",
    "message": "The message body that follows is an XML message and can contain several separate response codes.",
    "status": "success"
  },
  {
    "code": 208,
    "name": "Already Reported",
    "message": "The members of a DAV binding have already been enumerated in a previous reply to this request.",
    "status": "success"
  },
  {
    "code": 226,
    "name": "IM Used",
    "message": "The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.",
    "status": "success"
  },
  {
    "code": 300,
    "name": "Multiple Choices",
    "message": "The request has more than one possible response. The user or user agent can select a preferred response.",
    "status": "redirect"
  },
  {
    "code": 301,
    "name": "Moved Permanently",
    "message": "The requested resource has been permanently moved to a new URL.",
    "status": "redirect"
  },
  {
    "code": 302,
    "name": "Found",
    "message": "The requested resource resides temporarily under a different URL.",
    "status": "redirect"
  },
  {
    "code": 303,
    "name": "See Other",
    "message": "The response to the request can be found under another URI using the GET method.",
    "status": "redirect"
  },
  {
    "code": 304,
    "name": "Not Modified",
    "message": "If the client has performed a conditional GET request and access is allowed, but the document has not been modified, the server should respond with this status code.",
    "status": "redirect"
  },
  {
    "code": 305,
    "name": "Use Proxy",
    "message": "The requested resource is available only through a proxy, the address for which is provided in the response.",
    "status": "redirect"
  },
  {
    "code": 307,
    "name": "Temporary Redirect",
    "message": "The requested resource resides temporarily under a different URI.",
    "status": "redirect"
  },
  {
    "code": 308,
    "name": "Permanent Redirect",
    "message": "The requested resource has been definitively moved to the URI given by the Location header.",
    "status": "redirect"
  },
  {
    "code": 400,
    "name": "Bad Request",
    "message": "The request could not be understood by the server due to malformed syntax.",
    "status": "error"
  },
  {
    "code": 401,
    "name": "Unauthorized",
    "message": "The request requires user authentication.",
    "status": "error"
  },
  {
    "code": 402,
    "name": "Payment Required",
    "message": "Payment is required to access the requested resource.",
    "status": "error"
  },
  {
    "code": 403,
    "name": "Forbidden",
    "message": "The server understood the request, but refuses to authorize it.",
    "status": "error"
  },
  {
    "code": 404,
    "name": "Not Found",
    "message": "The requested resource could not be found.",
    "status": "error"
  },
  {
    "code": 405,
    "name": "Method Not Allowed",
    "message": "A request method is not supported for the requested resource.",
    "status": "error"
  },
  {
    "code": 406,
    "name": "Not Acceptable",
    "message": "The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request.",
    "status": "error"
  },
  {
    "code": 407,
    "name": "Proxy Authentication Required",
    "message": "Proxy authentication is required.",
    "status": "error"
  },
  {
    "code": 408,
    "name": "Request Timeout",
    "message": "The server timed out waiting for the request.",
    "status": "error"
  },
  {
    "code": 409,
    "name": "Conflict",
    "message": "The request could not be completed due to a conflict with the current state of the resource.",
    "status": "error"
  },
  {
    "code": 410,
    "name": "Gone",
    "message": "The requested resource is no longer available at the server and no forwarding address is known.",
    "status": "error"
  },
  {
    "code": 411,
    "name": "Length Required",
    "message": "The server refuses to accept the request without a defined Content-Length.",
    "status": "error"
  },
  {
    "code": 412,
    "name": "Precondition Failed",
    "message": "The server does not meet one of the preconditions that the requester put on the request.",
    "status": "error"
  },
  {
    "code": 413,
    "name": "Payload Too Large",
    "message": "The request is larger than the server is willing or able to process.",
    "status": "error"
  },
  {
    "code": 414,
    "name": "URI Too Long",
    "message": "The URI provided was too long for the server to process.",
    "status": "error"
  },
  {
    "code": 415,
    "name": "Unsupported Media Type",
    "message": "The request entity has a media type which the server or resource does not support.",
    "status": "error"
  },
  {
    "code": 416,
    "name": "Range Not Satisfiable",
    "message": "The client has asked for a portion of the file, but the server cannot supply that portion.",
    "status": "error"
  },
  {
    "code": 417,
    "name": "Expectation Failed",
    "message": "The server cannot meet the requirements of the Expect request-header field.",
    "status": "error"
  },
  {
    "code": 418,
    "name": "I'm a Teapot",
    "message": "Any attempt to instruct an teapot to brew coffee should result in the error \"I'm a teapot\".",
    "status": "error"
  },
  {
    "code": 421,
    "name": "Misdirected Request",
    "message": "The request was directed at a server that is not able to produce a response.",
    "status": "error"
  },
  {
    "code": 422,
    "name": "Unprocessable Entity",
    "message": "The server understands the content type of the request entity, but was unable to process the contained instructions.",
    "status": "error"
  },
  {
    "code": 423,
    "name": "Locked",
    "message": "The resource that is being accessed is locked.",
    "status": "error"
  },
  {
    "code": 424,
    "name": "Failed Dependency",
    "message": "The request failed because it depended on another request and that request failed.",
    "status": "error"
  },
  {
    "code": 425,
    "name": "Too Early",
    "message": "The server is unwilling to risk processing a request that might be replayed.",
    "status": "error"
  },
  {
    "code": 426,
    "name": "Upgrade Required",
    "message": "The client should switch to a different protocol, such as TLS/1.3, given in the Upgrade header field.",
    "status": "error"
  },
  {
    "code": 428,
    "name": "Precondition Required",
    "message": "The origin server requires the request to be conditional.",
    "status": "error"
  },
  {
    "code": 429,
    "name": "Too Many Requests",
    "message": "The user has sent too many requests in a given amount of time ('rate limiting').",
    "status": "error"
  },
  {
    "code": 431,
    "name": "Request Header Fields Too Large",
    "message": "The server is unwilling to process the request because its header fields are too large.",
    "status": "error"
  },
  {
    "code": 451,
    "name": "Unavailable For Legal Reasons",
    "message": "The server is denying access to the resource as a consequence of a legal demand.",
    "status": "error"
  },
  {
    "code": 500,
    "name": "Internal Server Error",
    "message": "The server encountered an unexpected condition that prevented it from fulfilling the request.",
    "status": "error"
  },
  {
    "code": 501,
    "name": "Not Implemented",
    "message": "The server does not support the functionality required to fulfill the request.",
    "status": "error"
  },
  {
    "code": 502,
    "name": "Bad Gateway",
    "message": "The server, while acting as a gateway or proxy, received an invalid response from the upstream server.",
    "status": "error"
  },
  {
    "code": 503,
    "name": "Service Unavailable",
    "message": "The server is currently unavailable (overloaded or down).",
    "status": "error"
  },
  {
    "code": 504,
    "name": "Gateway Timeout",
    "message": "The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server.",
    "status": "error"
  },
  {
    "code": 505,
    "name": "HTTP Version Not Supported",
    "message": "The server does not support the HTTP protocol version used in the request.",
    "status": "error"
  },
  {
    "code": 506,
    "name": "Variant Also Negotiates",
    "message": "The server has an internal configuration error: transparent content negotiation for the request results in a circular reference.",
    "status": "error"
  },
  {
    "code": 507,
    "name": "Insufficient Storage",
    "message": "The server is unable to store the representation needed to complete the request.",
    "status": "error"
  },
  {
    "code": 508,
    "name": "Loop Detected",
    "message": "The server detected an infinite loop while processing the request.",
    "status": "error"
  },
  {
    "code": 510,
    "name": "Not Extended",
    "message": "Further extensions to the request are required for the server to fulfill it.",
    "status": "error"
  },
  {
    "code": 511,
    "name": "Network Authentication Required",
    "message": "The client needs to authenticate to gain network access.",
    "status": "error"
  }
];

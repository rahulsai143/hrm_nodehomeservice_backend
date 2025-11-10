module.exports = [
  {
    "name": "referrerPolicy",
    "code": "Referrer-Policy",
    "value": "no-referrer"
  },
  {
    "name": "X_FRAME_OPTIONS",
    "code": "X-Frame-Options",
    "value": "SAMEORIGIN"
  },
  {
    "name": "contentSecurityPolicy",
    "code": "Content-Security-Policy",
    "value": "default-src 'self';"
  },
  {
    "name": "contentSecurityPolicyReportOnly",
    "code": "Content-Security-Policy-Report-Only",
    "value": ""
  },
  {
    "name": "xContentTypeOptions",
    "code": "X-Content-Type-Options",
    "value": "nosniff"
  },
  {
    "name": "xRobotsTag",
    "code": "X-Robots-Tag",
    "value": "none"
  },
  {
    "name": "xXSSProtection",
    "code": "X-XSS-Protection",
    "value": "1; mode=block"
  },
  {
    "name": "strictTransportSecurity",
    "code": "Strict-Transport-Security",
    "value": "max-age=31536000; includeSubDomains"
  }
];
  
import rateLimit from "express-rate-limit";

const rateLimiter = rateLimit({
  windowMs: 2 * 60 * 1000,
  max: 10,
  standardHeaders:true,
  legacyHeaders: false,
  message: "Too many requests from this IP, please try again after 2 minutes",
  handler: (_req, res) => {
    res.status(429).json({
      error: "Too many requests",
      message: "You have exceeded the rate limit, please try again later",
    });
  },
  keyGenerator: (req) => req.ip as string,
});

export default rateLimiter
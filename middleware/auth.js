// middleware/auth.js
import jwt from 'jsonwebtoken';

export const requireAuth = (req, res, next) => {
    const token = req.cookies.token; // Assuming token is stored in cookies
    if (!token) {
        return res.status(401).json({ error: "Access denied. No token provided." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Add decoded token data to request object
        next();
    } catch (error) {
        res.status(400).json({ error: "Invalid token." });
    }
};

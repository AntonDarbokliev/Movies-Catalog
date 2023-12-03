module.exports = () => (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin','https://movies-catalog-8mqp.onrender.com');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Auth');
    // res.setHeader('access-control-expose-headers', 'Set-Cookie');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
};
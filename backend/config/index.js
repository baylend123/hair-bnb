module.exports = {
    environment: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 5001,
    db: {
        username: "paullym",
        password: "Baylendoss12",
        database: "hairbnb",
        host: "localhost",
    },
    jwtConfig: {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRES_IN,
    },
}

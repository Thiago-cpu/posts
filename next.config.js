module.exports = {
  reactStrictMode: true,
  env: {
    MONGO_DB_URL: process.env.MONGO_DB_URL,
    TOKEN_SECRET: process.env.TOKEN_SECRET,
  },
}

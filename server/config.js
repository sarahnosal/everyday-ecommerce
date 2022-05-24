module.exports = {
    PORT: process.env.PORT,
    DB: {
      PGHOST: process.env.PGHOST,
      PGUSER: process.env.PGUSER,
      PGDATABASE: process.env.PGDATABASE,
      PGPORT: process.env.PGPORT
    },
    SESSION_SECRET: process.env.SESSION_SECRET
  }
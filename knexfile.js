// --env=dev
// --env=test

const sqlite = {
  client: "sqlite3",
  useNullAsDefault: true,
  migrations: {
    directory: "./database/migrations",
  },
  seeds: {
    directory: "./database/seeds",
  },
  pool: {
    afterCreate: (conn, done) => {
      conn.run('PRAGMA foreign_keys = ON', done);
    }
  },
}

module.exports = {
  dev: {
    ...sqlite,
    connection: {
      filename: "./database/dev.db3",
    },
  },
  test: {
    ...sqlite,
    connection: {
      filename: "./database/test.db3"
    },
  },
}

// // // --env=dev
// // // --env=test


// module.exports = {
//   development: {
//     client: "sqlite3",
//     useNullAsDefault: true,
//     connection: process.env.DB_URL || "./database/dev.db3",
//     migrations: {
//       directory: './database/migrations',
//     },
//     seeds: { directory: './database/seeds' },
//     pool: {
//       afterCreate: (conn, done) => {
//       conn.run('PRAGMA foreign_keys = ON', done);
//     },
//   },
//   },

//   testing: {
//     client: 'pg',
//     connection: process.env.DB_URL || "./database/test.db3",
//     migrations: {
//       directory: './database/migrations',
//     },
//     seeds: { directory: './database/seeds' },
//     pool: {
//       afterCreate: (conn, done) => {
//       conn.run('PRAGMA foreign_keys = ON', done);
//     },
//   },
//   },

//   production: {
//     client: 'pg',
//     connection: process.env.DB_URL || "./database/dev.db3",
//     migrations: {
//       directory: './database/migrations',
//     },
//     seeds: { directory: './database/seeds' },
//     pool: {
//       afterCreate: (conn, done) => {
//       conn.run('PRAGMA foreign_keys = ON', done);
//     },
//   },
// }};

// const sqlite = {
//   client: "sqlite3",
//   useNullAsDefault: true,
//   migrations: {
//     directory: "./database/migrations",
//   },
//   seeds: {
//     directory: "./database/seeds",
//   },
//   pool: {
//     afterCreate: (conn, done) => {
//       conn.run('PRAGMA foreign_keys = ON', done);
//     }
//   },
// }

// module.exports = {
//   dev: {
//     ...sqlite,
//     connection: {
//       filename: "./database/dev.db3"
//     },
//   },
//   test: {
//     ...sqlite,
//     connection: {
//       filename: "./database/test.db3"
//     }
//   },
//   production: {
//     client: "pg",
//     connection: {
//       database: process.env.DB_URL,
//       user: process.env.USER,
//       password: process.env.PASSWORD,
//     },
//     migrations: {
//       directory: "./database/migrations",
//     },
//     seeds: {
//       directory: "./database/seeds",
//     },
//     pool: {
//       afterCreate: (conn, done) => {
//         conn.run('PRAGMA foreign_keys = ON', done);
//       }
//     }
//   }
// }

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
      filename: "./database/dev.db3"
    },
  },

  test: {
    ...sqlite,
    connection: {
      filename: "./database/test.db3"
    },
  },

  production: {
    ...sqlite,
    connection: {
      database: process.env.DB_URL || "https://disney-parent-3.herokuapp.com/",
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD
    }
  },
}
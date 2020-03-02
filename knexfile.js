// // --env=dev
// // --env=test

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
//       filename: "./database/dev.db3",
//     },
//   },
//   test: {
//     ...sqlite,
//     connection: {
//       filename: "./database/test.db3"
//     },
//   },
// //   staging: {
// //     client: "sqlite3",
// //     useNullAsDefault: true,
// //     connection: {
// //       database: "./database/dev.db3",
// //       // user:     'username',
// //       // password: 'password'
// //     },
// //     pool: {
// //       // min: 2,
// //       // max: 10,
// //       afterCreate: (conn, done) => {
// //         conn.run('PRAGMA foreign_keys = ON', done);
// //     },
// //     migrations: {
// //       directory: "./database/migrations"
// //     },
// //   },
// // }
// staging: {
//   client: 'postgresql',
//   connection: {
//     database: "./database/dev.db3",
//     user:     'username',
//     password: 'password'
//   },
//   pool: {
//     min: 2,
//     max: 10
//   },
//   migrations: {
//     tableName: 'knex_migrations'
//   }
// },
// }

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DB_URL,
    migrations: {
      directory: './database/migrations',
    },
    seeds: { directory: './database/seeds' },
  },

  testing: {
    client: 'pg',
    connection: process.env.DB_URL,
    migrations: {
      directory: './database/migrations',
    },
    seeds: { directory: './database/seeds' },
  },

  production: {
    client: 'pg',
    connection: process.env.DB_URL,
    migrations: {
      directory: './database/migrations',
    },
    seeds: { directory: './database/seeds' },
  },
};
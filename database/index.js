const { Pool, Client } = require("pg");

const credentials = {
  user: "sarahnosal",
  host: "localhost",
  database: "everyday_ecommerce",
  port: 5432,
};

// Connect with a connection pool.

async function poolDemo() {
  const pool = new Pool(credentials);
  const now = await pool.query("SELECT NOW()");
  await pool.end();

  return now;
}

// Connect with a client.

async function clientDemo() {
  const client = new Client(credentials);
  await client.connect();
  const now = await client.query("SELECT NOW()");
  await client.end();

  return now;
}

// Use a self-calling function so we can use async / await.

(async () => {
  const poolResult = await poolDemo();
  console.log("Time with pool: " + poolResult.rows[0]["now"]);

  const clientResult = await clientDemo();
  console.log("Time with client: " + clientResult.rows[0]["now"]);
})();




// const { Pool, Client } = require('pg')

// const pool = new Pool({
//     user: 'sarahnosal',
//     host: 'localhost',
//     database: 'everyday_ecommerce',
//     port: 5432,
// })

// pool.query('SELECT NOW()', (err, res) => {
//     console.log(err, res)
//     pool.end()
// })
// const client = new Client({
//     user: 'sarahnosal',
//     host: 'localhost',
//     database: 'everyday_ecommerce',
//     port: 5432,
// })

// client.connect()

// client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
//     console.log(err ? err.stack : res.rows[0].message) //Hello World!
//     client.end()
// })

// module.exports = {
//     query: (text, params, callback) => {
//         const start = Date.now()
//         return pool.query(text, params, (err, res) => {
//             const duration = Date.now() - start
//             console.log('executed query', {text, duration, rows: res.rowCount})
//             callback(err, res)
//         })
//     },
//     getClient: (callback) => {
//         pool.connect((err, client, done) => {
//             const query = client.query

//             //monkey patch the query method to keep track of the last query executed
//             client.query = (...args) => {
//                 client.lastQuery = args
//                 return query.apply(client, args)
//             }

//             //set a timeout of 5 seconds, after which we will log this client's last query
//             const timeout = setTimeout(() => {
//                 console.error('A client has been checked out for more than 5 seconds!')
//                 console.error(`The last executed query on this client was: ${client.lastQuery}`)
//             }, 5000)

//             const release = (err) => {
//                 //call the actual 'done' method, returning this client to the pool
//                 done(err)

//                 //clear our timeout
//                 clearTimeout(timeout)

//                 //set the query method back to its old un-monkey-patched version
//                 client.query = query
//             }

//             callback(err, client, release)
//         })
//     }
// }
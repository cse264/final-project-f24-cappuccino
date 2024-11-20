import pg from 'pg'
const { Client } = pg
 
const client = new Client({
  host: peanut.db.elephantsql.com,
  port: 5432,
  database: sfctizgx,
  user: sfctizgx,
  password: oPSR69xCjlCIOqykl_HiH8rRtdw2h_wU,
  ssl: {
    rejectUnauthorized: false
  }
})

console.log(client)

client.connect()

export const query = async (text) => {
    try{
        console.log("query to be executed:", text)
        const res = await client.query(text)
        return res
    } catch (err) {
        console.error("Problem executing query")
        console.error(err)
        throw err
    }
}

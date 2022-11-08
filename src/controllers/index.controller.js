
import { pool } from '../db.js'

export const pingController = async (req, res) => {

    const [result] = await pool.query('SELECT 1+1 AS result')

    res.json({ data: result[0] }) 
}

const db = require('../database');
const pgp = require('pg-promise')({ capSQL: true });

module.exports = class CartItemModel {
   /**
   * Creates a new cart line item
   * @param  {Object}      data [Cart item data]
   * @return {Object|null}      [Created cart item]
   */
    static async create(data) {
        try {
            const statement = pgp.helpers.insert(data, null, 'cartItems') + 'RETURNING *';
            const result = await db.query(statement);

            if (result.rows?.length) {
                return result.rows[0];
            }
            return null;
        } catch(err) {
            throw new Error(err);
        }
    }
   /**
   * Updates existing cart item
   * @param  {Object}      data [Cart item data]
   * @param  {Object}      id   [Cart item id]
   * @return {Object|null}      [Updated cart item]
   */
    static async update(id, data) {
        try {
            const condition = pgp.as.format('WHERE id = ${id} RETURNING *', { id });
            const statement = pgp.helpers.update(data, null, 'cartItems') + condition;
            const result = await db.query(statement);

            if (result.rows?.length) {
                return result.rows[0];
            }
            return null;
        } catch(err) {
            throw new Error(err);
        }
    }
   /**
   * Retrieve cart items for a cart
   * @param  {Object} cartId [Cart ID]
   * @return {Array}         [Created cart item]
   */
    static async find(cartId) {
        try {
            const statement = `SELECT
                                    ci.qty,
                                    ci.id AS 'cartItemId',
                                    p.*
                                FROM 'cartItems' ci
                                INNER JOIN products p ON p.id = ci.'productId'
                                WHERE 'carterId' = $1`
            const values = [cartId];
            const result = await db.query(statement, values)

            if (result.rows?.length) {
                return result.rows;
            }
            return [];
        } catch(err) {
            throw new Error(err)
        }
    }
   /**
   * Deletes a cart line item
   * @param  {Object}      id [Cart item ID]
   * @return {Object|null}    [Deleted cart item]
   */
  static async delete(id) {
      try {
          const statement = `DELETE
                             FROM 'cartItems'
                             WHERE id = $1
                             RETURNING *`;
          const values = [id];
          const result = await db.query(statement, values);

          if (result.rows?.length) {
              return result.rows[0];
          }
          return null
      } catch(err) {
          throw new Error(err);
      }
  }
}
const res = require("express/lib/response");
const database = require("./database");

const all_categories = (callback) => {
  const sql = 'SELECT * FROM categories';
  database.appDatabase.all(sql, [], (error, rows) => {
    if (error) { console.error(error.message); }
    callback(rows);
  });
}

const all_products = (callback) => {
  const sql = 'SELECT categories.name AS catName, products.name AS prodName, img0, price, products.id AS id FROM products  CROSS JOIN categories WHERE products.id_category = categories.id';
  database.appDatabase.all(sql, [], (error, rows) => {
    if (error) { console.error(error.message); }
    callback(rows);
  });
}

const get_product = (idproduct, callback) => {
  const sql = `SELECT categories.name AS catName, products.name AS prodName, products.id, spec, price, img0, img1, img2, img3 FROM products CROSS JOIN categories WHERE products.id = ${idproduct}`;
  database.appDatabase.get(sql, [], (error, row) => {
    if (error) {
      
      callback(error.message);
    }
    callback (row);
  });
 
 
  // const sql = `SELECT name, price, img1, img2, img3 FROM products WHERE id = ${idproduct}`;
  // database.appDatabase.get(sql, [], (error, row) => {
    // if (error){ console.error(error); }
    // console.log(row)
    // return row;
  // })
} 

module.exports = {
  all_categories,
  all_products,
  get_product
}
// TODO

const registerUser = function(db, email, password, phone, name){
    return db.query(
        `INSERT INTO users (email, password, phone, fullname, user_type) VALUES ('${email}', '${password}', '${phone}', '${name}', 'client')`
    )
}

const checkPassword = function(db, email, password) {
    return db.query(`
    SELECT *
    FROM users
    WHERE email = $1 AND password = $2
    `, [email, password])
      .then(res => res.rows[0]);
  };

module.exports = { registerUser, checkPassword};
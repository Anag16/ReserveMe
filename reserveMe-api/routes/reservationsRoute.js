const router = require("express").Router();
const withAuth = require('../middleware');

module.exports = db => {

  router.get("/reservations/:store_id/:dateString/:startHour/:startMinutes/", withAuth, (request, response) => {
    // 2021-10-28 20:39:19
    let store_id = String(request.params.store_id.toString());
    let dateString = `${request.params.dateString}`;
    let startHour = `${request.params.startHour}`;
    let startMinutes = `${request.params.startMinutes}`;
    db.query(
      `SELECT *
      FROM reservations
      WHERE store_id::varchar = '${store_id}' AND reservation_date = '${dateString}' AND start_hour = '${startHour}' AND start_minutes = '${startMinutes}'`
    ).then(({ rows: reservations }) => {
      response.json(reservations);
    });
  });

  router.get("/reservations/:store_id/:dateString", withAuth, (request, response) => {
    // 2021-10-28 20:39:19
    let store_id = String(request.params.store_id.toString());
    let dateString = `${request.params.dateString}`;
    db.query(
      `SELECT *
      FROM reservations
      WHERE store_id::varchar = '${store_id}' AND reservation_date = '${dateString}'`
    ).then(({ rows: reservations }) => {
      response.json(reservations);
    });
  });

  router.get("/reservations/:store_id/", withAuth, (request, response) => {
    // 2021-10-28 20:39:19
    let store_id = String(request.params.store_id.toString());
    let dateString = `${request.params.dateString}`;
    db.query(
      `SELECT *
      FROM reservations
      WHERE store_id::varchar = '${store_id}'`
    ).then(({ rows: reservations }) => {
      response.json(reservations);
    });
  });

  router.get("/reservations", withAuth, (request, response) => {
    db.query(
      `SELECT *
      FROM reservations`
    ).then(({ rows: reservations }) => {
      response.json(reservations);
    });
  })
  // reservations.reduce(
  //   (previous, current) => ({ ...previous, [current.id]: current }),
  //   {}
  // )

  router.put("/reservations", (request, response) => {
    const { reservation_date, start_hour, start_minutes, end_hour, end_minutes, user_id, store_id } = request.body.appointmentData;
    db.query(
      `
      INSERT INTO reservations (reservation_date, start_hour, start_minutes, end_hour, end_minutes, user_id, store_id)
      VALUES ($1::date, $2::integer, $3::integer, $4::integer, $5::integer, $6::integer, $7::integer)
      `, [reservation_date, start_hour, start_minutes, end_hour, end_minutes, user_id, store_id]
      // ON CONFLICT (reservation_id)
      // UPDATE SET reservation_date = $1::date, start_hour = $2::integer, start_minutes = #3::integer, end_hour = $4::integer, end_minutes = $5::integer
    ).then(({ rows: reservations }) => {
      response.status(200).send('Your spot has been reserved');
    });
  })

  router.delete("/reservations/:id", (request, response) => {
    db.query(
      `DELETE FROM reservations
      WHERE reservation_id = $1::integer`,
      [request.params.id]
    ).then(() => {
      console.log(`Deleted reservation ${request.params.id}`);
      response.status(200).send('Your reservation has been deleted.');
    })
  });
  return router;
}
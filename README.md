# Meeting Room Booking API

Simple in-memory booking API implemented with Node.js and Express.

## Endpoints

- `POST /bookings`
  - Body: `{ "roomId": "A1", "startTime": "2026-01-25T10:00:00Z", "endTime": "2026-01-25T11:00:00Z" }`
  - Responses: `201` on success, `400` on validation errors, `409` on overlap.
- `DELETE /bookings/:id`
  - Responses: `204` on success, `404` if booking does not exist.
- `GET /rooms/:roomId/bookings`
  - Responses: `200` with a list of bookings for the room.

## Assumptions

- Only `startTime` is checked against the past; `endTime` can be in the past only if `startTime` is in the past.
- Timestamps are provided as ISO-8601 strings and returned in UTC ISO format.
- Bookings overlap when intervals intersect (`start < existingEnd && end > existingStart`).

## Run

```bash
npm install
npm start
```

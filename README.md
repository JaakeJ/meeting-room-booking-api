# Kokoushuoneiden varaus-API

Yksinkertainen muistissa toimiva varaus-API, toteutettu Node.js:llä ja Expressillä.

## Rajapinnat

- `POST /bookings`
  - Body: `{ "roomId": "A1", "startTime": "2026-01-25T10:00:00Z", "endTime": "2026-01-25T11:00:00Z" }`
  - Responses: `201` onnistui, `400` validointivirheissä, `409` päällekkäisyydessä.
- `DELETE /bookings/:id`
  - Responses: `204` onnistui, `404` jos varausta ei ole.
- `GET /rooms/:roomId/bookings`
  - Responses: `200` listaa huoneen varaukset.

## Oletukset

- Käyttäjä voi varata kuinka pitkän varauksen haluaakaan, oli se 1min tai 13h.
- Aikaleimat annetaan ISO-8601-merkkijonoina ja palautetaan UTC ISO -muodossa.
- Varaukset menevät päällekkäin kun aikavälit leikkaavat (`start < existingEnd && end > existingStart`).

## Ajo

```bash
npm install
npm start
```

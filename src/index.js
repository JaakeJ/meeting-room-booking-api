const express = require("express");
const {
  createBooking,
  deleteBooking,
  listBookingsByRoom,
  ValidationError,
  OverlapError,
  NotFoundError,
} = require("./storage");

const app = express();
app.use(express.json());

app.post("/bookings", (req, res, next) => {
  try {
    const booking = createBooking(req.body);
    res.status(201).json(booking);
  } catch (err) {
    next(err);
  }
});

app.delete("/bookings/:id", (req, res, next) => {
  try {
    deleteBooking(req.params.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

app.get("/rooms/:roomId/bookings", (req, res) => {
  const bookings = listBookingsByRoom(req.params.roomId);
  res.status(200).json(bookings);
});

app.use((err, req, res, next) => {
  if (err && err.type === "entity.parse.failed") {
    return res.status(400).json({ error: "Virheellinen JSON-syöte" });
  }

  if (err instanceof ValidationError) {
    return res.status(400).json({ error: err.message });
  }
  if (err instanceof OverlapError) {
    return res.status(409).json({ error: err.message });
  }
  if (err instanceof NotFoundError) {
    return res.status(404).json({ error: err.message });
  }

  console.error(err);
  return res.status(500).json({ error: "Odottamaton palvelinvirhe" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Meeting room booking API käynnissä portissa ${port}`);
});

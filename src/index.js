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

app.post("/bookings", (req, res) => {
  try {
    const booking = createBooking(req.body);
    res.status(201).json(booking);
  } catch (err) {
    if (err instanceof ValidationError) {
      res.status(400).json({ error: err.message });
      return;
    }
    if (err instanceof OverlapError) {
      res.status(409).json({ error: err.message });
      return;
    }
    res.status(500).json({ error: "Odottamaton palvelinvirhe" });
  }
});

app.delete("/bookings/:id", (req, res) => {
  try {
    deleteBooking(req.params.id);
    res.status(204).send();
  } catch (err) {
    if (err instanceof NotFoundError) {
      res.status(404).json({ error: err.message });
      return;
    }
    res.status(500).json({ error: "Odottamaton palvelinvirhe" });
  }
});

app.get("/rooms/:roomId/bookings", (req, res) => {
  const bookings = listBookingsByRoom(req.params.roomId);
  res.status(200).json(bookings);
});

app.use((err, req, res, next) => {
  if (err && err.type === "entity.parse.failed") {
    res.status(400).json({ error: "Virheellinen JSON-syöte" });
    return;
  }
  next(err);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Meeting room booking API käynnissä portissa port ${port}`);
});

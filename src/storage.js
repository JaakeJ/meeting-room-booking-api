const bookings = [];

class ValidationError extends Error {}
class OverlapError extends Error {}
class NotFoundError extends Error {}

let nextId = 1;

function parseDate(value) {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return null;
  }
  return parsed;
}

function toIsoString(date) {
  return new Date(date).toISOString();
}

function overlaps(startMs, endMs, existing) {
  return startMs < existing.endMs && endMs > existing.startMs;
}

function createBooking(payload) {
  const roomId = payload?.roomId;
  const startTime = payload?.startTime;
  const endTime = payload?.endTime;

  if (!roomId || !startTime || !endTime) {
    throw new ValidationError("Huone, aloitusaika ja lopetusaika ovat pakollisia");
  }

  const startDate = parseDate(startTime);
  const endDate = parseDate(endTime);
  if (!startDate || !endDate) {
    throw new ValidationError("Aloitusajan ja lopetusajan tulee olla kelvollisia ISO 8601 -aikaleimoja");
  }

  const startMs = startDate.getTime();
  const endMs = endDate.getTime();
  if (startMs >= endMs) {
    throw new ValidationError("Aloitusajan tulee olla ennen lopetusaikaa");
  }

  const nowMs = Date.now();
  const toleranceMs = 1000;

  if (startMs < nowMs - toleranceMs) {
    throw new ValidationError("Varaus ei voi alkaa menneisyydessä");
  }

  if (endMs < nowMs - toleranceMs) {
    throw new ValidationError("Varaus ei voi päättyä menneisyydessä");
  }

  const roomBookings = bookings.filter((booking) => booking.roomId === roomId);
  const hasOverlap = roomBookings.some((booking) => overlaps(startMs, endMs, booking));
  if (hasOverlap) {
    throw new OverlapError("Varaus menee päällekkäin toisen varauksen kanssa");
  }

  const booking = {
    id: String(nextId++),
    roomId,
    startMs,
    endMs,
    createdAt: new Date(),
  };

  bookings.push(booking);

  return {
    id: booking.id,
    roomId: booking.roomId,
    startTime: toIsoString(booking.startMs),
    endTime: toIsoString(booking.endMs),
    createdAt: toIsoString(booking.createdAt),
  };
}

function listBookingsByRoom(roomId) {
  return bookings
    .filter((booking) => booking.roomId === roomId)
    .sort((a, b) => a.startMs - b.startMs)
    .map((booking) => ({
      id: booking.id,
      roomId: booking.roomId,
      startTime: toIsoString(booking.startMs),
      endTime: toIsoString(booking.endMs),
      createdAt: toIsoString(booking.createdAt),
    }));
}

function deleteBooking(id) {
  const index = bookings.findIndex((booking) => booking.id === id);
  if (index === -1) {
    throw new NotFoundError("Varausta ei löytynyt");
  }
  bookings.splice(index, 1);
}

module.exports = {
  createBooking,
  deleteBooking,
  listBookingsByRoom,
  ValidationError,
  OverlapError,
  NotFoundError,
};

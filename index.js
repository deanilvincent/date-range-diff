module.exports = (firstDate, secondDate) => {
  if (!firstDate || !secondDate) {
    console.error("Firstdate & second date are empty.");
    return undefined;
  }

  if (!firstDate) {
    console.error("Empty first date.");
    return undefined;
  }

  if (!secondDate) {
    console.error("Empty second date.");
    return undefined;
  }

  const getDaysDiffBetweenDates =
    (new Date(firstDate) - new Date(secondDate)) / (1000 * 3600 * 24);

  if (getDaysDiffBetweenDates < 0) {
    console.error("Invalid date result. Negative value.");
    return "Invalid date result. Negative value.";
  }

  return getDaysDiffBetweenDates;
};

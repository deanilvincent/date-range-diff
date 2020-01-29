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

  firstDate = new Date(firstDate);
  secondDate = new Date(secondDate);

  const days = (firstDate - secondDate) / (1000 * 3600 * 24);

  if (firstDate < secondDate) {
    console.error("First date must be greater than second date.");
    return undefined;
  }

  return {
    days
  };
};

export const roundingNumber = (number: number) => {
  return Math.round(number);
};
export const degree = (number: number) => {
  return `${number}℃`;
};
export const getHours = (time: number) => {
  return new Date(time * 1000).getHours();
};

export const getTime = (time: number) => {
  const date = new Date(time * 1000);
  let hours = date.getHours().toString();
  let minutes = date.getMinutes().toString();
  if (hours.length === 1) {
    hours = `0${hours}`;
  }
  if (minutes.length === 1) {
    minutes = `0${hours}`;
  }
  return `${hours}:${minutes}`;
};

export const getWindDirection = (deg: number) => {
  if (deg > 15 && deg <= 75) {
    return "NE";
  } else if (deg > 75 && deg <= 105) {
    return "E";
  } else if (deg > 105 && deg <= 165) {
    return "SE";
  } else if (deg > 165 && deg <= 195) {
    return "S";
  } else if (deg > 195 && deg <= 255) {
    return "SW";
  } else if (deg > 255 && deg <= 285) {
    return "W";
  } else if (deg > 285 && deg <= 345) {
    return "NW";
  } else {
    return "N";
  }
};

export const getHumidityValue = (level: number) => {
  if (level <= 55) {
    return "Dry and comfortable";
  } else if (level > 55) {
    return "A bit uncomfortable, sticky feeling";
  } else {
    return "Lost moisture, uncomfortable air";
  }
};

export const getPop = (value: number): string => {
  if (value <= 0.33) {
    return "Low probability";
  } else if (value > 0.33 && value <= 0.66) {
    return "Moderate probability";
  } else {
    return "High probability";
  }
};

export const getVisibilityValue = (number: number): string => {
  if (number <= 50) {
    return "Dangerously foggy";
  } else if (number > 50 && number <= 500) {
    return "Expect heavy fog";
  } else if (number > 500 && number <= 2000) {
    return "Expect some fog";
  } else if (number > 2000 && number <= 9000) {
    return "Expect some haze";
  } else {
    return "Very clear day";
  }
};

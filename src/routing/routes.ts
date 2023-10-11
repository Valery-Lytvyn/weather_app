export const ROUTES = {
  index: "/",
  forecast: (coordinates: { lat: number; lon: number } | null) => {
    if (coordinates) {
      const { lat, lon } = coordinates;
      return `/forecast/${lat}/${lon}`;
    }
    return "/forecast/:lat/:lon";
  },
};

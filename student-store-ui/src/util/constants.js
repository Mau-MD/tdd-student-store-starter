export const categories = [
  { label: "All", value: "all" },
  { label: "Food", value: "food" },
  { label: "Clothing", value: "clothing" },
  { label: "Tech", value: "tech" },
  { label: "Accessories", value: "accessories" },
];

export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://codepath-store-api.herokuapp.com"
    : "http://localhost:3001";

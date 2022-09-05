import { quotes } from "./quotes";

export const categories = quotes.map(({ name }) => name);

export const getQuotesByCategory = (categoryName: string) => {
  const category = quotes.find(({ name }) => categoryName === name);
  return category ? category.quotes : [];
};

export const getRandomQuoteByCategory = (categoryName: string) => {
  const quotes = getQuotesByCategory(categoryName);
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};

export default quotes;

import quotes from "../data/quotes";

const defaultState = quotes[Math.floor(Math.random() * quotes.length)];
const quoteReducer = (state = defaultState, action) => {
  let newQuote;
  switch (action.type) {
    case "GET_QUOTE":
      do {
        newQuote = quotes[Math.floor(Math.random() * quotes.length)];
      } while (newQuote === state);
      return newQuote;
    default:
      return state;
  }
};

export default quoteReducer;

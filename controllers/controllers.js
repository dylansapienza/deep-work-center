const quotes = require('./quote_data.json');

function pickQuote() {
  return (quotes[Math.floor(Math.random() * quotes.length)]);
}

const quote = (req, res) => {
  res.send(pickQuote());
};

module.exports.quote = quote;

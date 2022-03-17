import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";

import App from "../components/app";

const app = express();
const port = 3000;

app.use(express.static("dist"));

app.get("/", (req, res) => {
  const initialMarkup = ReactDOMServer.renderToString(<App />);

  res.send(`
    <html>
      <head>
        <title>Sample React App</title>
      </head>
      <body>
        <div id="root">${initialMarkup}</div>
        <script src="/main.js"></script>
      </body>
    </html>
  `)
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
import "@babel/polyfill";
import { createServer } from "http";
import { execute, subscribe } from "graphql";

import app from "./server";
import connectDatabase from "./database";

import schema from "./schema";

(async () => {
  try {
    await connectDatabase();
  } catch (error) {
    console.log('teste')
    console.log("Could not connect to database", { error });
    throw error;
  }

  const server = createServer(app.callback());

  server.listen(5000, () => {
    return console.log(
      `SERVER ON: http://localhost:${process.env.PORT || 5000}/graphql`
    );
  });
})();

// let currentApp = app;

// if (module.hot) {
//   module.hot.accept('./index.js', () => {
//     app.removeListener('request', currentApp);
//     app.on('request', app);
//     currentApp = app;
//   });
// }

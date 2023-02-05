import express from 'express';

import { config } from "./configurations/config";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const stripe = require("stripe")(
    config.stripe.secretKey
);

const app = express();

app.listen(config.port, () => {
    console.log(`Express is listening at http://localhost:${config.port}`);
});

import express from 'express';

import confessionRouter from './routes/confession';

const app = express();

app.use("/confession", confessionRouter);

app.get("/", (req, res) => {
    res.send({ title: "Welcome to the Confession API" });
});

app.listen(PORT, () => {
    console.log(`subscription tracking api running on http://localhost: ${PORT}`);
});

export default app;

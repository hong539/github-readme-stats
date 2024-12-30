import dotenv from "dotenv";
import statsCard from "./api/index.js";
import repoCard from "./api/pin.js";
import langCard from "./api/top-langs.js";
import wakatimeCard from "./api/wakatime.js";
import gistCard from "./api/gist.js";
import express from "express";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log("PAT_1:", process.env.PAT_1);
});

app.get("/", statsCard);
app.get("/pin", repoCard);
app.get("/top-langs", langCard);
app.get("/wakatime", wakatimeCard);
app.get("/gist", gistCard);

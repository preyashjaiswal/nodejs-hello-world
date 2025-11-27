const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello from GitOps + ArgoCD + K3s!");
});

app.listen(3000, () => console.log("App running on port 3000"));

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (_, res) =>
  res.sendFile(path.join(__dirname, "client/build/index.html"))
);

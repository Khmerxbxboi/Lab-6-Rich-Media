app.post("/submit-score", async (req, res) => {
    const { name, score } = req.body;
    await pool.query("INSERT INTO leaderboard (name, score) VALUES ($1, $2)", [name, score]);
    res.sendStatus(200);
  });
  
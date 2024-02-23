const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());


const pool = mysql.createPool({
  connectionLimit: 10,
  host: "us-cdbr-east-06.cleardb.net",
  user: "b272999dd8f60e",
  password: "591d2506",
  database: "heroku_702bf14e05f0f6e"
});


app.use(express.static(path.resolve(__dirname, '../client/build')));

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }

  console.log('Connected to the database');

  connection.release();
});

app.get('/api/imaginantes', (req, res) => {
  pool.query("SELECT studentID, name, email, tasks, team  FROM user", (error, results, fields) => {
    if (error) {
      console.error('Error executing database query:', error);
      res.status(500).json({ error: 'Failed to execute database query' });
      return;
    }
    res.json(results);
  });
});

app.get('/api/imaginantes/:id', (req, res) => {
  const { id } = req.params;
  pool.query(`SELECT * FROM user WHERE studentID = ${id}`, (error, results, fields) => {
    if (error) {
      console.error('Error executing database query:', error);
      res.status(500).json({ error: 'Failed to execute database query' });
      return;
    }
    res.json(results);
  });
});

app.post('/api/imaginantes', (req, res) => {
  const { studentID, name, password, email, team } = req.body;
  const sql = `INSERT INTO user (studentID, name, password, email, tasks, team) VALUES (?, ?, ?, ?, 0, ?)`;
  const values = [studentID, name, password, email, team];

  pool.query(sql, values, (error, results, fields) => {
    if (error) {
      console.error('Error executing database query:', error);
      res.status(500).json({ error: 'Failed to execute database query' });
      return;
    }
    res.json({ message: 'El imaginante se ha agregado con exito' });
  });
});

app.delete('/api/imaginantes/:id', (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM user WHERE studentID = "${id}"`;

  pool.query(sql, (error, result) => {
    if (error) {
      console.error('Error executing database query:', error);
      res.status(500).json({ error: 'Failed to execute database query' });
      return;
    }
    console.log(`Deleted ${result.affectedRows} row(s)`);
    res.send(`El imaginante con el id: ${id} ha sido eliminado`);
  });
});

app.put('/api/imaginantes/:id', (req, res) => {
  const { studentID, name, password, email, tasks, team } = req.body;
  const { id } = req.params;

  const query = `UPDATE user SET name="${name}", password="${password}", email="${email}", team=${team} WHERE studentID="${studentID}";`;
  pool.query(query, (err, result) => {
    if (err) {
      console.error('Error executing database query:', err);
      res.status(500).json({ error: 'Failed to execute database query' });
      return;
    }
    res.send(`El imaginante con el id ${studentID} ha sido actualizado`);
  });
});

app.get('/api/assignments', (req, res) => {
  pool.query("SELECT * FROM assignment", (error, results, fields) => {
    if (error) {
      console.error('Error executing database query:', error);
      res.status(500).json({ error: 'Failed to execute database query' });
      return;
    }
    res.json(results);
  });
});

app.post('/api/assignments', (req, res) => {
  const { id, studentID, taskID, dueDate, initialDate } = req.body;
  const sql = `INSERT INTO assignment (id, studentID, taskID, status, dueDate, initialDate) VALUES (?, ?, ?, "Started", ?, ?)`;
  const values = [id, studentID, taskID, dueDate, initialDate];

  pool.query(sql, values, (error, results, fields) => {
    if (error) {
      console.error('Error executing database query:', error);
      res.status(500).json({ error: 'Failed to execute database query' });
      return;
    }
    res.json({ message: 'La asignación se ha agregado con exito' });
  });
});

app.delete('/api/assignments/:id', (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM assignment WHERE id = "${id}"`;

  pool.query(sql, (error, result) => {
    if (error) {
      console.error('Error executing database query:', error);
      res.status(500).json({ error: 'Failed to execute database query' });
      return;
    }
    console.log(`Deleted ${result.affectedRows} row(s)`);
    res.send(`La asignación con el id: ${id} ha sido eliminada`);
  });
});

app.put('/api/assignments/:id', (req, res) => {
  const { id, studentID, taskID, status, dueDate, initialDate } = req.body;
  const query = `UPDATE assignment SET studentID="${studentID}", taskID=${taskID}, status=${status},  dueDate="${dueDate}", initialDate="${initialDate}" WHERE id=${id}`;
  pool.query(query, (err, result) => {
    if (err) {
      console.error('Error executing database query:', err);
      res.status(500).json({ error: 'Failed to execute database query' });
      return;
    }
    res.send(`La asignación con el id ${id} ha sido actualizada`);
  });
});


/*  WIP///////WIP///////WIP////////WIP
app.get('/api/announcements', (req, res) => {
  pool.query("SELECT * FROM announcement", (error, results, fields) => {
    if (error) {
      console.error('Error executing database query:', error);
      res.status(500).json({ error: 'Failed to execute database query' });
      return;
    }
    res.json(results);
  });
});

app.post('/api/announcements', (req, res) => {
  const { id, content, createdAt } = req.body;
  const sql = `INSERT INTO announcement (id, content, createdAt) VALUES (?, ?, ?)`;
  const values = [id, content, createdAt];

  pool.query(sql, values, (error, results, fields) => {
    if (error) {
      console.error('Error executing database query:', error);
      res.status(500).json({ error: 'Failed to execute database query' });
      return;
    }
    res.json({ message: 'El Anuncio se ha agregado con exito' });
  });
});

app.delete('/api/announcements/:id', (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM announcement WHERE id = ${id}`;

  pool.query(sql, (error, result) => {
    if (error) {
      console.error('Error executing database query:', error);
      res.status(500).json({ error: 'Failed to execute database query' });
      return;
    }
    console.log(`Deleted ${result.affectedRows} row(s)`);
    res.send(`La asignación con el id: ${id} ha sido eliminada`);
  });
});
WIP///////WIP///////WIP////////WIP*/

app.get('/api/request', (req, res) => {
  pool.query("SELECT * FROM request", (error, results, fields) => {
    if (error) {
      console.error('Error executing database query:', error);
      res.status(500).json({ error: 'Failed to execute database query' });
      return;
    }
    res.json(results);
  });
});

app.get('/api/task', (req, res) => {
  pool.query("SELECT * FROM task", (error, results, fields) => {
    if (error) {
      console.error('Error executing database query:', error);
      res.status(500).json({ error: 'Failed to execute database query' });
      return;
    }
    res.json(results);
  });
});

app.post('/api/task', (req, res) => {
  const { id, name, decription } = req.body;
  const sql = `INSERT INTO task (id, name, decription) VALUES (?, ?, ?)`;
  const values = [id, name, decription];

  pool.query(sql, values, (error, results, fields) => {
    if (error) {
      console.error('Error executing database query:', error);
      res.status(500).json({ error: 'Failed to execute database query' });
      return;
    }
    res.json({ message: 'La tarea se ha agregado con exito' });
  });
});

app.get('/api/tasks', (req, res) => {
  pool.query("SELECT id, name FROM task;", (error, results, fields) => {
    if (error) {
      console.error('Error executing database query:', error);
      res.status(500).json({ error: 'Failed to execute database query' });
      return;
    }
    res.json(results);
  });
});

app.delete('/api/task/:id', (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM task WHERE id = ${id}`;

  pool.query(sql, (error, result) => {
    if (error) {
      console.error('Error executing database query:', error);
      res.status(500).json({ error: 'Failed to execute database query' });
      return;
    }
    console.log(`Deleted ${result.affectedRows} row(s)`);
    res.send(`La tarea con el id: ${id} ha sido eliminada`);
  });
});

app.put('/api/task/:id', (req, res) => {
  const { name, decription } = req.body;
  const { id } = req.params;
  const query = `UPDATE task SET name="${name}", decription="${decription}" WHERE id=${id}`;
  pool.query(query, (err, result) => {
    if (err) {
      console.error('Error executing database query:', err);
      res.status(500).json({ error: 'Failed to execute database query' });
      return;
    }
    res.send(`La tarea con el id ${id} ha sido actualizada`);
  });
});

app.get('/api/users', (req, res) => {
  pool.query("SELECT name, studentID FROM user;", (error, results, fields) => {
    if (error) {
      console.error('Error executing database query:', error);
      res.status(500).json({ error: 'Failed to execute database query' });
      return;
    }
    res.json(results);
  });
});

app.get('/api/requests0', (req, res) => {
  pool.query("SELECT * FROM request WHERE status=0", (error, results, fields) => {
    if (error) {
      console.error('Error executing database query:', error);
      res.status(500).json({ error: 'Failed to execute database query' });
      return;
    }
    res.json(results);
  });
});

app.get('/api/requests1', (req, res) => {
  pool.query("SELECT * FROM request WHERE status=1", (error, results, fields) => {
    if (error) {
      console.error('Error executing database query:', error);
      res.status(500).json({ error: 'Failed to execute database query' });
      return;
    }
    res.json(results);
  });
});

app.get('/api/requests2', (req, res) => {
  pool.query("SELECT * FROM request WHERE status=2", (error, results, fields) => {
    if (error) {
      console.error('Error executing database query:', error);
      res.status(500).json({ error: 'Failed to execute database query' });
      return;
    }
    res.json(results);
  });
});

app.put('/api/accept', (req, res) => {
  const { id } = req.body;
  const query = `UPDATE Assignment AS a1
  JOIN Request AS r ON r.assignmentID = a1.id
  JOIN Assignment AS a2 ON a2.id = r.assignmentResponseID
  SET a1.taskID = a2.taskID,
      a2.taskID = a1.taskID,
      r.status = 1
  WHERE r.status = 0 and r.id = ${id};`;
  pool.query(query, (err, result) => {
    if (err) {
      console.error('Error executing database query:', err);
      res.status(500).json({ error: 'Failed to execute database query' });
      return;
    }
    res.send(`Se ha aceptado la solicitud con el id ${id}`);
  });
});

app.put('/api/reject', (req, res) => {
  const { id } = req.body;
  const query = `UPDATE Request AS r
  SET r.status = 2
  WHERE r.status = 0 and r.id = ${id}`;
  pool.query(query, (err, result) => {
    if (err) {
      console.error('Error executing database query:', err);
      res.status(500).json({ error: 'Failed to execute database query' });
      return;
    }
    res.send(`Se ha rechazado la solicitud con el id ${id}`);
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

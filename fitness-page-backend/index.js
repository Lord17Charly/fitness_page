const express = require("express");
const sql = require("mssql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

const dbConfig = {
  user: "charlie",
  password: "Canicame2014",
  server: "localhost",
  database: "ContactDB",
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};
app.use(cors());
app.use(bodyParser.json());

app.post("/contact", async (req, res) => {
  const { nombre, email, mensaje } = req.body;

  try {
    const pool = await sql.connect(dbConfig);
    const query = `
      INSERT INTO Contactos (Nombre, Email, Mensaje) 
      VALUES (@nombre, @correo, @mensaje)
    `;
    await pool
      .request()
      .input("nombre", sql.NVarChar, nombre)
      .input("correo", sql.NVarChar, email)
      .input("mensaje", sql.NVarChar, mensaje)
      .query(query);

    res.status(200).json({ message: "Contacto guardado exitosamente" });
  } catch (error) {
    console.error("Error al guardar el contacto:", error);
    res.status(500).json({ message: "Error al guardar el contacto" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

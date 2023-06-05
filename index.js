const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("Hello world"));
app.get("/ping", (req, res) => res.send("Pong"));
app.get("/test", (req, res) => res.send("Ting"));

app.listen(port, () => console.log(`Server is listening on port ${port}`));

("use strict");

module.exports = function (app) {
  var jsonku = require("./controller");

  app.route("/").get(jsonku.index);

  app.route("/tampil").get(jsonku.tampilsemuavehicle);

  app.route("/tampil/:id").get(jsonku.tampilberdasarkanid);

  app.route("/tambah").post(jsonku.tambahVehicle);

  app.route("/ubah").put(jsonku.ubahVehicle);

  app.route("/hapus").delete(jsonku.hapusVehicle);

  app.route("/tampilmodelvehicle").get(jsonku.tampilgroupmodelvehicle);
};

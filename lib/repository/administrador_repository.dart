import 'dart:async';
import 'package:di/di.dart';

import 'package:postgresql/postgresql.dart' as pg;
import '../config/db_connection.dart';
import '../model/administrador.dart';

class AdministradorRepository {
  DbConnection connection;

  AdministradorRepository(this.connection);

  Future<Administrador> find(int id) async {
    Administrador administrador = (await connection.query('SELECT * FROM "administrador" WHERE id = @id', {'id': id})).map(mapRowToAdministrador).first;
    return administrador;
  }

  Future<List<Administrador>> findAll() async {
    return (await connection.query('SELECT * FROM "administrador"')).map(mapRowToAdministrador);
  }

  Administrador mapRowToAdministrador(pg.Row row) {
    return new Administrador()
      ..id = row.id
      ..nombre = row.nombre
      ..email = row.email
      ..telefono = row.telefono
      ..direccion = row.direccion;
  }
}

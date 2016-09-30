import 'dart:async';
import 'package:di/di.dart';

import 'package:postgresql/postgresql.dart' as pg;
import '../config/db_connection.dart';
import '../model/usuario.dart';

class UsuarioRepository {
  DbConnection connection;

  UsuarioRepository(this.connection);

  Future<Usuario> find(int id) async {
    Usuario usuario = (await connection.query('SELECT * FROM "usuario" WHERE id = @id', {'id': id})).map(mapRowToUsuario).first;
    return usuario;
  }

  Future<List<Usuario>> findAll() async {
    return (await connection.query('SELECT * FROM "usuario"')).map(mapRowToUsuario);
  }

  Usuario mapRowToUsuario(pg.Row row) {
    return new Usuario()
      ..id = row.id
      ..nick = row.nick
      ..passwd = row.passwd
      ..tipo = row.tipo;
  }
}

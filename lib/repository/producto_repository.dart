import 'dart:async';
import 'package:di/di.dart';

import 'package:postgresql/postgresql.dart' as pg;
import '../config/db_connection.dart';
import '../model/user.dart';

class ProductoRepository {
  DbConnection connection;

  ProductoRepository(this.connection);

  Future<Producto> find(int id) async {
    Producto producto = (await connection.query('SELECT * FROM "producto" WHERE id = @id', {'id': id})).map(mapRowToProducto).first;
    return producto;
  }

  Future<List<Producto>> findAll() async {
    return (await connection.query('SELECT * FROM "producto"')).map(mapRowToProducto);
  }

  User mapRowToProducto(pg.Row row) {
    return new Producto()
      ..id = row.id
      ..nombre = row.nombre
      ..categoria = row.categoria
      ..precio = row.precio;
  }
}
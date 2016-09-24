import 'dart:async';
import 'package:di/di.dart';

import 'package:postgresql/postgresql.dart' as pg;
import '../config/db_connection.dart';
import '../model/user.dart';

class UserRepository {
  DbConnection connection;

  UserRepository(this.connection);

  Future<User> find(int id) async {
    User user = (await connection.query('SELECT * FROM "user" WHERE id = @id', {'id': id})).map(mapRowToUser).first;
    return user;
  }

  Future<List<User>> findAll() async {
    return (await connection.query('SELECT * FROM "user"')).map(mapRowToUser);
  }

  User mapRowToUser(pg.Row row) {
    return new User()
      ..id = row.id
      ..firstName = row.first_name
      ..lastName = row.last_name
      ..email = row.email;
  }
}

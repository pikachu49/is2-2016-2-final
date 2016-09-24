import 'package:di/di.dart';

import 'db_connection.dart';
import '../repository/user_repository.dart';
import '../service/user_service.dart';
import '../rest/user_rest.dart';
import '../rest/hello_rest.dart';

var injector = new ModuleInjector([new Module()

  ..bind(DbConnection)

  // repositories
  ..bind(UserRepository)

  // services
  ..bind(UserService)

  // REST controllers
  ..bind(HelloRest)
  ..bind(UserRest)
]);

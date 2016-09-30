import 'package:di/di.dart';

import 'db_connection.dart';
import '../repository/user_repository.dart';
import '../repository/persona_repository.dart';
import '../repository/producto_repository.dart';

import '../service/user_service.dart';
import '../service/persona_service.dart';
import '../service/producto_service.dart';


import '../rest/user_rest.dart';
import '../rest/hello_rest.dart';
import '../rest/persona_rest.dart';
import '../rest/producto_rest.dart';

var injector = new ModuleInjector([new Module()

  ..bind(DbConnection)

  // repositories
  ..bind(UserRepository)
  ..bind(PersonaRepository)
  ..bind(ProductoRepository)

  // services
  ..bind(UserService)
  ..bind(PersonaService)
  ..bind(ProductoService)

  // REST controllers
  ..bind(HelloRest)
  ..bind(UserRest)
  ..bind(PersonaRest)
  ..bind(ProductoRest)
]);

import 'package:di/di.dart';

import 'db_connection.dart';
import '../repository/user_repository.dart';
import '../repository/persona_repository.dart';
import '../repository/usuario_repository.dart';


import '../service/user_service.dart';
import '../service/persona_service.dart';
import '../service/usuario_service.dart';


import '../rest/user_rest.dart';
import '../rest/hello_rest.dart';
import '../rest/persona_rest.dart';
import '../rest/usuario_rest.dart';

var injector = new ModuleInjector([new Module()

  ..bind(DbConnection)

  // repositories
  ..bind(UserRepository)
  ..bind(PersonaRepository)
  ..bind(UsuarioRepository)

  // services
  ..bind(UserService)
  ..bind(PersonaService)
  ..bind(UsuarioService)

  // REST controllers
  ..bind(HelloRest)
  ..bind(UserRest)
  ..bind(PersonaRest)
  ..bind(UsuarioRest)
]);

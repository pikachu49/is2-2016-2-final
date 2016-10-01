import 'package:di/di.dart';

import 'db_connection.dart';
import '../repository/user_repository.dart';
import '../repository/persona_repository.dart';
<<<<<<< HEAD
import '../repository/producto_repository.dart';

import '../service/user_service.dart';
import '../service/persona_service.dart';
import '../service/producto_service.dart';
=======
import '../repository/usuario_repository.dart';


import '../service/user_service.dart';
import '../service/persona_service.dart';
import '../service/usuario_service.dart';
>>>>>>> master


import '../rest/user_rest.dart';
import '../rest/hello_rest.dart';
import '../rest/persona_rest.dart';
<<<<<<< HEAD
import '../rest/producto_rest.dart';
=======
import '../rest/usuario_rest.dart';
>>>>>>> master

var injector = new ModuleInjector([new Module()

  ..bind(DbConnection)

  // repositories
  ..bind(UserRepository)
  ..bind(PersonaRepository)
<<<<<<< HEAD
  ..bind(ProductoRepository)
=======
  ..bind(UsuarioRepository)
>>>>>>> master

  // services
  ..bind(UserService)
  ..bind(PersonaService)
<<<<<<< HEAD
  ..bind(ProductoService)
=======
  ..bind(UsuarioService)
>>>>>>> master

  // REST controllers
  ..bind(HelloRest)
  ..bind(UserRest)
  ..bind(PersonaRest)
<<<<<<< HEAD
  ..bind(ProductoRest)
=======
  ..bind(UsuarioRest)
>>>>>>> master
]);

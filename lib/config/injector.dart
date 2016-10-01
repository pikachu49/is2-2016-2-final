import 'package:di/di.dart';

import 'db_connection.dart';

//import repository
import '../repository/user_repository.dart';
import '../repository/persona_repository.dart';
import '../repository/producto_repository.dart';
<<<<<<< HEAD
import '../repository/proveedor_repository.dart';
=======
>>>>>>> master
import '../repository/usuario_repository.dart';

//import service
import '../service/user_service.dart';
import '../service/persona_service.dart';
import '../service/producto_service.dart';
import '../service/proveedor_service.dart';
import '../service/usuario_service.dart';
<<<<<<< HEAD
=======
import '../service/producto_service.dart';

>>>>>>> master

//import rest
import '../rest/user_rest.dart';
import '../rest/hello_rest.dart';

import '../rest/persona_rest.dart';
import '../rest/producto_rest.dart';
<<<<<<< HEAD
import '../rest/proveedor_rest.dart';
import '../rest/usuario_rest.dart';

=======
import '../rest/usuario_rest.dart';
>>>>>>> master

var injector = new ModuleInjector([new Module()

  ..bind(DbConnection)

  // repositories
  ..bind(UserRepository)

  ..bind(PersonaRepository)
  ..bind(ProductoRepository)
<<<<<<< HEAD
  ..bind(ProveedorRepository)
  ..bind(UsuarioRepository)

=======
  ..bind(UsuarioRepository)
>>>>>>> master

  // services
  ..bind(UserService)

  ..bind(PersonaService)
  ..bind(ProductoService)
<<<<<<< HEAD
  ..bind(ProveedorService)
  ..bind(UsuarioService)

=======
  ..bind(UsuarioService)
>>>>>>> master

  // REST controllers
  ..bind(HelloRest)
  ..bind(UserRest)

  ..bind(PersonaRest)
  ..bind(ProductoRest)
<<<<<<< HEAD
  ..bind(ProveedorRest)
=======
>>>>>>> master
  ..bind(UsuarioRest)
]);

import 'package:di/di.dart';

import 'db_connection.dart';

//import repository
import '../repository/user_repository.dart';

import '../repository/persona_repository.dart';
import '../repository/producto_repository.dart';
import '../repository/proveedor_repository.dart';
import '../repository/usuario_repository.dart';
import '../repository/administrador_repository.dart';


//import service
import '../service/user_service.dart';

import '../service/persona_service.dart';
import '../service/producto_service.dart';
import '../service/proveedor_service.dart';
import '../service/usuario_service.dart';
import '../service/administrador_service.dart';



//import rest
import '../rest/user_rest.dart';
import '../rest/hello_rest.dart';

import '../rest/persona_rest.dart';
import '../rest/producto_rest.dart';
import '../rest/proveedor_rest.dart';
import '../rest/usuario_rest.dart';
import '../rest/administrador_rest.dart';


var injector = new ModuleInjector([new Module()

  ..bind(DbConnection)

  // repositories
  ..bind(UserRepository)

  ..bind(PersonaRepository)
  ..bind(ProductoRepository)
  ..bind(ProveedorRepository)
  ..bind(UsuarioRepository)
  ..bind(AdministradorRepository)


  // services
  ..bind(UserService)

  ..bind(PersonaService)
  ..bind(ProductoService)
  ..bind(ProveedorService)
  ..bind(UsuarioService)
  ..bind(AdministradorService)



 
  // rest
  ..bind(HelloRest)
  ..bind(UserRest)
  
  ..bind(PersonaRest)
  ..bind(ProductoRest)
  ..bind(ProveedorRest)
  ..bind(UsuarioRest)
  ..bind(AdministradorRest)

]);

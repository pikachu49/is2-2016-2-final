import 'dart:async';
import 'package:rpc/rpc.dart';

import '../service/administrador_service.dart';
import '../model/administrador.dart';

@ApiClass(name: 'administrador', version: 'v1', description: 'User server side API')
class AdministradorRest {
  AdministradorService administradorService;

  AdministradorRest(this.administradorService);

  @ApiMethod(path: 'administrador/{id}')
  Future<Administrador> getAdministrador(String id) {
    return administradorService.get(int.parse(id));
  }

  @ApiMethod(path: 'all')
  Future<List<Administrador>> getAdministradors() {
    return administradorService.getAll();
  }
}


export function handler (req, res, next) {
    
    var providerId = req.params.providerId;
    // Aqui se hace la consulta a la base de datos con el id
    // estoy suponiendo que ya nos devolvio la informacion
    var demoProvider = {
        id: providerId,
        name: 'Proveedor de prueba'
    }

    // ahora que ya tenemos la informacion se la enviamos al cliente
    res.status(200)
    res.json(demoProvider);
    res.end();
}
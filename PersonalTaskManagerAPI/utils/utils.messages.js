
const MessageResponse = (Response, code, data) => {

    let msgCode = 200;
    let msgDetail = '';
    let msgData = null;

    // Mensajes 100 **********************************
    if (String(code).charAt(0) === '1') {
        msgCode = 100;
        msgData = data;
        switch(code) {
            case 100:
                msgDetail = 'Bienvenido.';
                break;
            default:
                msgDetail = '';
                break;
        }
    }
    // Mensajes 200 **********************************
    if (String(code).charAt(0) === '2') {
        msgCode = 200;
        msgData = data;
        switch(code) {
            case 200:
                msgDetail = '';
                break;
            case 201:
                msgDetail = 'El registro ha sido creado exitosamente.';
                break;
            case 202:
                msgDetail = 'El registro ha sido actualizado existosamente.';
                break;
            case 203:
                msgDetail = 'El registro ha sido eliminado existosamente.';
                break;
            default:
                msgDetail = 'OK';
                break;
        }
    }
    // Mensajes 400 **********************************
    if (String(code).charAt(0) === '4') {
        msgCode = 400;
        switch(code) {
            case 400:
                msgDetail = 'Acceso Denegado.';
                break;
            case 401:
                msgDetail = 'El usuario y/o contraseña no son válidos.';
                break;
            case 402:
                msgDetail = 'Token inválido.';
                break;
            case 499:
                msgDetail = data;
                break;
            default:
                msgDetail = 'Denegado';
                break;
        }
    }
    // Mensajes 500 **********************************
    if (String(code).charAt(0) === '5') {
        msgCode = 500;
        switch(code) {
            case 500:
                msgDetail = data.message;
                break;
            default:
                msgDetail = 'Ha habido un problema con el servidor, por favor, intente de nuevo.';
                break;
        }
    }

    const msg = {
        _code: msgCode,
        _message: msgDetail,
        _data: msgData
    };

    return Response.status(msgCode).json(msg);
}

module.exports.MessageResponse = MessageResponse;
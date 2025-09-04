import { Request, RequestHandler, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';



interface ICidade {
    nome: string;
    estado: string;
}

const bodyValidation = yup.object<ICidade>().shape({
    nome: yup.string().required().min(3),
    estado: yup.string().required().min(3),
});

interface Ifilter {
    filter?: string //campo não obrigatório
}
const queryValidation = yup.object<ICidade>().shape({
    filter: yup.string().required().min(3),
});

export const createBodyValidator: RequestHandler = async (req, res, next) => {//middleware 
 try {
   await bodyValidation.validate(req.body, {abortEarly: false})
   return next()// no index de routes, pede para rodar o próximo da fila (create nesse caso) se a informação for aceita pelos critérios anteriores
  } catch (error) {
    const yupError = error as yup.ValidationError;
    const validateErrors: Record<string, string> = {};// um objeto vazio que precisa receber uma chave string e um valor para a chave, também string 

    yupError.inner.forEach(error => {
        error.message //mensagem do erro
        if (error.path === undefined) return; //caminho do erro; se não há um path, não valida erro para devolver para o front
        validateErrors[error.path] = error.message;
    });//lista de validation errors, agrupa as mensagens para mandar para o front

    return res.status(StatusCodes.BAD_REQUEST).json({
        errors: validateErrors,
    })
  }
}

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => { // só será executado se passar pela validação
    



    console.log(req.body);



    return res.send('Create!');
};
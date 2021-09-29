// Aqui os objetos são apenas instanciados e repassados para a camada de infraestrutura para ser executado
// 
import { Request, Response } from "express";
// importar conexão com o banco de dados

export class serviceController{
    // adicionar métodos asyncronos que irão retornar/criar os dados
    public async getService(req: Request, res: Response): Promise<Response> {
        // retorna alguma coisa
        return 
    }

    public async addService(req: Request, res: Response): Promise<Response>{
        // adicionar um cliente ao banco de dados
        return
    }
}
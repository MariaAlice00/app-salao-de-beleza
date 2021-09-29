// Aqui os objetos são apenas instanciados e repassados para a camada de infraestrutura para ser executado
// 
import { Request, Response } from "express";
// importar conexão com o banco de dados

export class inventoryController{
    // adicionar métodos asyncronos que irão retornar/criar os dados
    public async getInventory(req: Request, res: Response): Promise<Response> {
        // retorna alguma coisa
        return 
    }

    public async addInventory(req: Request, res: Response): Promise<Response>{
        // adicionar um cliente ao banco de dados
        return
    }
}
import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;

    try {
      const user = this.turnUserAdminUseCase.execute({
        user_id: user_id?.toString(),
      });

      return response.json(user);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message });
      }
      console.log(error);
      return response.status(500).json({ error: "Internal server Error" });
    }
  }
}

export { TurnUserAdminController };

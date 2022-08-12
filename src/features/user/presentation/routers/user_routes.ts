import express, { Request, Response } from "express";
import admin from "../../../../shared/middlewares/admin_middleware";
import protect from "../../../../shared/middlewares/auth_middleware";
import GetDistributorsUseCase from "../../domain/use_cases/get_distributors";

export default function userRouter(
  getDistributors: GetDistributorsUseCase = new GetDistributorsUseCase()
) {
  const router = express.Router();

  router.get(
    "/distributors",
    protect,
    admin,
    async (req: Request, res: Response) =>
      res.status(200).json(await getDistributors.call())
  );

  return router;
}

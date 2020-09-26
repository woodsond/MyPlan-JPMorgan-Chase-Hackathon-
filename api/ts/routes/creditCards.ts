import { Request, Response } from 'express';

export const creditCards = async (req: Request, res: Response) => {
  res.status(200).send({ message: "Hello!" });
};
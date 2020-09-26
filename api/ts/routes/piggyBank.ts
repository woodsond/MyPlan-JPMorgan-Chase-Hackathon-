import { Request, Response } from 'express';

export const piggyBank = async (req: Request, res: Response) => {
  res.status(200).send({ message: "piggyBank stub" });
};
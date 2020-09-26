import { Request, Response } from 'express';

export const articles = async (req: Request, res: Response) => {
  res.status(200).send({ message: "articles stub" });
};
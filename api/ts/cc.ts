import { Request, Response } from 'express';

export const cc = async (req: Request, res: Response) => {
  //before submitting, make it use the API
  
  res.status(200).send({ message: "Hello!" });
};
import { Request, Response } from "express";
import fetch from "node-fetch";

const MAX_PAGES: number = 146;

const ccStackKey: string = process.env.CCSTACK_KEY || "";
const ccStackUrl: string = process.env.CCSTACK_URL || "";

// We investigated querying this, but the way CCStack's API work is incredibly slow.
export const creditCards = async (_: Request, res: Response) => {
  const result: Array<any> = new Array<any>();
  for (let i: number = 1; i < MAX_PAGES; ++i) {
    const current = await fetch(`${ccStackUrl}/v1/discover/cards?api_key=${ccStackKey}&page=${i}`, {
      method: 'GET',
    });
    result.push(current);
  }
  res.status(200).send(result);
};

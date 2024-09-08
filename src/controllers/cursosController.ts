import express, { Request, Response } from 'express'

const informacionGeneral = (req: Request, res: Response) => {
    res.json({ msg: "Esta página esta protegida" });
}

export {
    informacionGeneral
}
import { Request, Response } from "express";

export const getUsers = (req: Request, res: Response) => {
  const users = [
    { id: 1, nombre: "Juan" },
    { id: 2, nombre: "María" }
  ];
  res.json(users);
};

export const createUser = (req: Request, res: Response) => {
  const { nombre } = req.body;
  const nuevoUsuario = { id: Date.now(), nombre };
  res.status(201).json(nuevoUsuario);
};

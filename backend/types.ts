/*
This file needs to be updated for the need of the exam (if needed, else remove it).
*/

import { Request } from "express";

interface AuthenticatedUser {
  username: string;
  token: string;
}

interface User {
  id: number;
  username: string;
  password: string;
}

type PotentialUser = Omit<User, "id">;

interface AuthenticatedRequest extends Request {
  user?: User;
}

interface JwtPayload {
  username: string;
  exp: number; // Expiration time (in seconds since the epoch)
  iat: number; // Issued at time (in seconds since the epoch)
}

//add required interface for the exam

export type {
  AuthenticatedUser,
  User,
  PotentialUser,
  AuthenticatedRequest,
  JwtPayload,
  //add required interface export for the exam
};

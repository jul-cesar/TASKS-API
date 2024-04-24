import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { addMemberToTeam, createTeam } from "../services/teams-services";

export const postTeam = async (req: Request, res: Response) => {
  try {
    const response = await createTeam(req.body);
    res.send(response);
  } catch (error) {
    handleHttp(res, 403, "there was an error creating the team", error);
  }
};

export const addMember = async (req: Request, res: Response) => {
  const idUser = req.params.idUser;
  const idTeam = req.params.idTeam;
  try {
    const response = await addMemberToTeam(idUser, idTeam);
    res.send(response);
  } catch (error) {
    handleHttp(
      res,
      403,
      "there was an error adding a member to the team",
      error
    );
  }
};
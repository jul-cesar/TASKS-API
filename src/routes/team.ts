import { Router } from "express";
import { addMember, postTeam,  teamInfo,  userTeams } from "../controllers/team";

export const router = Router();

router.post("/", postTeam);
router.post("/addmember/:idUser/:idTeam", addMember);
router.get("/:idUser", userTeams);
router.get("/", teamInfo)

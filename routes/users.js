import express from "express"
import { updateUser, createUser, deleteUser, getUser, getUsers} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/VerifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next)=>{
// res.send("Hello user, you are logged in")
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next)=> {
//     res.send("Hello user, you are logged in and you can delete")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next)=> {
//     res.send("Hello user, you are logged as Admin in and you can delete")
// })

//CREATE
router.post("/", verifyUser, createUser)
//UPDATE
router.put("/:id", verifyUser, updateUser)
//DELETE
router.delete("/:id", verifyUser, deleteUser)
//GET
router.get("/:id",verifyUser, getUser)
//GET ALL
router.get("/",verifyAdmin, getUsers)

export default router;
import { Router } from "express";


const router = Router();

router.post("/auth-google", async (req, res) => {
    console.log("google auth");
    res.send("Google Auth");
})

export default router;
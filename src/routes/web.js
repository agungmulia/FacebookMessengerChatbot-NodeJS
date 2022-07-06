import express from "express";
import homepageController from "../controllers/homepageController";
import chatBotController from "../controllers/chatBotController";

let router = express.Router();

let initWebRoutes = (app)=> {
    router.get("/", homepageController.getHomepage);
    router.get("/webhook", chatBotController.getWebhook);
    router.get("/profile", homepageController.getFacebookUserProfile);
    router.get("/messages", chatBotController.getMessages);
    router.get("/messages/:id", chatBotController.getMessagesById);
    router.get("/summary", chatBotController.getSummary);

    router.post("/webhook", chatBotController.postWebhook);
    router.post("/set-up-user-fb-profile",homepageController.setUserFacebookProfile)

    
    return app.use("/", router);
};

module.exports = initWebRoutes;
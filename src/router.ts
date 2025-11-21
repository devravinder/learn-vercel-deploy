import { Elysia } from "elysia";

const chatRouter = new Elysia({ prefix: "/api" });

chatRouter
.get("/", () => "Hello World "+process.env.APP_VERSION);


export default chatRouter;

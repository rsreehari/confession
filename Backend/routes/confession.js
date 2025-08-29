import { Router } from "express";

const confessionRouter = Router();

confessionRouter.get("/",(req , res) => {
    res.send({title :"see  confession"})});

confessionRouter.post("/",(req , res) => {
    res.send({title :"ADD confession"})
});

confessionRouter.get("/:id",(req , res) => {
    res.send({title :"USER  confession"})});

confessionRouter.put("/",(req , res) => {
    res.send({title :"UPDATE confession"})});

confessionRouter.delete("/",(req , res) => {
    res.send({title :"DELETE confession"})});

export default confessionRouter;
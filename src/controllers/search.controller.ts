import { Request, Response } from "express";
import { setActiveMenu } from "../helpers/active-menu";
import { PetModel } from "../models/pet";

export const search = (req: Request, res: Response) => {
    const query: string = req.query.q as string;
    const pets = PetModel.findAllByName(query);

    if(query.trim() === "") {
        res.redirect('/');
        return;
    }

    res.render('pages/page', {
        menu: setActiveMenu(''),
        pets,
        query
    });
}
import { Request, Response } from "express";
import { setActiveMenu } from '../helpers/active-menu';
import { PetModel } from '../models/pet';

export const home = (req: Request, res: Response) => {
    const pets = PetModel.findAll();

    res.render('pages/page', {
        menu: setActiveMenu('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        pets
    });
}

export const dogs = (req: Request, res: Response) => {
    const pets = PetModel.findAllByType('dog');

    res.render('pages/page', {
        menu: setActiveMenu('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        pets
    });
}

export const cats = (req: Request, res: Response) => {
    const pets = PetModel.findAllByType('cat');

    res.render('pages/page', {
        menu: setActiveMenu('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        pets
    });
}

export const fishes = (req: Request, res: Response) => {
    const pets = PetModel.findAllByType('fish');

    res.render('pages/page', {
        menu: setActiveMenu('fish'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        pets
    });
}
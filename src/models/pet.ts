import { pets, Pet, PetType } from "../api/pets";

export const PetModel = {
    findAll: (): Pet[] => {
        return pets;
    },

    findAllByType(type: PetType): Pet[]{   
        return pets.filter(item => item.type === type);
    },
    
    findAllByName(name: string): Pet[]{
        return pets.filter(item => {
            return item.name.toUpperCase().indexOf(name.toUpperCase()) > -1;
        });
    }
}
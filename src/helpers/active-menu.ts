type ActiveMenuType = '' | 'all' | 'dog' | 'cat' | 'fish';

interface ActiveMenuOptions {
    all: boolean,
    dog: boolean,
    cat: boolean,
    fish: boolean,
}

export const setActiveMenu = (activeMenu: ActiveMenuType) : ActiveMenuOptions=> {
    const options = {
        all: false,
        dog: false,
        cat: false,
        fish: false,
    };

    if (activeMenu !== '') {
        options[activeMenu] = true;
    }

    return options;
}
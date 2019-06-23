const UIContainer = require('../UIContainer');
const UIElement = require('../UIElement');



function listElementsInContainers(containers, uiElements=null, verbose=false) {
    if (!(uiElements && typeof uiElements === "object" && !Array.isArray(uiElements))) {
        uiElements = {};
        uiElements = new Proxy(uiElements, {
            get(target, p) {
                if(!(p in target)) target[p] = new Map();
                return target[p];
            }
        })
    }

    if (Array.isArray(containers)) {
        containers.forEach(container => {
            
            listElementsInContainers(container, uiElements, verbose);
        });
    } else {
        const container = containers;
        if (container instanceof UIContainer) {
            if (verbose) console.log(`UIContainer{ id:${container.id}, class:${container.constructor.name} }`);
            container.items.forEach((elem, key) => {
                if (elem instanceof UIContainer) {
                    listElementsInContainers(elem, uiElements, verbose);
                    uiElements[elem.constructor.name].set(elem.id, elem);
                } else if (elem instanceof UIElement) {
                    if (verbose) console.log(`UIElement{ id:${elem.id}, class:${elem.constructor.name} }`);
                    uiElements[elem.constructor.name].set(elem.id, elem);
                } else {
                    throw new Error(`Invalid item{ class:${elem.constructor.name} } in UIContainer{ id:${container.id} }`);
                }
            });
        } else {
            throw new Error(`Argument "container" is not a UIContainer`);
        }
    }
    return uiElements;
}

module.exports =  { listElementsInContainers };
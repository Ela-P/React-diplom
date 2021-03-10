


const apiCallMapping = (action) => {
    const mapping ={

    };

    if (!mapping.hasOwnProperty(action.type)) {
        throw 'Not mapped action';
    }

    return mapping[action.type];
};

export default apiCallMapping;
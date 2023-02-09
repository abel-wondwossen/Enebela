import React from 'react';

const MealsContext=React.createContext ({
    items:[],
    totalamount:0,
    addItem: (item) => {},
    removeItem: (id) => {}

})

export default MealsContext;
import React, { createContext } from 'react';

export default createContext({
    names: ['John', 'Jack', 'James'],
    numbers: [10, 20, 30, 40],
    addName: name => {},
    addNumber: number => {}
});

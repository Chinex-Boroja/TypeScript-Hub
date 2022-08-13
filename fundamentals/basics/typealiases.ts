type StringOrNumber = string | number;

type PersonObject = {
    name: string;
    id: StringOrNumber;
};

const person5: PersonObject = {
    name: 'John',
    id: 1,
};

const person6: PersonObject = {
    name: 'Delia',
    id: 2
};

const sayHello1 = (person: PersonObject) => {
    return 'Hi' + person.name;
}

const sayGoodbye = (person: PersonObject) => {
    return 'Seeya ' + person.name;
}
// Primitives: number, string, boolean

import { faUnsorted } from "@fortawesome/free-solid-svg-icons";

//Primitives
let age: number;
age = 12.5;

let userName: string;
userName = "Max";
let isInstructor: boolean;
isInstructor = true;

let hobbies: null;
//More complex types
let hobbies1: string[];
hobbies1 = ["gym", "car"];

type Person = {
    name: string;
    age: number;
};

let person: Person;

person = {
    name: "Max",
    age: 43
}

let people: Person[];

// type inference
let course: string | number = "React - complete Guide";

course = 123;

//Functions and types
function add(a: number, b: number) {
    return a + b;
}

function print(value: any) {
    console.log(value)
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, 6);
//updatedArray[0].split("");
import { getHumans } from './main.js'

//👉 Write your tests below here:

test('getHumans function takes in an array and return a personfile', () => {
    const entryList = [
        {personfile: {name: "Dani$l", city: "Zombieville", bloodType:"OZ-negative"}},
        {personfile: {name:"Andrea", city:"Austin", bloodType:"O-positive"}},
        {personfile: {name:"Pablo", city:"Mexico City", bloodType:"AB-positive"}},
        {personfile: {name:"Gary", city:"Zombieville", bloodType:"AB-positive"}},
        {personfile: {name:"Peter", city:"London", bloodType:"AZ-positive"}},
        {personfile: {name:"V1ct@r", city:"Zurich", bloodType:"OZ-positive"}},
        ]
    const actual = getHumans(entryList);
    const expected = [
        {personfile: {name:"Andrea", city:"Austin", bloodType:"O-positive"}},
        {personfile: {name:"Pablo", city:"Mexico City", bloodType:"AB-positive"}},
    ]
    expect(actual).toStrictEqual(expected);
   
})


test('getHumans function takes in an empty array & return an empty array', () => {
    const entryList = []
    const actual = getHumans(entryList);
    const expected = []
    expect(actual).toStrictEqual(expected);
   
})


test('getHumans function takes in an array full of zombies & returns empty array', () => {
    const entryList = [
        {personfile: {name: "L0z", city: "Birmingham", bloodType:"OZ-negative"}},
        {personfile: {name: "Dani$l", city: "Zombieville", bloodType:"OZ-negative"}},
        {personfile: {name:"Andre@", city:"Austin", bloodType:"O-positive"}},
        {personfile: {name:"Pablo", city:"Mexico City", bloodType:"ABZ-positive"}},
        {personfile: {name:"Gary", city:"Zombieville", bloodType:"AB-positive"}},
        {personfile: {name:"Peter", city:"London", bloodType:"AZ-positive"}},
        {personfile: {name:"V1ct@r", city:"Zurich", bloodType:"OZ-positive"}},
        ]
    const actual = getHumans(entryList);
    const expected = []
    expect(actual).toStrictEqual(expected);
   
})


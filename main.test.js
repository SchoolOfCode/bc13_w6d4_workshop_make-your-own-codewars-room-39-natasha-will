import { getHumans } from './main.js'

//👉 Write your tests below here:
//[
// {personfile: {name: "Dani$l", city: "Zombieville", blood-type:"OZ-negative"}},
// {personfile: [{name:"Andrea"}, {city:"Austin"}, {blood-type:"O-positive"}]},
// {personfile: [{name:"Pablo"}, {city:"MexicoDF"}, {blood-type:"AB-positive"}]},
// {personfile: [{name:"V1ct@r"}, {city:"Zurich"}, {blood-type:"OZ-positive"}],
// ]

test('humasOnly function take in an array and return property without symbols or Z', () => {
    const entryList = [
        {personfile: {name: "Dani$l", city: "Zombieville", bloodType:"OZ-negative"}},
        {personfile: [{name:"Andrea"}, {city:"Austin"}, {bloodType:"O-positive"}]},
        {personfile: [{name:"Pablo"}, {city:"Mexico City"}, {bloodType:"AB-positive"}]},
        {personfile: [{name:"V1ct@r"}, {city:"Zurich"}, {bloodType:"OZ-positive"}]},
        ]
    const actual = getHumans(entryList);
    const expected = [
        {personfile: [{name:"Andrea"}, {city:"Austin"}, {bloodType:"O-positive"}]},
        {personfile: [{name:"Pablo"}, {city:"Mexico City"}, {bloodType:"AB-positive"}]},
    ]
    expect(actual).toStrictEqual(expected);

})
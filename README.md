# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @lukechamberland/lotide`

**Require it:**

`const _ = require('@lukechamberland/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual()`: Asserts if two arrays are equal
* `assertEqual()`: Asserts if two (primitive) values are equal
* `assertObjectEqual()`: Asserts if two objects are equal
* `countLetters()`: Returns the number of occurances for a character in a given string as a property value
* `countOnly()` : Returns the count of a specified array and an object
* `eqArrays()` : Checks if the two given arrays are equal
* `eqObjects()` : Checks if two objects are equal
* `findKey()` : Returns first key of an object that returns a truthy value, using a callback. Returns undefined if no value is given
* `findKeyByValue()` : Returns the first key that equals a given value, if no key can be found, undefined is returned
* `flatten()` : Returns a single array when given a nested array
* `head()` : Returns the first element in a given array
* `letterPositions()` : Returns an object of each character of a object as a key and the value is the index of where in the string the element was located
* `map()` : Returns a new array using a callback
* `middle()` : Returns the middle element of an array, one element for an odd number of array elements and two if the array contains an even number of elements
* `tail()` : Returns everything in given array except the first element
* `takeUntil()` : Returns an array without the beggining until the callback returns a truthy value
* `without()` : Takes in two arrays and removes the contents of the second array from the first array, and then returns the first array
# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @nx915/lotide`

**Require it:**

`const _ = require('@nx915/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: get a new array that is only the first element
* `tail(...)`: get a new array that excludes the first element
* `middle(...)`: get the middle element or 2 elements in an array
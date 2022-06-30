# [algo/increment-array] Increment Array

## **Table of contents**

1. [Instructions](#instructions)
2. [Approach](#approach)
3. [Code](#the-code)
4. [Summary](#in-summary)
## Instructions

Write an ***increment() function  that takes only one array as parameter*** and returns the incremented array.

```typescript
function increment(array: Array<number>): Array<number> {
    ...some beautiful code...
}
```

## Approach

- 🧐 Analyze the input and the output of the function
- ✏️ Write on the paper (yes we can 🤫) all the main steps that manage the input before return keyword
- ⏱ Define the chronology (what do I treat in first/last)
- 👨🏽‍💻 Let's write some code 

## The code



If you want to navigate to the code, view the [sandbox](https://codesandbox.io/s/increment-array-yblr5d)

In first, I have to choose the best language. But, with a view to achieving the [Frontend Test](https://github.com/fulll/developers/tree/master/Frontend), I prefer to work with [Typescript](https://www.typescriptlang.org).

My function should `iterate through the given array` with starting from the end because the last element represents the units.

The only operation is to add 1 to this units. 

>[1, 2, 3] where **3 is the units**.
>3 becomes 4.

So, in this case, the function returns the array [1, 2, 4].

It's the end 🎉🏆🥳.

But, in the case of [9, 9], 9 becomes 10. 🥵

>It means [9, 10]

Ahhhhh! It's not enough!

So, in first, the function should `check if the number is 9`. And if this is the case, the 9 is replace by 0.

In the first loop, the returned array is `[9, 0]`.

The second loop the number is checked and returns `[0, 0]`.

In this state, the thing to do is to `insert 1 at the begining of array` with the ***unshift()*** method.

The index of element is ***very important*** ⚠︎ because the only condition to insert 1 at the first place and replace 9 to 0 is `if the number is 9 and if its index is 0`.

The returned array is `[1, 0, 0]`. Great! 👏👏👏

## In summary: 

1. Loop from the last array's element.
2. Check if the number is not 9 and add 1 to it and break the loop.
3. If is 9 and the index is not 0, change 9 to 0.
4. If is 9 and the index is 0, change 9 to 0 and insert 1 at the start of array.



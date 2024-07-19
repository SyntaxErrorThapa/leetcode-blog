import { Router } from "express";

const questions = {
  easy: [
    {
      questionNo: 1,
      subdescription: "Basic Math",
      description: "Write a function to add two numbers.",
      explanation:
        "The function should take two numbers as input and return their sum.",
      coding: `function add(a, b) {
    return a + b;
  }`,
    },
    {
      questionNo: 2,
      subdescription: "String Manipulation",
      description: "Write a function to reverse a string.",
      explanation:
        "The function should take a string as input and return the reversed string.",
      coding: `function reverseString(str) {
    return str.split('').reverse().join('');
  }`,
    },
    {
      questionNo: 3,
      subdescription: "Looping",
      description: "Write a function to print numbers from 1 to 10.",
      explanation:
        "The function should use a loop to print numbers from 1 to 10.",
      coding: `function printNumbers() {
    for (let i = 1; i <= 10; i++) {
      console.log(i);
    }
  }`,
    },
    {
      questionNo: 4,
      subdescription: "Array Operations",
      description:
        "Write a function to check if an array contains a given element.",
      explanation:
        "The function should take an array and an element as input and return true if the element is in the array, otherwise return false.",
      coding: `function containsElement(arr, elem) {
    return arr.includes(elem);
  }`,
    },
    {
      questionNo: 5,
      subdescription: "Basic Math",
      description: "Write a function to subtract one number from another.",
      explanation:
        "The function should take two numbers as input and return their difference.",
      coding: `function subtract(a, b) {
    return a - b;
  }`,
    },
    {
      questionNo: 6,
      subdescription: "String Manipulation",
      description: "Write a function to convert a string to uppercase.",
      explanation:
        "The function should take a string as input and return the string in uppercase.",
      coding: `function toUpperCase(str) {
    return str.toUpperCase();
  }`,
    },
    {
      questionNo: 7,
      subdescription: "Looping",
      description: "Write a function to print the first n even numbers.",
      explanation:
        "The function should take a number n as input and print the first n even numbers.",
      coding: `function printEvenNumbers(n) {
    for (let i = 0; i < n; i++) {
      console.log(2 * i);
    }
  }`,
    },
    {
      questionNo: 8,
      subdescription: "Basic Math",
      description: "Write a function to multiply two numbers.",
      explanation:
        "The function should take two numbers as input and return their product.",
      coding: `function multiply(a, b) {
    return a * b;
  }`,
    },
  ],
  medium: [
    {
      questionNo: 1,
      subdescription: "Array Operations",
      description: "Write a function to find the maximum element in an array.",
      explanation:
        "The function should take an array as input and return the maximum element in the array.",
      coding: `function findMax(arr) {
    return Math.max(...arr);
  }`,
    },
    {
      questionNo: 2,
      subdescription: "Sorting",
      description:
        "Write a function to sort an array of numbers in ascending order.",
      explanation:
        "The function should take an array of numbers as input and return the sorted array.",
      coding: `function sortArray(arr) {
    return arr.sort((a, b) => a - b);
  }`,
    },
    {
      questionNo: 3,
      subdescription: "Recursion",
      description: "Write a function to calculate the factorial of a number.",
      explanation:
        "The function should use recursion to calculate the factorial of a number.",
      coding: `function factorial(n) {
    if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  }`,
    },
  ],
  hard: [
    {
      questionNo: 1,
      subdescription: "Dynamic Programming",
      description: "Write a function to find the nth Fibonacci number.",
      explanation:
        "The function should use dynamic programming to find the nth Fibonacci number.",
      coding: `function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n];
  }`,
    },
    {
      questionNo: 2,
      subdescription: "Graph Algorithms",
      description:
        "Write a function to perform a depth-first search on a graph.",
      explanation:
        "The function should take a graph and a starting node as input and perform a depth-first search.",
      coding: `function dfs(graph, start, visited = new Set()) {
    visited.add(start);
    console.log(start);
    for (let neighbor of graph[start]) {
      if (!visited.has(neighbor)) {
        dfs(graph, neighbor, visited);
      }
    }
  }`,
    },
    {
      questionNo: 3,
      subdescription: "String Matching",
      description:
        "Write a function to implement the Knuth-Morris-Pratt string matching algorithm.",
      explanation:
        "The function should take two strings, text and pattern, and return the starting index of the pattern in the text or -1 if the pattern is not found.",
      coding: `function kmpSearch(text, pattern) {
    function buildLPS(pattern) {
      let lps = Array(pattern.length).fill(0);
      let len = 0;
      let i = 1;
      while (i < pattern.length) {
        if (pattern[i] === pattern[len]) {
          len++;
          lps[i] = len;
          i++;
        } else {
          if (len !== 0) {
            len = lps[len - 1];
          } else {
            lps[i] = 0;
            i++;
          }
        }
      }
      return lps;
    }
  
    let lps = buildLPS(pattern);
    let i = 0;
    let j = 0;
    while (i < text.length) {
      if (pattern[j] === text[i]) {
        i++;
        j++;
      }
      if (j === pattern.length) {
        return i - j;
      } else if (i < text.length && pattern[j] !== text[i]) {
        if (j !== 0) {
          j = lps[j - 1];
        } else {
          i++;
        }
      }
    }
    return -1;
  }`,
    },
  ],
};

const router = Router();

router.get("/question", (req, res) => {
  res.json({ questions: questions });
});

router.post("/question", (req, res) => {
  try {
    console.log(req.body);
    res.status(201).json({ message: "Question added successfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

export default router;

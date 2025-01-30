# Incorrect Null Handling in Addition Function

This repository demonstrates a common bug in JavaScript related to incorrect handling of null values in a function.

The `foo` function is supposed to add two numbers. However, it incorrectly handles null values by returning 0, which may lead to unexpected behavior in applications. The solution shows how to correctly handle null values, either by throwing an error or by providing a default value.

## Bug

The bug lies in the `foo` function's handling of null values.  When either `a` or `b` is null, the function returns 0. A better approach would either throw an error or treat null as 0 in addition.

## Solution

The solution demonstrates how to correctly handle null values.  It uses the nullish coalescing operator (`??`) to provide a default value of 0 if a parameter is null or undefined.  Alternatively, an error could be thrown for better error handling.
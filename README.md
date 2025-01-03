# Uncommon JavaScript Error: TypeError: Cannot read properties of undefined (reading 'length')

This repository demonstrates a common yet often overlooked JavaScript error: `TypeError: Cannot read properties of undefined (reading 'length')`.  This error arises when attempting to access the `length` property of a variable that holds `undefined`. 

The `bug.js` file contains the erroneous code, while `bugSolution.js` provides the corrected version.

**Understanding the Error**

The error occurs because JavaScript's `undefined` value does not possess properties such as `length`.  Attempting to access `undefined.length` directly results in the `TypeError`. This situation often arises when dealing with optional parameters or asynchronous operations where a value might not be properly initialized or returned before being used.

**Solution**

The solution involves explicitly checking if the variable is `undefined` before attempting to access its `length` property.  This check prevents the error by providing an alternative path of execution when the variable is not defined or does not have the expected value.
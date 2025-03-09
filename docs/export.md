#  `export` keyword

before we define what `export` means, let's look at an example without prior knowledge of it's meaning.

to export a constant, variable, function, class, from an esmoduule, simply add the keyword `export` before the declaration.

`math.js`

```javascript
export const PI = Math.PI;

export function degreesToRadians(d) { return d * PI / 180; }

export class Circle {
    constructor(r) { this.r = r; }
    area() { return PI * this.r * this.r; }
}
```

`main.js`

```javascript
import { PI, degreesToRadians, Circle } from './math.js';

const c = new Circle(4.5);
console.log(c.area());
```

###  `export default`

anonymous default export, however accessible by calling `import name from './

using a default export for an object that contains multiple members can simplify imports by avoiding the need to call a function to access those members.


`math.js`

```javascript
export default function () {
    const PI = Math.PI;
    function degreesToRadians(d) { return d * PI / 180; }
    class Circle {
        constructor(r) { this.r = r; }
        area() { return PI * this.r * this.r; }
    }

    return { PI, degreesToRadians, Circle };
}
```

`main.js`

```javascript
import p_math from './math.js';

const { PI, degreesToRadians, Circle } = p_math();

const c = new Circle(4.5);
console.log(c.area());
```

as an alternative to scattering `export` keywords through your module

you can define your constants, variables, functions, and classes as you normally would, with no `export` statement, and then at the end of the module write a single `export` statement that declares exactly what is exported in a single place.

with a comma separated lits of identifiers within curly braces, you can make public the identifiers in a single line.

`math.js`

```javascript
const PI = Math.PI;

function degreesToRadians(d) { return d * PI / 180; }

class Circle {
    constructor(r) { this.r = r }
    area() { return PI * this.r * this.r; }

}

export { PI, degreesToRadians, Circle };
```

`main.js`

```javascript
import { PI, degreesToRadians, Circle } from './math.js';

const c = new Circle(4.5);
console.log(c.area());
```

this is also legal, but inefficient and stupid.

`math.js`

```javascript
const PI = Math.PI;

function degreesToRadians(d) { return d * PI / 180; }

class Circle {
    constructor(r) { this.r = r }
    area() { return PI * this.r * this.r; }

}

export PI;
export degreesToRadians;
export Circle;
```

`main.js`

```javascript
import { PI, degreesToRadians, Circle } from './math.js';

const c = new Circle(4.5);
console.log(c.area());
```

```javascript
//  main.js
import * as math from './math.js';

const c = new math.Circle(4.5);
console.log(c.area());
```

`public` access modifier in cpp is similar to this concept, where you can allow access from other outside modules to access the `public` members of a class, vs the `private` members.


`myFunc.js`

```javascript
//  no semicolon is needed
export default function () {...}
```

`main.js`

```javascript
//  no curly braces are needed because it is the default export
import myFunc from 'myFunc';
myFunc();
```


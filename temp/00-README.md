#  morgan bergen

`globals.css`  

contains global styles and theme variables.  

```css
/*  imports for theme setup */
@import "tailwindcss";
@plugin "tailwindcss-animate";
@custom-variant dark (&:is(.dark * ));

@theme inline {...}

/* light mode */
:root {...}

.dark {...}

@layer base {...}
```
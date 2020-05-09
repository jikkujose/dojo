# 03 - Mandelbrot Set

This challenge is to create the [Mandelbrot set][wp].

Time frame : 48 hours

# Mandelbrot Set

Mandelbrot set is the set of numbers on the complex plane that is obtained from the recurrence equation.

```
 z(n+1) = z(n)^2+ c 
```

In short it is the set of complex numbers that converge (that doesn't go to infinity) when the above equation is repeatedly applied to the number.

Our goal is to create a visual representation of the Mandelbrot set. 
Clicking on any part of the image should zoom into that point and render the set at that magnification.

## Notes

* For simplicity we can settle for double precision instead of arbitrary precision.
* Minimum Requirement : A monochrome version of the Mandelbrot set with the capability to zoom in on the selected part of the canvas.


## Instructions

1. Use standard prettier config (if JS like languages are used)
2. Preferably a web-based solution that can be shared via a URL. 

[wp]: https://simple.wikipedia.org/wiki/Mandelbrot_set

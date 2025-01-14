// permutations 30

noise(5)
.colorama(.1)
.modulate(noise(.001, [0.001, 0.0015].smooth()),0.25)
.diff(src(o0).rotate(10, .3).mult(shape(4), 2), 100)
.modulateScrollX(osc(.8,2,4))
.scale(1.05)
.out()

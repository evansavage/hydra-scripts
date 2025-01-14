// permutations 30

noise(5)
.colorama(.1)
//.modulateScrollX(
//.modulateRotate(src(o0).rotate(0, 52), 0.02).mult(shape(2), 0.008)
//.repeat(10,5).mult(shape(360).scale(()=>Math.sin(time*0.1)), 0.8).rotate(0, 0.02)
//.modulateScale(src(o0).rotate(1, 52), .02)
.modulate(noise(.001, [0.001, 0.0015].smooth()),0.25)
.diff(src(o0).rotate(10, .3).mult(shape(4), 2), 100)
.modulateScrollX(osc(.8,2,4))
.scale(1.05)
.out()

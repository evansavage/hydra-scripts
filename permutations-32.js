speed =0.5

s0.initVideo("https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWVpOGh6Z2JxeWNtYnU1cHV2dDd3dmw2cTlrZHE1ZHRsMXF2aWt0dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3KWwtAwhyg6r8pTXc7/giphy.mp4")
src(s0).scale(1).modulate(noise(5)).modulateKaleid(osc(20,.05,0),[2,1.5,3,0.9].smooth()).modulateScale(osc(10, .2, .3)).scale(2).out(o0)

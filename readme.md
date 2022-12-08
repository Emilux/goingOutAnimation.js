<h1 align="center"> goingOutAnimation.js </h1>

goingOutAnimation.js is a simple script that let you animate an element(s) when his no longer into/onto another element

## Install

Download the goingOutAnimation.js or goingOutAnimation.min.js and load it in your html file.

```html

<script src="goingOutAnimation.min.js"></script>
```

## Get started

### Initialize goingOutAnimation.js

To use goingOutAnimation.js first just call the function goingOutAnimation.

For example whenever the user scroll on the window :

```html

<script>
    // Init the animation for the first time
    goingOutAnimation()
    
    // On scroll
    window.addEventListener('scroll', goingOutAnimation)
</script>
```

### basic configuration

The basic configuration is to add the data-overlap and data-target data attribut to the element that will be animated
when he go in or out the chosen container.

For example :

```html

<div style="height: 200vh">
    <p style="position: fixed" class="target" data-overlap="overlap" data-target="target">My animated element</p>
    <div class="overlap" style="height: 50%;">My container</div>
</div>
```

**data-overlap** is always the class of the container element

**data-target** is the class of the animated element(s)

And here we go, we have our basic goingOutAnimation.js animation, now with our example when we scroll down and the
paragraph go out of the div#overlap he change to dark and when he go back in he turn transparent.

### Classes usage

All goingOutAnimation.js will do is add ```in-container``` when the target is inside the container and ```out-container``` when his outside.







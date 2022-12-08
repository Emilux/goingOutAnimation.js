<h1 align="center"> goingOutAnimation.js </h1>

goingOutAnimation.js is a simple script that let you animate an element(s) when his no longer into/onto another element

## Install

Download the goingOutAnimation.js or [goingOutAnimation.min.js](https://github.com/Emilux/goingOutAnimation.js/releases/tag/1.1.0) and load it in your html file.

```html

<script src="goingOutAnimation.min.js"></script>
```

## Get started

### Initialize goingOutAnimation.js

To use goingOutAnimation.js first just call the class goingOutAnimation.

For example whenever the user scroll on the window :

```html

<script>
    // Init the class
    const goingOutAnimation = new GoingOutAnimation(goingOutParams)

    // Init the animation for the first time
    goingOutAnimation.run()
    
    // On scroll
    window.addEventListener('scroll', goingOutAnimation.run)
</script>
```

### basic configuration

#### HTML
```html
<div style="height: 200vh">
    <p style="position: fixed" class="target">My target element</p>
    <div class="overlap" style="height: 200px;">My container</div>
</div>
```
#### JS
```html
<script>
    const goingOutParams = {
        selector : '.target',
        containers: [
            {
                selector:'.overlap'
            },
        ]
    }

    const goingOutAnimation = new GoingOutAnimation(goingOutParams)
    
    goingOutAnimation.run()
    window.addEventListener('scroll', () => goingOutAnimation.run() )
</script>
```

In this example we have a container with the class `overlap` and the target with the class
`target`. goingOutAnimation will check if the target is in or out of the container.

For this example we pass a config object to our instance.
Our config is stocked in the constant `goingOutParams`.

### Config properties

- **selector** _[required]_ in this property we specify the target element css selector
- **containers** _[required]_ is an array of objects and is used to define the different containers property, if we have different type of container
  - **selector** _[required]_ in this property we specify the container element css selector
  - **id** in this property we specify an identifier for the container it is used to generate unique in-container class when this container is overlapped.

As you can see you can add multiple container element, it's useful if you want to be more precise on the style of your target depending on which container he is overlapping

### Classes usage


All goingOutAnimation.js will do is add ```in-container``` when the target is inside the container and ```out-container``` when his outside.

With multiple containers specified in the config properties goingOutAnimation.js also add ```in-container-<container.id>``` when the target overlap different container.






<h1 align="center"> goingOutAnimation.js </h1>

goingOutAnimation.js is a simple script that let you animate an element(s) when his no longer into/onto another element

## Install

Download the goingOutAnimation.js or goingOutAnimation.min.js and load it in your html file.

```html

<script src="goingOutAnimation.min.js"></script>
```

You will need to implement the [animate.js](https://animejs.com/) library if you want goingOutAnimation.js to work. You
can download it from the animate.js github [here](https://github.com/juliangarnier/anime/)
or use the CDN.

```html

<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"
        integrity="sha512-z4OUqw38qNLpn1libAN9BsoDx6nbNFio5lA6CuTp9NlK83b89hgyCVq+N5FdBJptINztxn1Z3SaKSKUS5UP60Q=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

## Get started

### Initialize goingOutAnimation.js

To use goingOutAnimation.js first just call the function goingOutAnimation.

For example whenever the user scroll on the window :

```html

<script>
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
    <div id="overlap" style="height: 50%;">My container</div>
</div>
```

**data-overlap** is always the ID of the container element

**data-target** is the class of the animated element(s)

with just that basic configuration by default the color style of the animated element(s) will be white (_color :
#ffffff_) when he go in the container and dark (_color : #222222_) when he go out the container.

And here we go, we have our basic goingOutAnimation.js animation, now with our example when we scroll down and the
paragraph go out of the div#overlap he change to dark and when he go back in he turn white.

## More options

With goingOutAnimation.js you have more possible configuration than the basics one.

You can add more data attributes to your animated element :

<ul>
    <li>
        data-option="css_property_name"
        <ul>
            <li>
                **required** :
                data-in-option="css_property_value"
            </li>
            <li>
                **required** :
                data-out-option="css_property_value"
            </li>
        </ul>
    </li>
</ul>

### Data option attribute

The ``data-option`` attribute let you specify the css property that
you want to be animated. He need to be used with ``data-in-option``
and ``data-out-option``.

``data-in-option`` : let you specify the css property value when the element go in the container

``data-out-option`` : let you specify the css property value when the element go out the container






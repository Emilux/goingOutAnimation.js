/**
 * Provides the overlapping status between two elements
 * based on the passed in Element objects
 *
 * @return {Boolean} overlap status or null if native object not received
 * @param e1
 * @param e2
 */
const isOverlapping = (e1, e2) => {
    if (e1.length && e1.length > 1) {
        e1 = e1[0];
    }
    if (e2.length && e2.length > 1){
        e2 = e2[0];
    }
    const rect1 = e1 instanceof Element ? e1.getBoundingClientRect() : false;
    const rect2 = e2 instanceof Element ? e2.getBoundingClientRect() : false;

    let overlap = false;

    if (rect1 && rect2) {
        overlap = !(
            rect1.right < rect2.left ||
            rect1.left > rect2.right ||
            rect1.bottom < rect2.top ||
            rect1.top > rect2.bottom
        );
        return overlap;
    }

    console.warn('Please provide valid HTMLElement object');
    return overlap;
}

/**
 * Animation on element going out of another element
 */
const goingOutAnimation = () => {
    let element = document.querySelectorAll('*[data-overlap]')
    element.forEach( (a,i) => {
        let dataOverlap = a.dataset.overlap
        let dataTarget = a.dataset.target

        if (dataOverlap){
            if (dataTarget){
                let elementOverlap = isOverlapping(a,document.querySelector(`.${dataOverlap}`));
                let arrayClass = a.className.split(' ')
                let findInContainer = arrayClass.findIndex((e)=> e === 'in-container')
                let findOutContainer = arrayClass.findIndex((e)=> e === 'out-container')
                if (elementOverlap && findInContainer === -1){
                    a.classList.add("in-container");
                    if (findOutContainer > -1){
                        a.classList.remove("out-container");
                    }
                }

                if (!elementOverlap && findOutContainer === -1){
                    a.classList.add("out-container");
                    if (findInContainer > -1){
                        a.classList.remove("in-container");
                    }
                }

            } else console.error('no target element given')
        } else console.error('no overlap element given')
    })
}

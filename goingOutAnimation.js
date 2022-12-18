class GoingOutAnimation {
    constructor(config) {
        this.selector = {elements:document.querySelectorAll(config.selector)};
        this.containers = config.containers;
    }

    /**
     * Run the GoingOutAnimation system using config parameters
     */
    run() {
        if (this.selector.elements) {
            this.selector.elements.forEach( (target,i) => {
                if (this.containers) {
                    const elementOverlap = this.containers.filter((container) => {
                        const {selector} = container
                        const overlapElements = document.querySelectorAll(selector)
                        if (overlapElements) {
                            return [...overlapElements].find((element) => {
                                const isOverlapping = this.isOverlapping(target,element)
                                // Remove class if no more overlapping
                                if (!isOverlapping)
                                    target.classList.remove(`in-container-${container.id}`)

                                return isOverlapping
                            })
                        }
                        return false;
                    })

                    this.selector.attributes = {
                        ...this.selector.attributes,
                        [i] : {
                        target:target,
                        overlappingElements:elementOverlap,
                        isInContainer:elementOverlap && elementOverlap.length > 0,
                        isOutContainer:!elementOverlap || elementOverlap.length === 0,
                        }
                    }

                    this.toggleElementClasses(this.selector.attributes[i])
                }

            })
        }
    }

    /**
     * Add or remove target elements in-container/out-container classes
     * @param element
     */
    toggleElementClasses(element) {
        if (element.isInContainer){
            this.inElementClasses(element)
        } else  {
            this.outElementClasses(element)
        }
    }

    /**
     * Add target elements in-container classes
     * @param element
     */
    inElementClasses(element) {
        const dataTargetClassList  = element.target.classList
        dataTargetClassList.add("in-container");
        dataTargetClassList.remove("out-container");
        element.overlappingElements.forEach((element) => {
            if (element.id) {
                dataTargetClassList.add(`in-container-${element.id}`)
            }
        })
    }

    /**
     * Add target elements out-container classes
     * And remove all in-container classes
     * @param element
     */
    outElementClasses(element) {
        const dataTargetClassList  = element.target.classList
        dataTargetClassList.add("out-container");
        dataTargetClassList.remove("in-container");
    }



    /**
     * Provides the overlapping status between two elements
     * based on the passed in Element objects
     *
     * @return {Boolean} overlap status or null if native object not received
     * @param e1
     * @param e2
     */
    isOverlapping (e1, e2){

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
            if (overlap)
                console.log(this.selector.attributes)
            return overlap;
        }

        console.warn('Please provide valid HTMLElement object');
        return overlap;
    }
}

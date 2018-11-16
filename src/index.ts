/**
 * hello-world component for A-Frame.
 */
import {Coordinate} from "aframe";

AFRAME.registerComponent('hello-world', {
    schema: {
        rotationSpeed: {
            default: 2
        }
    },

    /**
     * Set if component needs multiple instancing.
     */
    multiple: false,

    /**
     * Called once when component is attached. Generally for initial setup.
     */
    init: function () {
    },

    /**
     * Called when component is attached and when component data changes.
     * Generally modifies the entity based on the data.
     */
    update: function (oldData) {
    },

    /**
     * Called when a component is removed (e.g., via removeAttribute).
     * Generally undoes all modifications to the entity.
     */
    remove: function () {
    },

    /**
     * Called on each scene tick.
     */
    tick: function (time: number, timeDelta: number) {
        if (this.isPlaying) {
            const rotation: Coordinate = this.el.getAttribute('rotation');
            const newRotation = {...rotation};
            newRotation.x += this.data.rotationSpeed;
            newRotation.z += this.data.rotationSpeed;
            this.el.setAttribute('rotation', newRotation);
        }
    },

    /**
     * Called when entity pauses.
     * Use to stop or remove any dynamic or background behavior such as events.
     */
    pause: function () {
    },

    /**
     * Called when entity resumes.
     * Use to continue or add any dynamic or background behavior such as events.
     */
    play: function () {
    }
});

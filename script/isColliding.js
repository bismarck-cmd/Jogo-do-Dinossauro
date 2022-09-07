export function isColliding(fisrtElement, secondElement) {
    const fisrtElementBounds = fisrtElement.getBoundingClientRect();
    const secondElementBounds = secondElement.getBoundingClientRect();

    return !(
        ((fisrtElementBounds.top + fisrtElementBounds.height) < (secondElementBounds.top)) ||
        (fisrtElementBounds.top > (secondElementBounds.top + secondElementBounds.height)) ||
        ((fisrtElementBounds.left + fisrtElementBounds.width) < secondElementBounds.left) ||
        (fisrtElementBounds.left > (secondElementBounds.left + secondElementBounds.width))
    );
}
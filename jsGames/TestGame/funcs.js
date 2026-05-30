export function setupControls() {
    const keys = {
        left: false,
        right: false,
        up: false,
        down: false
    };

    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft") keys.left = true;
        if (e.key === "ArrowRight") keys.right = true;
        if (e.key === "ArrowUp") keys.up = true;
        if (e.key === "ArrowDown") keys.down = true;
    });

    document.addEventListener("keyup", (e) => {
        if (e.key === "ArrowLeft") keys.left = false;
        if (e.key === "ArrowRight") keys.right = false;
        if (e.key === "ArrowUp") keys.up = false;
        if (e.key === "ArrowDown") keys.down = false;
    });

    return keys;
}
export function getPlayerXPos(id) {
    const div = document.getElementById(id);
    const left = getComputedStyle(div).left;
    console.log("x Position" + "(" + id + ")" + left);
    return parseInt(left)
}
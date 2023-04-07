export const getParent = (index) => {
    return Math.floor((index - 1) / 2);
}

export const getLeftChild = (index) => {
    return (2 * index + 1);
}

export const getRightChild = (index) => {
    return (2 * index + 2);
}
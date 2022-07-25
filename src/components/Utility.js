export const getExercises = async () => {
    const tasks = await fetch('tasks.json');
    return tasks.json();
};

export const deselectInput = (ref) => {
    const findCheckedInput = ref.current.querySelector('input:checked');

    if (findCheckedInput) {
        findCheckedInput.checked = false;
    }
}

export const deselectAllInput = () => {
    const findCheckedInput = document.querySelector('input:checked');

    if (findCheckedInput) {
        findCheckedInput.checked = false;
    }
}
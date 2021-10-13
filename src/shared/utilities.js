const convertDate = (date) => {

    const dateOfBirth = new Date(date);
    const y = dateOfBirth.getFullYear();
    const m = dateOfBirth.getMonth() + 1;
    const d = dateOfBirth.getDate();

    return (
        `${d}.${m}.${y}.`
    )
}

export { convertDate }
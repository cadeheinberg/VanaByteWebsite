export const formatDate = (dateString) => {
    const date = new Date(dateString);
    // const timeOptions = {
    //     hour: 'numeric',
    //     minute: 'numeric',
    //     hour12: true,
    // };
    // const formattedTime = new Intl.DateTimeFormat('en-US', timeOptions).format(date);
    const dateOptions = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    };
    const formattedDate = new Intl.DateTimeFormat('en-US', dateOptions).format(date);
    return `${formattedDate}`;
    // return `${formattedTime}, ${formattedDate}`;
};
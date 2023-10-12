

export const getHeightnWidth = (data: string) => {
    const match = data.match(/(\d+)x(\d+)/);
    if (match) {
        const width = parseInt(match[1], 10);
        const height = parseInt(match[2], 10);
        return { width, height };
    }
    return null;
};




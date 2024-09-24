export const default_mc_uuids = ['069a79f4-44e9-4726-a5be-fca90e38aaf5', 'f498513c-e8c8-4773-be26-ecfc7ed5185d'];

export const getPlayerHeadUrl = (uuid) => {
    if (!uuid) {
        return `https://crafatar.com/avatars/069a79f4-44e9-4726-a5be-fca90e38aaf5`;
    }
    return `https://crafatar.com/avatars/${uuid}`;
};
const default_profile = '/default_profile.png'

export const default_mc_uuids = ['069a79f4-44e9-4726-a5be-fca90e38aaf5', 'f498513c-e8c8-4773-be26-ecfc7ed5185d'];

export const getPlayerHeadUrl = (mc_uuid) => {
    if (!mc_uuid) {
        return default_profile;
    }
    return `https://crafatar.com/avatars/${mc_uuid}`;
};
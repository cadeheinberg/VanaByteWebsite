const default_profile = '/default_profile.png'

export const default_mc_uuids = ['069a79f4-44e9-4726-a5be-fca90e38aaf5', 'f498513c-e8c8-4773-be26-ecfc7ed5185d'];

export const getProfilePicture = (profile) => {
    if (!profile) {
        return default_profile;
    }
    if (profile[0] !== '/') {
        return `https://crafatar.com/avatars/${profile}`;
    } else {
        //try to get it from file system in future
        return default_profile;
    }

};
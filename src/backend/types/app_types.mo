import MopsMusicIds "../mops_music_ids";

module AppTypes {

    public type Producer = {

    };

    public type Composer = {

    };

    public type Library = {
        
    };

    public type Track = {
        id: MopsMusicIds.TrackId;
        name: Text;
        producers: [Ids.PrincipalId];
        releaseDate: Int;
    };

    public type Bars = {

    };

    public type Album = {
        tracks: [Track];
    };
};
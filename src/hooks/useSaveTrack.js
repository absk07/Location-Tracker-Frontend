import { useContext } from "react";
import { Context as TrackContext } from "../context/tracksContext";
import { Context as LocationContext } from "../context/locationContext";

export default () => {
    const { createTracks } = useContext(TrackContext);
    const { state: { name, locations } } = useContext(LocationContext);

    const saveTrack = () => {
        createTracks(name, locations);
    };

    return [saveTrack];
};
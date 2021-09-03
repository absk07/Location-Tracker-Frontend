import React, { useContext } from 'react';
import Spacer from './spacer';
import { Input, Button } from 'react-native-elements';
import { Context as LocationContext } from '../context/locationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
    const { state: { name, recording, locations }, startRecording, stopRecording, changeName } = useContext(LocationContext);
    const [saveTrack] = useSaveTrack();
    // console.log(locations.length)
    return (
        <>
            <Spacer>
                <Input 
                    value={name}
                    onChangeText={changeName}
                    placeholder="Enter Name" 
                />
                {recording
                    ? <Button title="Stop Recording" onPress={stopRecording} />
                    : <Button title="Start Recording" onPress={startRecording} />
                }
            </Spacer>
            <Spacer>
                {!recording && locations.length
                    ? <Button title="Save Recording" onPress={saveTrack} />
                    : null
                }
            </Spacer>
        </>
    );
};

export default TrackForm;
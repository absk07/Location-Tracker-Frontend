import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import Spacer from '../components/spacer';
import { NavigationEvents } from 'react-navigation';
import { Context as TrackContext } from '../context/tracksContext';
import { FontAwesome } from '@expo/vector-icons';

const TrackListScreen = ({ navigation }) => {
    const { state, fetchTracks } = useContext(TrackContext);
    // console.log(state);

    return (
        <>
            <NavigationEvents onWillFocus={fetchTracks} />
            {/* <Spacer>
                <Text style={{ fontSize: 45 }}>Your Tracks</Text>
            </Spacer> */}
            <FlatList
                data={state}
                keyExtractor={item => item._id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity>
                            <Spacer>
                                {/* <ListItem chevron title={item.name} /> */}
                                <ListItem
                                    onPress={() => navigation.navigate('TrackDetail', { _id: item._id })}
                                >
                                    <ListItem.Content>
                                        <ListItem.Title>{item.name}</ListItem.Title>
                                    </ListItem.Content>
                                    <ListItem.Chevron/>
                                </ListItem>
                            </Spacer>
                        </TouchableOpacity>
                    )
                }}
            />
        </>
    );
};

TrackListScreen.navigationOptions = {
    title: 'My Tracks'
};

const styles = StyleSheet.create({});

export default TrackListScreen;
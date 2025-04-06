import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from '../redux/store';
import {Provider} from 'react-redux';
import MainTabNavigator from '../navigation/MainTabNavigator';
import WelcomeScreen from '../navigation/WelcomeScreen';
import SetailedInfoScreen from '../screens/SetailedInfoScreen';
import {TouchableOpacity, Text} from 'react-native';
import ChevronBackSvg from '../assets/svg/ChevronBackSvg.tsx';
import {useNavigation} from '@react-navigation/native';
import NewObjectScreen from '../screens/NewObjectScreen';
import FiltersScreen from '../screens/FiltersScreen';
import ReadMoreScreen from '../screens/ReadMoreScreen';
import SettingsScreen from '../screens/SettingsScreen';
import GameProccesScreen from '../screens/GameProccesScreen';
import LoseScreen from '../screens/LoseScreen';

const Stack = createStackNavigator();

function CustomHeaderLeft() {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 10}}>
            <ChevronBackSvg />
            <Text style={{color: 'white', marginLeft: 5, fontSize: 16}}>Back</Text>
        </TouchableOpacity>
    );
}

export default function WhiteMain() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Welcome">
                        <Stack.Screen
                            name="Welcome"
                            component={WelcomeScreen}
                            options={{headerShown: false}}
                        />
                        <Stack.Screen
                            name="Main"
                            component={MainTabNavigator}
                            options={{headerShown: false}}
                        />
                        <Stack.Screen
                            name="SetailedInfo"
                            component={SetailedInfoScreen}
                            options={{
                                headerStyle: {
                                    backgroundColor: '#053362',
                                },
                                headerLeft: () => <CustomHeaderLeft />,
                                headerTitle: '',
                            }}
                        />
                        <Stack.Screen
                            name="NewObject"
                            component={NewObjectScreen}
                            options={{
                                headerStyle: {
                                    backgroundColor: '#053362',
                                },
                                headerLeft: () => <CustomHeaderLeft />,
                                headerTitle: '',
                            }}
                        />
                        <Stack.Screen
                            name="Filters"
                            component={FiltersScreen}
                            options={{
                                presentation: 'modal',
                                headerStyle: {
                                    backgroundColor: '#053362',
                                },
                                headerLeft: () => <CustomHeaderLeft />,
                                headerTitle: '',
                            }}
                        />
                        <Stack.Screen
                            name="Settings"
                            component={SettingsScreen}
                            options={{
                                headerStyle: {
                                    backgroundColor: '#053362',
                                },
                                headerLeft: () => <CustomHeaderLeft />,
                                headerTitle: '',
                            }}
                        />
                        <Stack.Screen
                            name="ReadMore"
                            component={ReadMoreScreen}
                            options={{
                                headerStyle: {
                                    backgroundColor: '#053362',
                                },
                                headerLeft: () => <CustomHeaderLeft />,
                                headerTitle: '',
                            }}
                        />
                        <Stack.Screen
                            name="GameProcces"
                            component={GameProccesScreen}
                            options={{
                                headerStyle: {
                                    backgroundColor: '#053362',
                                },
                                headerLeft: () => <CustomHeaderLeft />,
                                headerTitle: '',
                            }}
                        />
                        <Stack.Screen
                            name="Lose"
                            component={LoseScreen}
                            options={{
                                headerStyle: {
                                    backgroundColor: '#053362',
                                },
                                headerLeft: () => <CustomHeaderLeft />,
                                headerTitle: '',
                                headerShown: false,
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
}

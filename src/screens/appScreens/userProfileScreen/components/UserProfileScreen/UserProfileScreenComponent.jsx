import React, { useContext, useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Styles } from './UserProfileScreenComponentStyles';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { ThemeContext } from '../../../../../context/ThemeContext';
import { AccountContext } from '../../../../../context/AccountContext';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesing from '@expo/vector-icons/AntDesign';
import ProfileIcon from '../../../../../assets/icons/ProfileIcon';


export default function UserProfileScreenComponent({ navigation, route }) {

    //Variables - init
    const insets = useSafeAreaInsets();

    //Variables - Theme context
    const { darkThemeEnabled, setDarkThemeEnabled } = useContext(ThemeContext);
    const [isDarkThemeEnabled, changeTheme] = useState(darkThemeEnabled);
    useEffect(() => { changeTheme(darkThemeEnabled) }, [darkThemeEnabled]);

    //Variables - User context
    const { user, auth } = useContext(AccountContext);

    //Switch between light and dark theme
    const changeThemeEmiter = () => {
        setDarkThemeEnabled(!isDarkThemeEnabled);
        route.params.change(!isDarkThemeEnabled);
    }

    //Logout
    const logoutHandler = () => {
        route.params.setUserStatus(false);
        auth.signOut();
    }

    return (
        <View testID='settingsScreen' style={[isDarkThemeEnabled ? { backgroundColor: 'black' } : { backgroundColor: '#F5F4FA' }, { paddingTop: insets.top, flex: 1 }]} >
            <ScrollView style={{ paddingHorizontal: responsiveScreenWidth(4), paddingTop: responsiveScreenHeight(2) }}>

                <Text style={[Styles.title, isDarkThemeEnabled ? { color: 'white' } : { color: 'black' }]}>Ajustes</Text>

                <View style={[Styles.categoryLayout, isDarkThemeEnabled ? { backgroundColor: '#181818' } : { backgroundColor: 'white' }]}>
                    <Text style={[Styles.categoryLabel, isDarkThemeEnabled ? { color: '#3E3E3E' } : { color: '#898989' }]}>Perfil</Text>
                </View>

                <View style={Styles.profileContainer}>
                    <View>
                        <ProfileIcon width={responsiveScreenWidth(30)} height={responsiveScreenHeight(15)} />
                    </View>
                    <View style={Styles.profileInfoContainer}>
                        <Text style={[Styles.infoProfile, isDarkThemeEnabled ? { color: 'white' } : { color: 'black' }]}>{user.displayName}</Text>
                        <Text style={Styles.infoSecProfile}>{user.email}</Text>
                    </View>
                </View>

                <View style={[Styles.categoryLayout, isDarkThemeEnabled ? { backgroundColor: '#181818' } : { backgroundColor: 'white' }]}>
                    <Text style={[Styles.categoryLabel, isDarkThemeEnabled ? { color: '#3E3E3E' } : { color: '#898989' }]}>Opciones de usuario</Text>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
                    <View style={[Styles.buttonContainer, { marginBottom: 20, paddingRight: 10 }]}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Ionicons name="create-outline" size={responsiveScreenWidth(8)} color="#686868" />
                            <Text style={[Styles.buttonText, isDarkThemeEnabled ? { color: '#DBDBDB' } : { color: '#505050' }]}>Modificar perfil</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={responsiveScreenWidth(8)} color="#686868" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={logoutHandler}>
                    <View style={[Styles.buttonContainer, { marginBottom: 20, paddingRight: 10 }]}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Ionicons name="log-out-outline" size={responsiveScreenWidth(8)} color="#686868" />
                            <Text testID='logoutButton' style={[Styles.buttonText, isDarkThemeEnabled ? { color: '#DBDBDB' } : { color: '#505050' }]}>Cerrar sesión</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={responsiveScreenWidth(8)} color="#686868" />
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}


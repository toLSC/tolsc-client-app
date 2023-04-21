import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Keyboard, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../../../../../context/ThemeContext';
import { AccountContext } from '../../../../../context/AccountContext';
import { Styles } from './EditProfileScreenStyles';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { updateProfile, updateEmail, reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth'
// import Ionicons from '@expo/vector-icons/Ionicons';
import EditIcon from '../../../../../assets/icons/EditIcon';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';

export default function EditProfileScreenComponent({ navigation }) {

    //Variables - init
    const insets = useSafeAreaInsets();

    //Variables - Theme context
    const { darkThemeEnabled } = useContext(ThemeContext);
    const [isDarkThemeEnabled, changeTheme] = useState(darkThemeEnabled);
    useEffect(() => { changeTheme(darkThemeEnabled) }, [darkThemeEnabled]);

    //Variables - User context
    const { user, auth } = useContext(AccountContext);

    //Variables - state
    const [email, setEmail] = useState(user.email);
    const [name, setName] = useState(user.displayName);
    const [password, setPassword] = useState('');

    //Edit user handler
    const editUserHandler = () => {
        if (password !== '') {
            if (email !== '' && email !== '') {
                const credentials = EmailAuthProvider.credential(auth.currentUser.email, password);
                reauthenticateWithCredential(auth.currentUser, credentials).then(
                    updateProfile(auth.currentUser, { displayName: name }).then(() => {
                        updateEmail(auth.currentUser, email).then(() => {
                            navigation.navigate('UserProfile');
                        })
                    }).catch(error => {
                        console.log(error);
                    })

                ).catch(e => console.log(e))

            } else alert("Debe rellenar todos los campos")
        } else alert("Debe ingresar tu contraseña")
    }

    return (
        <KeyboardAvoidingView style={Styles.keyboardAvoivingLayout} behavior="height" enabled keyboardVerticalOffset={0}>
            <ScrollView>
                <View style={[{ paddingTop: insets.top, paddingBottom: insets.bottom }, Styles.containerLayout, isDarkThemeEnabled ? { backgroundColor: 'black' } : { backgroundColor: '#F5F4FA' }]}>
                    <View style={Styles.buttonBackLayout} >
                        <TouchableOpacity onPress={() => navigation.navigate('UserProfile')} style={{ paddingHorizontal: 5, paddingLeft: 0 }}>
                            {/* <Ionicons name="arrow-back" size={35} style={{ color: '#ccc' }} /> */}
                        </TouchableOpacity>
                    </View>

                    <View>
                        <Text style={[Styles.title, isDarkThemeEnabled ? { color: 'white' } : { color: 'black' }]}>Update Account</Text>
                    </View>

                    <View>
                        <View style={Styles.iconLayout}>
                            <EditIcon width={responsiveScreenWidth(30)} height={responsiveScreenHeight(15)} />
                        </View>

                        <View style={Styles.inputContainer}>
                            <Text style={[Styles.inputLabel, isDarkThemeEnabled ? { color: 'white' } : { color: 'black' }]}>Full name</Text>
                            <TextInput
                                style={[Styles.input, isDarkThemeEnabled ? { color: 'white' } : { color: 'black' }]}
                                placeholder="Enter your full name"
                                placeholderTextColor={isDarkThemeEnabled ? "#3E3E3E" : '#AFAFAF'}
                                value={name}
                                onChangeText={text => setName(text)}
                                onKeyPress={() => Keyboard.dismiss()}
                            />
                        </View>

                        <View style={Styles.inputContainer}>
                            <Text style={[Styles.inputLabel, isDarkThemeEnabled ? { color: 'white' } : { color: 'black' }]}>Email</Text>
                            <TextInput
                                style={[Styles.input, isDarkThemeEnabled ? { color: 'white' } : { color: 'black' }]}
                                placeholder="example@company.com"
                                placeholderTextColor={isDarkThemeEnabled ? "#3E3E3E" : '#AFAFAF'}
                                value={email}
                                onChangeText={text => setEmail(text)}
                            />
                        </View>

                        <View style={Styles.inputContainer}>
                            <Text style={[Styles.inputLabel, isDarkThemeEnabled ? { color: 'white' } : { color: 'black' }]}>Put your password to save changes*</Text>
                            <TextInput
                                style={[Styles.input, isDarkThemeEnabled ? { color: 'white' } : { color: 'black' }]}
                                placeholder="Your password"
                                placeholderTextColor={isDarkThemeEnabled ? "#3E3E3E" : '#AFAFAF'}
                                value={password}
                                onChangeText={text => setPassword(text)}
                                secureTextEntry={true}
                            />
                        </View>
                    </View>

                    <TouchableOpacity onPress={editUserHandler} style={[Styles.buttonStyle, { marginVertical: 45 }]}>
                        <Text style={Styles.buttonLoginText}>Update User</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

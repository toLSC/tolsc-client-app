import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { Styles } from "../styles/LoginScreenComponentStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemeContext } from "../../../context/ThemeContext";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { AccountContext } from '../../../context/AccountContext';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import RegisterIcon from '../../../assets/icons/RegisterIcon';
import BackIcon from '../../../assets/icons/Back';

export default function RegisterScreenComponent({ navigation, route }) {

    //Variables - init
    const insets = useSafeAreaInsets();

    //Variables - Theme context
    const [isDarkThemeEnabled, setisDarkThemeEnabled] = useState((useContext(ThemeContext)).darkThemeEnabled);

    //Variables - User context
    const { auth } = useContext(AccountContext);

    //Variables - state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    //Create user handler
    const handleCreateUser = () => {
        if (name.length < 3) {
            alert("Nombre inválido. Debe tener mínimo 3 caracteres.")
            return
        }

        if((!(/[A-Z]/.test(password) && /[\W_]/.test(password))) || password.length < 8){
            alert("Contraseña inválida. Esta debe tener mínimo 8 caracteres, incluyendo al menos un símbolo y una letra en mayúscula.")
            return
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                updateProfile(auth.currentUser, { displayName: name }).then(data => {
                    navigation.navigate('loginScreen')
                }).catch(error => {
                    switch (error.code) {
                        case 'auth/email-already-in-use':
                            alert('Correo ya esta en uso, por favor utiliza otro')
                            setName('')
                            setEmail('')
                            setPassword('')
                            break;

                        case 'auth/invalid-email':
                            alert('Correo invalido, porfavor vuelve a intentarlo')
                            setName('')
                            setEmail('')
                            setPassword('')
                            break;

                        case 'auth/weak-password':
                            alert('Contraseña muy corta, debe ser de minimo 6 caracteres')
                            setName('')
                            setEmail('')
                            setPassword('')
                            break;
                    }
                })
            }).catch((error) => {
                switch (error.code) {
                    case 'auth/email-already-in-use':
                        alert('Correo ya esta en uso, por favor utiliza otro')
                        setName('')
                        setEmail('')
                        setPassword('')
                        break;

                    case 'auth/invalid-email':
                        alert('Correo invalido, porfavor vuelve a intentarlo')
                        setName('')
                        setEmail('')
                        setPassword('')
                        break;

                    case 'auth/weak-password':
                        alert('Contraseña muy corta, debe ser de minimo 6 caracteres')
                        setName('')
                        setEmail('')
                        setPassword('')
                        break;
                }
            });
    }

    return (
        <View testID='registerScreen' style={[{ paddingTop: insets.top }, Styles.containerLayout, isDarkThemeEnabled ? { backgroundColor: 'black' } : { backgroundColor: '#F5F4FA' }]}>
            <KeyboardAvoidingView style={Styles.keyboardAvoidingLayout} behavior="height" enabled keyboardVerticalOffset={0}>
                <ScrollView testID='scrollView'>
                    <View>

                        <View style={Styles.buttonBackLayout} >
                            <TouchableOpacity onPress={() => navigation.navigate('loginScreen')} style={{ paddingHorizontal: 5, paddingLeft: 0 }}>
                                <BackIcon width={responsiveScreenWidth(7)} height={responsiveScreenHeight(4)}/>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Text style={[Styles.title, isDarkThemeEnabled ? { color: 'white' } : { color: 'black' }]}>Crear cuenta</Text>
                        </View>

                        <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: responsiveScreenHeight(1) }}>
                            <RegisterIcon width={120} height={120} />
                        </View>

                        <View>
                            <View style={Styles.inputContainer}>
                                <Text style={[Styles.inputLabel, isDarkThemeEnabled ? { color: 'white' } : { color: 'black' }]}>Nombre completo</Text>
                                <TextInput
                                    testID='nameInput'
                                    style={[Styles.input, isDarkThemeEnabled ? { color: 'white' } : { color: 'black' }]}
                                    placeholder="Ingresa tu nombre completo"
                                    placeholderTextColor={isDarkThemeEnabled ? "#3E3E3E" : '#AFAFAF'}
                                    value={name}
                                    keyboardAppearance={isDarkThemeEnabled ? "dark" : 'ligth'}
                                    onChangeText={text => setName(text)}
                                />
                            </View>

                            <View style={Styles.inputContainer}>
                                <Text style={[Styles.inputLabel, isDarkThemeEnabled ? { color: 'white' } : { color: 'black' }]}>Correo</Text>
                                <TextInput
                                    testID='emailInput'
                                    style={[Styles.input, isDarkThemeEnabled ? { color: 'white' } : { color: 'black' }]}
                                    placeholder="example@company.com"
                                    placeholderTextColor={isDarkThemeEnabled ? "#3E3E3E" : '#AFAFAF'}
                                    value={email}
                                    keyboardAppearance={isDarkThemeEnabled ? "dark" : 'ligth'}
                                    onChangeText={text => setEmail(text)}
                                />
                            </View>

                            <View style={Styles.inputContainer}>
                                <Text style={[Styles.inputLabel, isDarkThemeEnabled ? { color: 'white' } : { color: 'black' }]}>Contraseña</Text>
                                <TextInput
                                    testID='passwordInput'
                                    style={[Styles.input, isDarkThemeEnabled ? { color: 'white' } : { color: 'black' }]}
                                    placeholder="Ingresa tu contraseña"
                                    placeholderTextColor={isDarkThemeEnabled ? "#3E3E3E" : '#AFAFAF'}
                                    value={password}
                                    keyboardAppearance={isDarkThemeEnabled ? "dark" : 'ligth'}
                                    onChangeText={text => setPassword(text)}
                                    secureTextEntry={true}
                                />
                            </View>
                        </View>

                        <TouchableOpacity testID='registerButton' onPress={handleCreateUser} style={[Styles.buttonStyle, { marginTop: 45, marginBottom: 15 }]}>
                            <Text style={Styles.buttonLoginText}>Registrarse</Text>
                        </TouchableOpacity>

                        <View style={[Styles.createAccountLayout, { marginTop: 0 }]}>
                            <Text style={[Styles.createAccountText, isDarkThemeEnabled ? { color: 'white' } : { color: 'black' }]}>¿Ya tienes un cuenta?</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('loginScreen')}>
                                <Text style={Styles.createAccountTexthighlight}>Inicias sesión</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    )
}
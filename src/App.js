import React from 'react';
import {
    View,
    Image, 
    Text, 
    StyleSheet, 
    SafeAreaView, 
    StatusBar,
    Pressable,
    Linking
} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#c9d1d9'
const colorDarkFontGithub = '#4f565e'
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/80546584?v=4'
const urlToMyGithub = 'https://github.com/souzaamanda'

const App = () => {

    const handlePressGoToGithub = async ()=>{
        console.log('verificando link')
       const res = await Linking.canOpenURL(urlToMyGithub)
       if(res){
           console.log('link aprovado')
            await Linking.openURL(urlToMyGithub)
       }
    }

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle='light-content' />
            <View style={style.content}>
                <Image style={style.avatar} source={{uri:imageProfileGithub}} />
                <Text 
                    accessibilityLabel='Nome: Amanda Souza'
                    style={[style.defaultText, style.name]}>
                        Amanda Souza
                </Text>
                <Text 
                    accessibilityLabel='Nickname: souzaamanda'
                    style={[style.defaultText, style.nickname]}>
                        souzaamanda
                </Text>
                <Text 
                    accessibilityLabel='Descrição: Estudante de Engenharia de Software em transição de carreira.'
                    style={[style.defaultText, style.description]}>
                        Estudante de Engenharia de Software em transição de carreira.
                </Text>

                <Pressable onPress={handlePressGoToGithub}>
                    <View style={style.button}>
                        <Text style={[style.defaultText, style.textButton]}>Open in Github</Text>       
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container:{
        backgroundColor:colorGithub,
        flex: 1, //Expandir para a tela inteira
        justifyContent:'center',
    },
    content: {
        alignItems:'center',
        padding: 30
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor:'white',
        borderWidth: 2
    },
    defaultText:{
        color:colorFontGithub
    },
    name:{
        marginTop: 20,
        fontWeight:'bold',
        fontSize: 24
    },
    nickname:{
        color:colorDarkFontGithub,
        fontSize: 18
    },
    description:{
        fontWeight:'bold',
        fontSize: 14
    },
    button:{
        backgroundColor:colorDarkFontGithub,
        borderRadius:10,
        padding:20,
        marginTop:20
    },
    textButton:{
        fontWeight:'bold',
        fontSize: 16
    }
})
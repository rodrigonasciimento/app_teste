import * as React from 'react';
import { Pressable, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  HeaderBackButton,
} from '@react-navigation/stack';

function Home({ navigation }) {
  return (
    <View style={{backgroundColor: 'rgb(90, 90, 90)', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Image
        source={require("./assets/rodrigo.jpg")}
        style={{
          width: 120,
          height: 120,
          borderRadius: 100,
          borderWidth: 2,
          borderColor: "black"
        }}
      />
      <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>Rodrigo Nascimento</Text>
      <Text style={{color: 'white'}}>@_rdgoo</Text>
      <Pressable
        onPress={() => navigation.navigate('JavaScript')}
        style={{
          backgroundColor: 'orange',
          borderRadius: 20,
          padding: 10,
          paddingHorizontal: 40,
          marginBottom: 10,
          marginTop: 10,
        }}>
        <Text>JavaScript</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('HTML')}
        style={{ 
          backgroundColor: 'orange',
          borderRadius: 20,
          paddingHorizontal: 30,
          padding: 10,
          marginBottom: 10,}}>
        <Text>HTML/CSS/JS</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('python')}
        style={{ 
          backgroundColor: 'orange',
          borderRadius: 20,
          paddingHorizontal: 13,
          padding: 10,
          marginBottom: 10,}}>
        <Text>Python para Dados</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('UX')}
        style={{ 
          backgroundColor: 'orange',
          borderRadius: 20,
          paddingHorizontal: 50,
          padding: 10 }}>
        <Text>UX/UI</Text>
      </Pressable>

    </View>
  );
}

function JavaScript() {
  return (
    <View style={{ backgroundColor: 'rgb(90, 90, 90)', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{margin: 30, color: 'white'}}>Ao iniciar na faculdade, tivemos uma introdução Z lógica de programação usando
a linguagem C e realizamos exercícios de Mxação, os quais tambkm adicionei
ao GitHub. Atualmente, estou revisando lógica, agora com JavaScript, para
aprimorar ainda mais minhas habilidades.
</Text>
    </View>
  );
}

function HTML() {
  return (
    <View style={{ backgroundColor: 'rgb(90, 90, 90)', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{margin: 30, color: 'white'}}>' Atualmente, estou estudando HTML, CSS e JavaScript, além de ter
conhecimento em um facilitador do CSS, o Bootstrap.
' Tenho planos de começar a aprender o framework React ainda este ano para
ampliar ainda mais meu domínio nessas tecnologias.S
</Text>
    </View>
  );
}

function python() {
  return (
    <View style={{ backgroundColor: 'rgb(90, 90, 90)', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{margin: 30, color: 'white'}}>Estou estudando na faculdade com Python para análise de dados, além de um
curso na plataforma DIO fazendo uso da biblioteca Pandas, além de outras
bibliotecas como scikit-learn.

</Text>
    </View>
  );
}

function UX() {
  return (
    <View style={{backgroundColor: 'rgb(90, 90, 90)', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{margin: 30, color: 'white'}}>Além dos estudos para a faculdade na matéria de design de interação e UX, estou
aprimorando meus conhecimentos com o curso da Origamid, onde aprendo mais
sobre design, psicologia das cores e temas relacionados. Também estou lendo
livros, como "Não me faça pensar".
• Obtendo maior conhecimento com as ferramentas Figma e Adobe XD
</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation, route }) => ({
          headerLeft: (props) => {
            return (
              <>
                <Text>Menu</Text>
                {props.canGoBack && <HeaderBackButton {...props} />}
              </>
            );
          },
        })}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="JavaScript" component={JavaScript} />
        <Stack.Screen name="HTML" component={HTML} />
        <Stack.Screen name="python" component={python} />
        <Stack.Screen name="UX" component={UX} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

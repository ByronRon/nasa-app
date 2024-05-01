import { NavigationContainer } from '@react-navigation/native'
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator
} from '@react-navigation/native-stack'
import { RootStackParams } from '../types'
import Home from '../views/Home/Home'
import Detail from '../views/Detail'
import { Image, StyleSheet, View } from 'react-native'

const Stack = createNativeStackNavigator<RootStackParams>()
const routeScreenDefaultoptions: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: 'rgba(7,26,93,255)'
  },
  headerTitleStyle: {
    color: '#fff'
  },
  headerTintColor: '#fff',
  headerShadowVisible: true,
  headerRight: () => (
    <View>
      <Image source={require('../assets/nasa-logo.png')} style={styles.logo} />
    </View>
  )
}

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={routeScreenDefaultoptions}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={routeScreenDefaultoptions}
      />
    </Stack.Navigator>
  </NavigationContainer>
)

const styles = StyleSheet.create({
  logo: {
    width: 60,
    height: 60
  }
})

export default Routes

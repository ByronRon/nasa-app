import { useRoute } from '@react-navigation/native'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { RootStackParams } from '../../types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import Header from '../../components/Header'
import Card from '../../components/Card/Card'
import CardImage from '../../components/CardImage'

const Detail = () => {
  const { params } =
    useRoute<NativeStackScreenProps<RootStackParams, 'Detail'>['route']>()

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={{ uri: params.url }} style={styles.image} />
        <Text style={styles.title}>{params.title}</Text>
        <Text style={styles.date}>{params.date}</Text>
        <ScrollView style={styles.explanationContainer}>
          <Text style={styles.explanation}>{params.explanation}</Text>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'rgba(7,23,96,255)'
  },
  content: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: '#2c449d',
    padding: 16
  },
  image: {
    width: '100%',
    height: '50%',
    objectFit: 'cover',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#fff'
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10
  },
  date: {
    color: '#fff',
    fontSize: 12
  },
  explanationContainer: {
    marginVertical: 16
  },
  explanation: {
    color: '#fff',
    marginTop: 15,
    fontStyle: 'italic',
    fontSize: 15,
    textAlign: 'justify'
  }
})
export default Detail

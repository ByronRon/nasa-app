import { Button, StyleSheet, Text, View } from 'react-native'
import { Postimage, RootStackParams } from '../../types'
import { FC } from 'react'
import CardImage from '../CardImage'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type PostImageNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  'Detail'
>

const Card: FC<Postimage> = (post) => {
  const { navigate } = useNavigation<PostImageNavigationProps>()

  const handleDetailPress = () => {
    navigate('Detail', { ...post })
  }
  return (
    <View style={styles.container}>
      <View>
        <CardImage {...post} />
      </View>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.date}>{post.date}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Detail" onPress={handleDetailPress}></Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2c449d',
    marginVertical: 15,
    marginHorizontal: 15,
    borderRadius: 20,
    padding: 15
  },
  title: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 10
  },
  date: {
    color: '#fff',
    fontSize: 12
  },
  buttonContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center'
  }
})

export default Card

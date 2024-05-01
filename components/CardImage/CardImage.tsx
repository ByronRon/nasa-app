import {
  Image,
  ImageURISource,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native'
import { Postimage, RootStackParams } from '../../types'
import { FC } from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
type PostImageNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  'Detail'
>
const CardImage: FC<Postimage> = (data) => {
  const { navigate } = useNavigation<PostImageNavigationProps>()
  const handleDetailPress = () => {
    navigate('Detail', { ...data })
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleDetailPress}>
        <Image source={{ uri: data.url }} style={styles.image} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  image: {
    width: '100%',
    height: 190,
    objectFit: 'cover',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#fff'
  }
})

export default CardImage

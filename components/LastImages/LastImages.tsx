import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Postimage } from '../../types'
import { FC } from 'react'
import Card from '../Card/Card'

const LastImages: FC<{ postImages?: Postimage[] }> = ({ postImages }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Last Five Days:</Text>

      {postImages?.map((postImage) => (
        <Card key={`post-image-${postImage.title}`} {...postImage} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 15
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 15
  }
})

export default LastImages

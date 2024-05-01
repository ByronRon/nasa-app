import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Header from '../../components/Header'

import fetchApi from '../../utils/fetch'
import Card from '../../components/Card/Card'
import { Postimage } from '../../types'
import { format, sub } from 'date-fns'
import LastImages from '../../components/LastImages'

const Home = () => {
  const [todayImage, setTodayImage] = useState<Postimage>({})
  const [lastImages, setLastImages] = useState<Postimage[]>([])
  useEffect(() => {
    console.log('GET')

    const loadTodaysImage = async () => {
      try {
        const todaysImageResponse = await fetchApi()
        setTodayImage(todaysImageResponse)
      } catch (error) {
        console.error(error)
        setTodayImage({})
      }
    }

    const loadLastDaysImage = async () => {
      try {
        const date = new Date()
        const finalDate = format(sub(date, { days: 1 }), 'yyyy-MM-dd')
        const initialDate = format(sub(date, { days: 5 }), 'yyyy-MM-dd')
        const lastImagesResponse = await fetchApi(
          `&start_date=${initialDate}&end_date=${finalDate}`
        )
        setLastImages(lastImagesResponse)
      } catch (error) {
        console.error(error)
      }
    }

    loadTodaysImage().catch(null)
    loadLastDaysImage().catch(null)
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Image Of de Day</Text>
        <Card {...todayImage} />
        <LastImages postImages={lastImages} />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(7,23,96,255)'
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 15
  }
})

export default Home

import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  FlatList
} from 'react-native'

const mockDataList = [
  {
    id: '1',
    text: 'Swipe me left!'
  },
  { id: '2', text: 'Swipe me right!' },
  { id: '3', text: 'Try swiping in both directions' }
]

const Separator = () => <View style={styles.itemSeparator} />

const ListItem = ({ text }) => (
  <View style={{ paddingVertical: 20 }}>
    <Text style={{ fontSize: 24 }}>{text}</Text>
  </View>
)

const App = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView style={styles.container}>
        <View style={styles.innerContainer}>
          <FlatList
            data={mockDataList}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <ListItem {...item} />}
            ItemSeparatorComponent={() => <Separator />}
          />
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 20
  },
  itemSeparator: {
    flex: 1,
    height: 1,
    backgroundColor: '#444'
  }
})

export default App

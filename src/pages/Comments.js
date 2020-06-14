import React from 'react'
import { SafeAreaView, Text, View, Button } from 'react-native'

const Comments = props => {
    return (
        <SafeAreaView>
            <Text>Comments</Text>
            <Button title="Geri" onPress={() => props.navigation.goBack()} />
        </SafeAreaView>
    )
}

export { Comments }
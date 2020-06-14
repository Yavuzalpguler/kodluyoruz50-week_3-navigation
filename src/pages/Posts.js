import React from 'react'
import { SafeAreaView, Text, View, Button } from 'react-native'

const Posts = props => {

    return (
        <SafeAreaView>
            <Text>Posts</Text>
            <Button title="Geç" onPress={() => props.navigation.navigate("CommentsPage")} />
        </SafeAreaView>
    )
}

export { Posts }
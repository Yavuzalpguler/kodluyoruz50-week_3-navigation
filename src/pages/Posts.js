import axios from 'axios'
import React, { useEffect } from 'react'
import { SafeAreaView, Text, View, Button, } from 'react-native'

const Posts = props => {
    useEffect(() => { fetchData() }, [])

    const fetchData = async () => {
        let { data } = await axios.get("https://jsonplaceholder.typicode.com/posts")

        console.log(data)
    }

    return (
        <SafeAreaView>
            <Text>Posts</Text>
        </SafeAreaView>
    )
}

export { Posts }
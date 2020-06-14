import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, Button, FlatList } from 'react-native'

import { PostItem } from '../components'

const Posts = props => {
    const [postList, setPostList] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        let { data } = await axios.get("https://jsonplaceholder.typicode.com/posts")
        setPostList(data)
    }

    const renderPosts = ({ item }) => {
        return (
            <PostItem title={item.title} body={item.body} />
        )
    }

    return (
        <SafeAreaView>
            <FlatList
                keyExtractor={(_, index) => index.toString()}
                data={postList}
                renderItem={renderPosts}
                ItemSeparatorComponent={() => <View style={{marginVertical: 5, borderWidth: 0.5, borderColor: 'gray'}} />}
            />
        </SafeAreaView>
    )
}

export { Posts }
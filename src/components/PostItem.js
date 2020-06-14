import React from 'react'
import { View, Text } from 'react-native'

import styles from '../style'

const PostItem = (props) => {
    return (
        <View style={styles.postItem.container}>
            <Text style={styles.postItem.title} >{props.title}</Text>
            <Text>{props.body}</Text>
        </View>
    );
}

export { PostItem };
import React, { Component } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

class UpcomingTrailer extends Component {
  render() {
    return (
      <View style={{flex: 0.3}}>
       <WebView
         source={{ uri: this.props.currentTrailerUri }}
         mediaPlaybackRequiresUserAction={false}
         allowsInlineMediaPlayback={true}
         javaScriptEnabled={true}
         domStorageEnabled={true}
         allowFileAccess={false}
         startInLoadingState={true}
        />
      </View>
    );
  }
}
export default UpcomingTrailer;

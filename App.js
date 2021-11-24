/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import Crashes from 'appcenter-crashes'
import Analytics from 'appcenter-analytics'
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };


// const isDarkMode = useColorScheme() === 'dark';

// const backgroundStyle = {
//   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
// };

 class App extends React.Component  {

  constructor(){
    super();

    this.checkPreviousSession()
  }

  async  checkPreviousSession(){

    const didCrashHappend = await Crashes.hasCrashedInLastSession();
    if(didCrashHappend){
      //alert("Sorry about that crash, we are working on it")
    }
  }


  render(){
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar barStyle={ 'light-content' } />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: Colors.black 
          }}>
            <Button title="Hello Crash me" onPress={()=> { Crashes.generateTestCrash()}}></Button>
            <Button title="Send Analytics" onPress={()=> { 
              Analytics.trackEvent("Button Clicks",{Internet:'Wi-fi',Location:"Off"});
              
              // Analytics.trackEvent("Button_Click_Add")
              }}></Button>
         
        </View>
      </ScrollView>
    </SafeAreaView>
  );
        }
};


const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor:  Colors.darker  
  },sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

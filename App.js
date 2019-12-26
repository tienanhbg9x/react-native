import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CategoryListItem from "./components/CategoryListItem";

export default function App() {
  return (
    <View style={styles.container}>
      <CategoryListItem />
      <CategoryListItem />
      <CategoryListItem />
      <CategoryListItem />
      <CategoryListItem />
      <CategoryListItem />
      <CategoryListItem />
    </View>
  );
}
// export default class App extends React.Component{
//     constructor() {
//       super();
//       console.log('jkhsagfsaf');
//     }
//
//     render() {
//
//       return(
//           <View style={{backgroundColor: 'red', padding: 50}}>
//             <Text>ABLAKHLHLF</Text>
//             <View>
//               <View>
//                 <Text style={{fontSize: 30}}>asflklshfkasdkfdskasdf</Text>
//               </View>
//             </View>
//           </View>
//
//       )
//     }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'stretch',
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft:16,
    paddingRight:16,
  },
});

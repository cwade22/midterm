import {Platform, StatusBar, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection:"column",
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: 'flex-end',
    borderWidth: 10,
    borderStyle: "solid",
    borderColor: "#ffffff",
    
  
  },

  column: {
    width: 300,
    height: 300,
    justifyContent: "space-around",
    alignItems: "center",
    margin: 10,
    borderStyle: "solid",
    borderWidth: 0,
    borderColor: "#000000",
    backgroundColor: "#42dfab",
    fontSize: 35,

  },
  
  
});
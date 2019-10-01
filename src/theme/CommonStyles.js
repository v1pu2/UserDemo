
import Colors from './Colors'
export default CommonStyles={
    container: {
        flex: 1,
      },
      heading: {
        height: 40,
        backgroundColor: Colors.fabColor,
        alignItems: 'center',
        justifyContent: 'center',
      },
      
      headingText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },      
      list: {
        margin: 5,
        backgroundColor: 'white',
        height:80,
        justifyContent: 'space-around',
        paddingLeft: 10,
        elevation: 1,
      },
      fab: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 20,
        bottom: 20,
        backgroundColor: Colors.fabColor,
        borderRadius: 30,
        elevation: 8
      },
      fabIcon: {
        fontSize: 40,
        color: 'white',
       
      },
      iconStyle:{ margin: 5, justifyContent: "center" },
}
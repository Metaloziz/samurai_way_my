import {connect} from "react-redux";
import {Navigation, sidebarPT} from "./Navigation";
import {actionPT, AppStatePT} from "../../redux/store_redux";


const mapStateToProps = (state: AppStatePT): sidebarPT => ({sidebar: state.sidebar})

const mapDispatchToProps = (dispatch: (action: actionPT) => void) => {
    return {
        test: () => dispatch({type: "SIDE_BAR_TEST"})
    }
}

export const NavigationContainer = connect(mapStateToProps, mapDispatchToProps)(Navigation)
  






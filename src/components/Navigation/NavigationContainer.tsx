import {connect} from "react-redux";
import {Navigation, sidebarPT} from "./Navigation";
import {actionPT, AppStateType} from "../../redux/store_redux";


const mapStateToProps = (state: AppStateType): sidebarPT => ({sidebar: state.sidebar})

const mapDispatchToProps = (dispatch: (action: actionPT) => void) => {
    return {
        test: () => dispatch({type: "SIDE_BAR_TEST"})
    }
}

export const NavigationContainer = connect(mapStateToProps, mapDispatchToProps)(Navigation)
  





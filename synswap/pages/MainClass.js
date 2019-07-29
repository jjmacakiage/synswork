import React, { Component } from "react";
import { Grid, Paper} from '@material-ui/core';
import Tabs, {Tab} from "react-awesome-tabs";
import "../resources/styles/react-awesome-tabs.scss";
import { connect } from "react-redux";


import Header from "../components/main/Header";
import Home from './Home';
import NewTrade from './NewTrade';



class MainClass extends Component {
    CONTENT_COMPONENTS = [
        { key: 'Home', component: <Home onClick={ this.handleClick.bind(this) } />},
        { key: 'NewTrade', component: <NewTrade/>}
    ];



    handleTabPositionChange(a, b) {
        let c = this.props.tabs[a];
        this.props.tabs[a] = this.props.tabs[b];
        this.props.tabs[b] = c;

        if(this.props.activeTab === a) {
            this.props.switchTab(b);
        }else if(this.props.activeTab === b) {
            this.props.switchTab(a);
        }

    }

    handleTabClose(index) {

        this.props.removeTab(index);

    }


    handleClick(link) {

        const index = () => {
            for (var i = 0; i < this.CONTENT_COMPONENTS.length; i++) {
                const data = this.CONTENT_COMPONENTS[i];
                if (link === data.key) {
                    return i;
                }
            }
            return 1;
        };
        const tabContent = {
            title: "Foo",
            index: index()
        };
        this.props.addTab(tabContent);

    }

    render() {
        return (
            <div>
                <Grid container spacing={ 1 }>
                    <Grid item xs={ 12 }>
                        <Header />
                    </Grid>
                    <Grid item xs={ 12 }>
                        <Tabs
                            active={ this.props.activeTab }
                            onTabSwitch={ this.props.switchTab.bind(this) }
                            onTabPositionChange={ this.handleTabPositionChange.bind(this) }
                            onTabClose={ this.handleTabClose.bind(this) }
                            draggable={ true }
                            showAdd={ false }
                        >
                            {
                                this.props.tabs.map((value, index) => {
                                    return (
                                        <Tab
                                            key={ this.CONTENT_COMPONENTS[ value.index ].key }
                                            title={ value.title }
                                            showClose={ index !== 0 }
                                        >
                                            { this.CONTENT_COMPONENTS[ value.index ].component }
                                        </Tab>
                                    );
                                })
                            }
                        </Tabs>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        activeTab: state.TabReducer.activeTab,
        tabs: state.TabReducer.tabs
    }
};

const mapDispatchToProps = dispatch => {
    return {
        // dispatching plain actions
        switchTab: (active) => dispatch({ type: 'SWITCH_TAB', payload: active}),
        removeTab: (index) => dispatch({ type: 'REMOVE_TAB', payload: index }),
        addTab: (tabContent) => dispatch({ type: 'ADD_TAB', payload: tabContent })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainClass);

import React, { Component, PropTypes } from 'react'
import { NavigationExperimental, PixelRatio, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import NavigationExampleRow from './NavigationExampleRow.js'

const styles = StyleSheet.create({
  navigator: {
    flex: 1,
  },
  scrollView: {
    marginTop: 64
  },
  row: {
    padding: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: '#CDCDCD',
  },
  rowText: {
    fontSize: 17,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '500',
  },
  navigatorCardStack: {
    flex: 20,
  },
  tabs: {
    flex: 1,
    flexDirection: 'row',
  },
  tab: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
  tabText: {
    color: '#222',
    fontWeight: '500',
  },
  tabSelected: {
    color: 'blue',
  },
});

const {
  CardStack: NavigationCardStack,
  Header: NavigationHeader,
  PropTypes: NavigationPropTypes,
  StateUtils: NavigationStateUtils,
} = NavigationExperimental;

function createDeskNomadNavigationState(): Object {
  return {
    // Three Tabs in this route
    tabs: {
      index: 0,
      routes: [
        {key: 'rent'},
        {key: 'list'},
        {key: 'profile'},
      ],
    },
    // Scenes for the 'rent' tabs
    rent: {
      index: 0,
      routes: [{key: 'timframe'}],
    },
    // Scenes for the 'list' tabs
    list: {
      index: 0,
      routes: [{key: 'list'}],
    },
    // Scenes for the 'profile' tabs
    profile: {
      index: 0,
      routes: [{key: 'profile'}],
    },
  }
}

// Define what app navigation state shall be updated.
function updateDeskNomadNavigationState(
  state: Object,
  action: Object,
): Object {
  let {type} = action;
  if (type === 'BackAction') {
    type = 'pop';
  }

  switch (type) {
    case 'push': {
      // Push a route into the scenes stack.
      const route: Object = action.route;
      const {tabs} = state;
      const tabKey = tabs.routes[tabs.index].key;
      const scenes = state[tabKey];
      const nextScenes = NavigationStateUtils.push(scenes, route);
      if (scenes !== nextScenes) {
        return {
          ...state,
          [tabKey]: nextScenes,
        };
      }
      break;
    }

    case 'pop': {
      // Pops a route from the scenes stack.
      const {tabs} = state;
      const tabKey = tabs.routes[tabs.index].key;
      const scenes = state[tabKey];
      const nextScenes = NavigationStateUtils.pop(scenes);
      if (scenes !== nextScenes) {
        return {
          ...state,
          [tabKey]: nextScenes,
        };
      }
      break;
    }

    case 'selectTab': {
      // Switches the tab.
      const tabKey: string = action.tabKey;
      const tabs = NavigationStateUtils.jumpTo(state.tabs, tabKey);
      if (tabs !== state.tabs) {
        return {
          ...state,
          tabs,
        };
      }
    }
  }
  return state;
}

// Defines a helper function that creates a HOC (higher-order-component)
// which provides a function `navigate` through component props. The
// `navigate` function will be used to invoke navigation changes.
// This serves a convenient way for a component to navigate.
function createDeskNomadNavigationContainer(ComponentClass) {
  const key = '_DeskNomadNavigationContainerNavigateCall';

  class Container extends Component {
    static contextTypes = {
      [key]: PropTypes.func,
    };

    static childContextTypes = {
      [key]: PropTypes.func.isRequired,
    };

    static propTypes = {
      navigate: PropTypes.func,
    };

    getChildContext(): Object {
      return {
        [key]: this.context[key] || this.props.navigate,
      };
    }

    render(): ReactElement {
      const navigate = this.context[key] || this.props.navigate;
      return <ComponentClass {...this.props} navigate={navigate} />;
    }
  }

  return Container;
}

// Define a component for your application that owns the navigation state.
export class DeskNomad extends Component {

  static propTypes = {
    onExampleExit: PropTypes.func,
  };

  // This sets up the initial navigation state.
  constructor(props, context) {
    super(props, context);
    // This sets up the initial navigation state.
    this.state = createDeskNomadNavigationState();
    this._navigate = this._navigate.bind(this);
  }

  render(): ReactElement {
    // User your own navigator (see next step).
    return (
      <DeskNomadNavigator
        DeskNomadNavigationState={this.state}
        navigate={this._navigate}
      />
    );
  }

  // This public method is optional. If exists, the UI explorer will call it
  // the "back button" is pressed. Normally this is the cases for Android only.
  handleBackAction(): boolean {
    return this._navigate({type: 'pop'});
  }

  // This handles the navigation state changes. You're free and responsible
  // to define the API that changes that navigation state. In this exmaple,
  // we'd simply use a `updateAppNavigationState` to update the navigation
  // state.
  _navigate(action: Object): void {
    if (action.type === 'exit') {
      // Exits the example. `this.props.onExampleExit` is provided
      // by the UI Explorer.
      this.props.onExampleExit && this.props.onExampleExit();
      return;
    }

    const state = updateDeskNomadNavigationState(
      this.state,
      action,
    );

    // `updateAppNavigationState` (which uses NavigationStateUtils) gives you
    // back the same `state` if nothing has changed. You could use
    // that to avoid redundant re-rendering.
    if (this.state !== state) {
      this.setState(state);
    }
  }
}

// Define your own controlled navigator.
const DeskNomadNavigator = createDeskNomadNavigationContainer(class extends Component {
  static propTypes = {
    DeskNomadNavigationState: PropTypes.shape({
      rent: NavigationPropTypes.navigationState.isRequired,
      list: NavigationPropTypes.navigationState.isRequired,
      profile: NavigationPropTypes.navigationState.isRequired,
      tabs: NavigationPropTypes.navigationState.isRequired,
    }),
    navigate: PropTypes.func.isRequired,
  };

  // This sets up the methods (e.g. Pop, Push) for navigation.
  constructor(props: any, context: any) {
    super(props, context);
    this._back = this._back.bind(this);
    this._renderHeader = this._renderHeader.bind(this);
    this._renderScene = this._renderScene.bind(this);
  }

  // Now use the `NavigationCardStack` to render the scenes.
  render(): ReactElement {
    const {DeskNomadNavigationState} = this.props;
    const {tabs} = DeskNomadNavigationState;
    const tabKey = tabs.routes[tabs.index].key;
    const scenes = DeskNomadNavigationState[tabKey];

    return (
      <View style={styles.navigator}>
        <NavigationCardStack
          key={'stack_' + tabKey}
          onNavigateBack={this._back}
          navigationState={scenes}
          renderHeader={this._renderHeader}
          renderScene={this._renderScene}
          style={styles.navigatorCardStack}
        />
        <DeskNomadTabs
          navigationState={tabs}
        />
      </View>
    );
  }

  // Render the header.
    // The detailed spec of `sceneProps` is defined at `NavigationTypeDefinition`
    // as type `NavigationSceneRendererProps`.
    _renderHeader(sceneProps: Object): ReactElement {
      return (
        <DeskNomadHeader
          {...sceneProps}
        />
      );
    }

    // Render a scene for route.
    // The detailed spec of `sceneProps` is defined at `NavigationTypeDefinition`
    // as type `NavigationSceneRendererProps`.
    _renderScene(sceneProps: Object): ReactElement {
      return (
        <DeskNomadScene
          {...sceneProps}
        />
      );
    }

    _back() {
      this.props.navigate({type: 'pop'});
    }
  });

  // Define your own header.
  const DeskNomadHeader = createDeskNomadNavigationContainer(class extends Component {
    static propTypes = {
      ...NavigationPropTypes.SceneRendererProps,
      navigate: PropTypes.func.isRequired,
    };

    constructor(props: Object, context: any) {
      super(props, context);
      this._back = this._back.bind(this);
      this._renderTitleComponent = this._renderTitleComponent.bind(this);
    }

    render(): ReactElement {
      return (
        <NavigationHeader
          {...this.props}
          renderTitleComponent={this._renderTitleComponent}
          onNavigateBack={this._back}
        />
      );
    }

    _back(): void {
      this.props.navigate({type: 'pop'});
    }

    _renderTitleComponent(props: Object): ReactElement {
      return (
        <NavigationHeader.Title>
          {props.scene.route.key}
        </NavigationHeader.Title>
      );
    }
  });

  // Define your own scene.
  const DeskNomadScene = createDeskNomadNavigationContainer(class extends Component {
    static propTypes = {
      ...NavigationPropTypes.SceneRendererProps,
      navigate: PropTypes.func.isRequired,
    };

    constructor(props: Object, context: any) {
      super(props, context);
      this._exit = this._exit.bind(this);
      this._popRoute = this._popRoute.bind(this);
      this._pushRoute = this._pushRoute.bind(this);
    }

    render(): ReactElement {
      return (
        <ScrollView>
          <NavigationExampleRow
            text="Rent Route"
            onPress={this._pushRoute}
          />
          <NavigationExampleRow
            text="List Route"
            onPress={this._pushRoute}
          />
          <NavigationExampleRow
            text="Profile Route"
            onPress={this._pushRoute}
          />
          <NavigationExampleRow
            text="Pop Route"
            onPress={this._popRoute}
          />
          <NavigationExampleRow
            text="Scrap"
            onPress={this._exit}
          />
        </ScrollView>
      );
    }

    _pushRoute(): void {
      // Just push a route with a new unique key.
      const route = {key: '[' + this.props.scenes.length + ']-' + Date.now()};
      this.props.navigate({type: 'push', route});
    }

    _popRoute(): void {
      this.props.navigate({type: 'pop'});
    }

    _exit(): void {
      this.props.navigate({type: 'exit'});
    }
  });

  // Define your own tabs.
  const DeskNomadTabs = createDeskNomadNavigationContainer(class extends Component {
    static propTypes = {
      navigationState: NavigationPropTypes.navigationState.isRequired,
      navigate: PropTypes.func.isRequired,
    };

    constructor(props: Object, context: any) {
      super(props, context);
    }

    render(): ReactElement {
      return (
        <View style={styles.tabs}>
          {this.props.navigationState.routes.map(this._renderTab, this)}
        </View>
      );
    }

    _renderTab(route: Object, index: number): ReactElement {
      return (
        <DeskNomadTab
          key={route.key}
          route={route}
          selected={this.props.navigationState.index === index}
        />
      );
    }
  });

  // Define your own Tab
  const DeskNomadTab = createDeskNomadNavigationContainer(class extends Component {

    static propTypes = {
      navigate: PropTypes.func.isRequired,
      route: NavigationPropTypes.navigationRoute.isRequired,
      selected: PropTypes.bool.isRequired,
    };

    constructor(props: Object, context: any) {
      super(props, context);
      this._onPress = this._onPress.bind(this);
    }

    render(): ReactElement {
      const style = [styles.tabText];
      if (this.props.selected) {
        style.push(styles.tabSelected);
      }
      return (
        <TouchableOpacity style={styles.tab} onPress={this._onPress}>
          <Text style={style}>
            {this.props.route.key}
          </Text>
        </TouchableOpacity>
      );
    }

    _onPress() {
      this.props.navigate({type: 'selectTab', tabKey: this.props.route.key});
    }
  });

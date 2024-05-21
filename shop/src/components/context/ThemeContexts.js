import React, { createContext, Component } from 'react';

const ThemeContext = createContext();

class ThemeProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: false,
    };
  }

  toggleTheme = () => {
    this.setState((prevState) => ({ theme: !prevState.theme }));
  };

  render() {
    const { theme } = this.state;
    const { children } = this.props;

    return (
      <ThemeContext.Provider value={{ theme, toggleTheme: this.toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  }
}

const ThemeConsumer = ThemeContext.Consumer;

export { ThemeProvider, ThemeConsumer, ThemeContext };

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    }
  });
class InputTemperature extends Component {
    constructor(props){
        super(props);
        this.state={
            temperature:this.props.value
        }
        this.handleTemperature = this.handleTemperature.bind(this);
    }

    handleTemperature(e){
       
        var expresion=/^\d*$/;
        if (expresion.test(e.target.value)){
            this.setState({
                temperature: e.target.value
            })
            this.props.temperature(e.target.value)
        }
    }

    render() {
    const { classes } = this.props;
    return (
            <TextField
                id="temperatura"
                label="Temperatura"
                className={classes.textField}
                value={this.state.temperature}
                onChange={(e)=>this.handleTemperature(e)}
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                margin="normal"
            />
        );
    }
}
InputTemperature.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles) (InputTemperature);

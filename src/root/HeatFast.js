import React, { Component } from 'react';
import './css/heatFast.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputTemperature from './InputTemperature';
import ButtonHeat from './ButtonHeat';
import axios from 'axios';
const styles = theme => ({
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    }
  });
class HeatFast extends Component {
    constructor(props){
        super(props);
        this.state={
            temperatura:"0"
        }
        this.verificarEvento = this.verificarEvento.bind(this);
        this.handleTemperature=this.handleTemperature.bind(this);
    }
    verificarEvento(){

        let data = JSON.stringify({
            temperatura:this.state.temperatura
        })
        return new Promise(function(resolve,reject){
            axios.post("http://192.168.1.107/temperatura",
            data
           )
            .then(function(response){
                resolve(response.data);
            }).catch(()=>{
                console.log("inaccesible")
            });
        })      
    }
    handleTemperature(temp){
        console.log(temp);
        this.setState(
            {
                temperatura:temp
            }
        )
    }
    render() {
    const { classes } = this.props;
    return (
        <Grid container spacing={16}>
            <Grid item xs={12}>
                <div className="heatFast">
                    <h1> RoboPava rápida </h1>
                </div>
            </Grid>
            <Grid item xs={12}>
                <InputTemperature value={this.state.temperatura} temperature={(temp)=> this.handleTemperature(temp)}/>
                <ButtonHeat onClick={()=>this.verificarEvento()}/>
            </Grid>
        </Grid>
        );
    }
}
HeatFast.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles) (HeatFast);

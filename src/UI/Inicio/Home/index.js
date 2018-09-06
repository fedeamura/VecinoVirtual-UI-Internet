import React from "react";
import { withStyles } from "@material-ui/core/styles";

//Componentes
import Grid from "@material-ui/core/Grid";

//REDUX
import { connect } from "react-redux";
import { push } from "connected-react-router";

//Mis componentes
import ItemApp from "@Componentes/ItemApp";
import MiContent from "@Utils/MiContent";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  redireccionar: url => {
    console.log("redireccionar " + url);
    dispatch(push(url));
  }
});

class Home extends React.PureComponent {
  onBotonCba147Click = () => {
    this.props.redireccionar("/DetalleApp?app=cba147");
  };

  render() {
    const { classes } = this.props;

    return (
      <MiContent>
        <div className={classes.content}>
          <Grid container spacing={24}>
            <Grid item xs={4}>
              <ItemApp
                titulo="CBA147"
                onClick={this.onBotonCba147Click}
                icono="https://lh3.googleusercontent.com/0oKhFnzCvEBACju9oJs5vaqpHcTPTrJUt0ZSx20J6VelB0GBlSKKYdjVJbAxT2z2TUeG=s180"
              />
            </Grid>
            <Grid item xs={4}>
              <ItemApp
                titulo="SiSi"
                icono="https://mail.google.com/mail/u/0?ui=2&ik=972a7e2796&attid=0.1&permmsgid=msg-a:r-880748182155317564&th=1658bfddb4cf2150&view=fimg&realattid=f_jl8capvu0&disp=thd&attbid=ANGjdJ-qcNUSxAFeBbXOR53c5VBiPnMoWNTE-wx6YTOi1HJUdBWHXrJ702R6rdVhSFqkFOXbCm_e_DnOaENBzltR2JGTBoW2juMUAa_W86XzugIvcQzn1fZymzLCxxs&ats=2524608000000&sz=w1109-h954"
              />
            </Grid>
            <Grid item xs={4}>
              <ItemApp
                titulo="Tributario"
                icono="data:image/png;base64,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"
              />
            </Grid>
            <Grid item xs={4}>
              <ItemApp
                titulo="Turnero"
                icono="data:image/png;base64,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"
              />
            </Grid>
          </Grid>
        </div>
      </MiContent>
    );
  }
}

const styles = theme => ({
  content: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    padding: "1rem",
    overflow: "auto"
  }
});

let componente = Home;
componente = withStyles(styles)(componente);
componente = connect(
  mapStateToProps,
  mapDispatchToProps
)(componente);
export default componente;

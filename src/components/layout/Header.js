import React , {Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class Header extends Component{
    state = {
        auth: true,
        anchorEl: null,
    };

    handleChange = event => {
        this.setState({ auth: event.target.checked });
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };
    render(){
        const { styles } = this.props;
        console.log(this.props); 
        const { auth, anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
          <div className={styles.root}>
            <AppBar position="static">
              <Toolbar>
                <IconButton
                            className="{styles.menuButton}"
                  color="inherit"
                  aria-label="Menu"
                >
                  <MenuIcon />
                </IconButton>

                <Typography
                  variant="h6"
                  color="inherit"
                            className="{styles.grow}"
                >
                  Home
                </Typography>
 
                <div>
                    <IconButton
                        aria-owns={auth ? 'menu-appbar' : undefined}
                        aria-haspopup="true"
                        onClick={this.handleMenu}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={open}
                        onClose={this.handleClose}
                    >
                        <MenuItem onClick={this.handleClose}>Mis incidencias</MenuItem>
                        <MenuItem onClick={this.handleClose}>Cerrar sesión</MenuItem>
                    </Menu>
                </div>
              </Toolbar>
            </AppBar>
          </div>
        );
    }
}

Header.propTypes = {
  styles: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);

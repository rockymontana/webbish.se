// React and Redux and Base Application stuff
import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import { IndexLink } from 'react-router'
import Color from 'color'

// Buttons, Icons & Colors
import FlatButton             from 'material-ui/FlatButton';
import IconButton             from 'material-ui/IconButton';
import FontIcon               from 'material-ui/FontIcon';
import ActionCode             from 'material-ui/svg-icons/action/code'
import NotificationSms        from 'material-ui/svg-icons/notification/sms'
import NotificationActionFace from 'material-ui/svg-icons/action/face'


function getStyles(props) {
    return {
        title: {
            fontFamily: 'Comfortaa',
            color: props.palette.accent1Color,
            fontSize: '1.69em',
            letterSpacing: 10,
            textDecoration: 'none',
            marginLeft: 10,
        },
        buttonLabel: {
            color: '#f3f3f3',
            fontFamily: 'Comfortaa',
            fontWeight: 400,
            fontSize: 16,
        },
        button: {
            backgroundColor: props.palette.primary1Color,
            cursor: 'pointer',
            textAlign: 'center',
            display: 'flex',
            fontSize: 28
        },
        icons: {
            code: {
                color: props.palette.accent1Color,
                backgroundColor: props.palette.primary1Color,
                cursor: 'pointer',
                textAlign: 'center',
                display: 'flex',
                fontSize: 28,
             },
            contact: {
                color: '#0079E3',
                backgroundColor: props.palette.primary1Color,
                cursor: 'pointer',
                textAlign: 'center',
                display: 'flex',
                fontSize: 28,
             },
            friends: {
                color: '#E3A600',
                backgroundColor: props.palette.primary1Color,
                cursor: 'pointer',
                textAlign: 'center',
                display: 'flex',
                fontSize: 28,
             },

        },
        toolbar: {
            style: {
                backgroundColor: props.palette.primary1Color,
                color: props.palette.primary2Color,
                margin: '0 !important',
            },
            left: {
                textAlign: 'center',
                fontWeight: 600,
            },
            right: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }
        }
    }
}

export default class TopNavigation extends Component {
    constructor(props, context) {
        super(props, context)
        this.styles = getStyles(props);
        console.log(props)
    }
    render() {
        return (
            <AppBar
                style={this.styles.toolbar.style}
                className='AppBar'
                showMenuIconButton={false}
                zDepth={5}
                title={<IndexLink to='/' style={this.styles.title}>WEBBISH</IndexLink>}
                titleStyle={this.styles.title}
                iconStyleRight={{
                    margin:0,
                    display: 'flex',
                    alignItems: 'center',
                }}
                iconElementRight={
                    <div style={this.styles.toolbar.right}>
                        <FlatButton
                            style={{color: this.styles.icons.code.color}}
                            hoverColor={Color(this.styles.icons.code.color).alpha(0.9).darken(0.35).hexString()}
                            icon={<ActionCode />}
                            label='Code'
                            rippleColor={this.styles.icons.code.color}
                            labelStyle={this.styles.buttonLabel}
                            href="/code"
                            linkButton={true}
                        />
                        <FlatButton
                            style={{color: this.styles.icons.contact.color}}
                            hoverColor={Color(this.styles.icons.contact.color).alpha(0.9).darken(0.35).hexString()}
                            icon={<NotificationSms />}
                            label="Get in touch"
                            linkButton={false}
                            rippleColor={this.styles.icons.contact.color}
                            href="/contact"
                            linkButton={true}
                            labelStyle={this.styles.buttonLabel}
                                />

                        <FlatButton
                            style={{color: this.styles.icons.friends.color}}
                            hoverColor={Color(this.styles.icons.friends.color).alpha(0.9).darken(0.35).hexString()}
                            icon={<NotificationActionFace />}
                            label="Friends"
                            linkButton={false}
                            rippleColor={this.styles.icons.friends.color}
                            href="/friends"
                            linkButton={true}
                            labelStyle={this.styles.buttonLabel}
                        />
                    </div>
                }
                />
        )
    }

}

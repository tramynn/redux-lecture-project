import React, {Component} from 'react';

export default class Profile extends Component {
    render() {
        return(
            <div>
                <input placeholder="Favorite Show" />
                <input placeholder="Favorite Movie" />
                <input placeholder="Favorite Color" />
                <input placeholder="Favorite Food" />
                <input placeholder="Favorite Band" />
            </div>
        )
    }
}
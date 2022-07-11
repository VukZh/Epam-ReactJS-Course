import React, {Component} from 'react';
import Button from '../../components/Button/Button';
import './styles.scss';

export default class TestErrorBoundary extends Component<any, any> {
    state = {
        hasError: false
    }

    render() {
        if (this.state.hasError) {
            throw new Error("Ooops");
        }
        return (
            <div className="testerrorboundary">
                <h1 className="testerrorboundary--text">Test ErrorBoundary</h1>
                <Button purpose='error' text='Throw Error' onClick={() => this.setState({hasError: true})} />
            </div>

        )

    };
}
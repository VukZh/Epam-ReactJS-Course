import React, {Component} from 'react';

export default class TestErrorBoundary extends Component<any, any> {
    state = {
        hasError: false
    }

    render() {
        if (this.state.hasError) {
            throw new Error("Ooops");
        }
        return (
            <section className="section has-background-danger-dark">
                <h1 className="title">Test ErrorBoundary</h1>
                <button className="button is-danger" onClick={() => this.setState({hasError: true})}>
                Throw error
            </button>
            </section>

        )

    };
}
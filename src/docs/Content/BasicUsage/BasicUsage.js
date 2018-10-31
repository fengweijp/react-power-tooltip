import React from 'react';

const BasicUsage = () => {

    // const html = Prism.highlight(integratedCode, Prism.languages.javascript, 'javascript');
    return (
        <>
            <h1>Basic Usage</h1>
            <h3>1) Import the tooltip into your react component file. <strong>Important: </strong>Use a stateful component to handle hover effects (see below).</h3>
            <pre>
                <code className="language-javascript">import Tooltip from 'react-custom-tooltip'</code>
            </pre>
            <h3>2) Add a hover state default and handler to your stateful component.</h3>
            <pre>
                <code className="language-jsx">
                    {`class Example extends Component {
    state = {
        show: false
    }

    showTooltip = bool => {
        this.setState({ show: bool })
    }

    render() {
        return (
            {/* Target element position needs to be RELATIVE */}
            <div 
                style={{ position: 'relative' }}
                mouseOver={() => this.showTooltip(true)} 
                mouseLeave={() => this.showTooltip(false)}>
                
                {/* ADD TOOLTIP HERE */}

            </div>
        );
    }
}
export default Example;`}
                </code>
            </pre>
            <h3>3) Set the position of the target element to relative. Then add the tooltip to that element</h3>
            <pre>
                <code className="language-jsx">
                    {
                        `{/* Add options/text via span elements */}

<Tooltip show={this.props.show}>
    <span>Some text</span>
</Tooltip>`}
                </code>
            </pre>
        </>
    );
};

export default BasicUsage;
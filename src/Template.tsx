import * as React from 'react';

interface State {

}

interface ExternalProps {

}

export interface InjectedProps {

}

interface Options {
    key?: string;
}

export const yourHocFactoryName = ({ key = 'Default Value' }: Options = {}) =>
    <TOriginalProps extends {}>(
        Component: (React.ComponentClass<TOriginalProps & InjectedProps>
            | React.StatelessComponent<TOriginalProps & InjectedProps>)
    ) => {
        type ResultProps = TOriginalProps & ExternalProps;
        const result = class YourComponentName extends React.Component<ResultProps, State> {
            static displayName = `YourComponentName(${Component.displayName || Component.name})`;

            constructor(props: ResultProps) {
                super(props);
                this.state = {

                };
            }

            render(): JSX.Element {
                return (
                    <div>
                        <Component {...this.props} {...this.state} />
                    </div>
                );
            }
        };

        return result;
    }
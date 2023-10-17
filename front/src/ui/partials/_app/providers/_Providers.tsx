import React from 'react';
import ThemeContainer from '@theme/ThemeContainer';

// import { Component } from './_Providers.styled';
// import { ProvidersPartialLogic } from './_Providers.logic';
// import { useProvidersPartial } from './_Providers.hook';

interface ProvidersProps {
    children: React.ReactNode;
}

const ProvidersList = [ThemeContainer];

const Providers: React.FC<ProvidersProps> = ({ children }) => {
    return <ComposeProviders with={ProvidersList}>{children}</ComposeProviders>;
};

interface IComposeProvidersProps {
    with: Array<React.ElementType>;
    children: React.ReactNode;
}

export const ComposeProviders = ({
    with: Providers,
    children,
}: IComposeProvidersProps) => {
    return (
        <>
            {Providers.reduce(
                (AccProviders, Provider) => (
                    <Provider>{AccProviders}</Provider>
                ),
                children,
            )}
        </>
    );
};

export default Providers;


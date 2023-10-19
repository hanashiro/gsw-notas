import { GetStaticProps } from 'next';

// import { Component } from '@partials/bank/Bank.styled';
// import { useBankPage } from '@partials/bank/Bank.hook';
// import { BankPageLogic } from '@partials/bank/Bank.logic';
// import { BankPageStore } from '@partials/bank/Bank.store';

interface BankProps {
    title: string;
}

export default function Bank(props: BankProps) {

    return (
        <div>
            <div>Bank</div>
        </div>
    );
};


export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            title: 'Bank',
        },
    };
};
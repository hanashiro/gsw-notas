import {
    Button,
    List,
    ListItem,
    Paper,
    Stack,
    Tab,
    Tabs,
    TextField,
    Typography,
} from '@mui/material';
import { GetStaticProps } from 'next';

// import { Component } from '@partials/bank/Bank.styled';
import { useBankPage } from '@partials/bank/Bank.hook';
import { FormatterService } from '@services/Formatter/FormatterService';
import { ClientInterface } from '@typing/Client';
// import { BankPageStore } from '@partials/bank/Bank.store';

interface BankProps {
    title: string;
}

export default function Bank(props: BankProps) {
    const {
        user,
        selectedTab,
        setSelectedTab,
        amountToWithdraw,
        updateAmountToWithdraw,
        withdrawalError,
        isLoading,
        withdraw,
        bankNotesList,
    } = useBankPage();
    return (
        <div>
            <Tabs
                value={selectedTab}
                onChange={(e, newValue) => setSelectedTab(newValue)}
            >
                <Tab label="Conta" />
                <Tab label="Histórico de Saques" />
            </Tabs>
            <Paper
                sx={{
                    maxWidth: '45rem',
                    mx: 'auto',
                    mt: 5,
                    p: 2,
                }}
            >
                {selectedTab === 0 && (
                    <>
                        <Typography>
                            Saldo Disponível:{' '}
                            {FormatterService.currency(
                                (user as ClientInterface)?.total,
                            )}
                        </Typography>

                        <Stack direction="column" spacing={2} sx={{ mt: 5 }}>
                            <TextField
                                label="Valor a Sacar"
                                value={amountToWithdraw}
                                onChange={(e) =>
                                    updateAmountToWithdraw(e.target.value)
                                }
                                error={!!withdrawalError}
                                helperText={withdrawalError}
                                disabled={isLoading}
                            />

                            <Button
                                variant="contained"
                                onClick={() => {
                                    withdraw(
                                        (user as ClientInterface).name,
                                        amountToWithdraw as number,
                                    );
                                }}
                                disabled={
                                    !!withdrawalError ||
                                    isLoading ||
                                    !amountToWithdraw
                                }
                            >
                                {isLoading ? (
                                    <i className="fa fa-spinner fa-spin" />
                                ) : (
                                    'Sacar Dinheiro'
                                )}
                            </Button>

                            <List>
                                {bankNotesList.map((bankNote, index) => (
                                    <ListItem key={index}>
                                        <Typography>
                                            {bankNote.amount} nota
                                            {bankNote.amount > 1
                                                ? 's'
                                                : ''} de{' '}
                                            {FormatterService.currency(
                                                bankNote.value,
                                            )}
                                        </Typography>
                                    </ListItem>
                                ))}
                            </List>
                        </Stack>
                    </>
                )}

                {selectedTab === 1 && (
                    <>
                        <Typography>Histórico de Saques:</Typography>
                        <List>
                            {(user as ClientInterface).withdrawals.length ===
                                0 && (
                                <ListItem>
                                    <Typography>
                                        Nenhum saque realizado
                                    </Typography>
                                </ListItem>
                            )}
                            {(user as ClientInterface).withdrawals.map(
                                (withdrawal, index) => (
                                    <ListItem key={index}>
                                        <Typography>
                                            {FormatterService.date(
                                                withdrawal.date,
                                            )}
                                            {' - '}

                                            {FormatterService.currency(
                                                withdrawal.amount,
                                            )}
                                        </Typography>
                                    </ListItem>
                                ),
                            )}
                        </List>
                    </>
                )}
            </Paper>
        </div>
    );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            title: 'Banco',
        },
    };
};

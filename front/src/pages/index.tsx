import { Button, Paper, Stack, TextField } from '@mui/material';
import Head from 'next/head';

import { PageContainer } from '@partials/index/Index.styled';
import { useIndexPage } from '@partials/index/Index.hook';
// import { IndexPageLogic } from '@partials/index/Index.logic';
// import { IndexPageStore } from '@partials/index/Index.store';

export default function Home() {
    const { username, setUsername, errorMessage, login } = useIndexPage();
    return (
        <>
            <PageContainer>
                <Paper sx={{ maxWidth: '45rem', mx: 'auto', mt: 5 }}>
                    <Stack
                        spacing={2}
                        sx={{
                            p: 2,
                        }}
                    >
                        <TextField
                            label="Nome"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            error={!!errorMessage}
                            helperText={errorMessage}
                        />

                        <Button
                            variant="contained"
                            onClick={() => login(username)}
                        >
                            Entrar
                        </Button>
                    </Stack>
                </Paper>
            </PageContainer>
        </>
    );
}

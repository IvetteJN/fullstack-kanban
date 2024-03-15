import { useState, useEffect } from 'react';
import { Stack, Grid } from "@mui/material";

import AppLoader from '../../components/layout/AppLoader'
import useApp from '../../hooks/useApp'
import CreateBoardModal from "./CreateBoardModal";
import Topbar from "./Topbar";
import NoBoards from "./NoBoards";
import BoardCard from "./BoardCard";
import useStore from '../../store';

const BoardsScreen = () => {
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const { fetchBoards } = useApp()
    const { areBoardsFetched } = useStore;

    useEffect(() => {
        if (!areBoardsFetched) fetchBoards(setLoading);
        else setLoading(false)
    }, []);

    if (loading) return <AppLoader />;
    return (
        <>
            <Topbar openModal={() => setShowModal(true)} />
            {showModal && <CreateBoardModal closeModal={() => setShowModal(false)} />}
            {/* <NoBoards /> */}

            <Stack px={3} mt={5}>
                <Grid container spacing={4}>
                    <BoardCard />
                    <BoardCard />
                    <BoardCard />
                    <BoardCard />
                </Grid>
            </Stack>
        </>
    );
};

export default BoardsScreen;
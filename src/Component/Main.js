import * as React from 'react';
import classes from "./Main.module.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import TitleSharpIcon from '@mui/icons-material/TitleSharp';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Column } from '../Data/Column';
import { Rows } from '../Data/Rows';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { Modal } from '@mui/material';
import Trans from './Trans';



const Main = () => {
    const [cols, setCols] = useState([]);
    const [row, setRow] = useState([]);
    const [open, setOpen] = useState(null);

    useEffect(() => {
        setCols(Column);
        console.log(Column);

    }, []);
    useEffect(() => {
        setRow(Rows);

    }, []);

    const handleOpen = () => {
        setOpen(!open);
    };

    const handleClose = () => {
        setOpen(null);
    };

    return (
        <div>
            <div className={classes.vh15}>
                <div className={classes.text}>
                    <h1>Welcome Shakirat</h1>
                    <p>Upload your audio and Video to convert to text</p>
                </div>
                <div className={classes.text2}>
                    <Button type="submit" variant="contained" onClick={handleOpen} >
                        Transcrible file
                    </Button>
                </div>
            </div>
            <div className={classes.vh20}>
                <Grid item xs={24}>
                    <Grid container justifyContent="center" spacing={6}>
                        <Grid item>
                            <Card
                                className={classes.card}
                            >
                                <CardContent>
                                    <Avatar>
                                        <FolderOutlinedIcon className={classes.icon} />
                                    </Avatar>
                                    <Typography className={classes.sx} >100</Typography>
                                    <Typography sx={{ fontSize: 16 }}>Uploaded Files</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item>
                            <Card
                                className={classes.card}
                            >
                                <CardContent>
                                    <Avatar>
                                        <TitleSharpIcon className={classes.icon} />
                                    </Avatar>
                                    <Typography className={classes.sx} >50</Typography>
                                    <Typography sx={{ fontSize: 16 }}>Transcribled</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item>
                            <Card
                                className={classes.card}
                            >
                                <CardContent>
                                    <Avatar>
                                        <BookmarkBorderOutlinedIcon className={classes.icon} />
                                    </Avatar>
                                    <Typography className={classes.sx} >20</Typography>
                                    <Typography sx={{ fontSize: 16 }} >Saved</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.vh70}>
                <Box className={classes.box}>
                    <h2 className={classes.h2}>Recent Files</h2>
                    <DataGrid
                        rows={row}
                        columns={cols}
                        checkboxSelection
                    />
                </Box >
            </div>
            {
                open && (
                    <div >
                        <Modal open={true} className={classes.modal2} >
                            <Box
                                sx={{
                                    width: 800,
                                    height: 760,
                                    backgroundColor: 'white',
                                    borderRadius: 3,
                                    alignItems:'center'
                                }}
                            >
                                <Trans
                                    handleClose={handleClose}
                                />
                            </Box>
                        </Modal>
                    </div>
                )
            }
        </div>
    );
};

export default Main;
import React from 'react';
import Box from '@mui/material/Box';
import { TextField, Typography } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import classes from './Trans.module.css'
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import Button from '@mui/material/Button';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import Avatar from '@mui/material/Avatar';
import Checkbox from '@mui/material/Checkbox';


const Trans = ({ handleClose }) => {
    const [row, setRow] = useState([]);

    return (
        <div>
            <div className={classes.vh15}>
                <Typography sx={{ fontSize: 24, fontWeight: 'bold', float: 'left', padding: 4 }}>Transcrible File</Typography>
                <CloseOutlinedIcon onClick={handleClose} sx={{ float: 'right', fontSize: 30, color: 'black', marginTop: 4, marginRight: 2 }} />
            </div>
            <div className={classes.vh15}>
                <FormControl sx={{ width: 720, paddingLeft: 8 }}>
                    <Typography>Transcription Language</Typography>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={row}
                        onChange={(e) => setRow(e.target.value)}

                        input={<OutlinedInput label="Select a Language" />}
                    >
                    </Select>
                </FormControl>
            </div>
            <div>
                <Box
                    className={classes.box}
                    sx={{
                        width: 660, height: 200,
                    }}
                >
                    <FormControl sx={{
                        paddingLeft: 38,
                        paddingTop: 4
                    }}>
                        <Avatar sx={{ backgroundColor: 'lightblue' }}>
                            <CloudUploadOutlinedIcon sx={{ color: 'blue' }} />
                        </Avatar>
                    </FormControl>
                    <Typography sx={{ fontSize: 18, textAlign: 'center' }}>
                        <span
                            style={{
                                color: 'blue',
                            }}
                        >
                            Click to upload
                        </span>
                        {' or drag and drop'}
                    </Typography>
                    <Typography sx={{ fontSize: 14, textAlign: 'center', color: 'grey' }}>
                        The maximum file size is 1GB for audio and 10GB for videos
                    </Typography>
                    <Typography sx={{ fontSize: 14, textAlign: 'center', color: 'grey' }}>
                        Supported formats: mp3, mp4, wav, caf, aiff, avi, rmvb, flv, m4a, mov, wmv, wma
                    </Typography>
                </Box>
            </div>
            <div>
                <FormControl sx={{
                    width: 720,
                    paddingLeft: 8
                }}>
                    <Typography sx={{ paddingTop: 4 }}>
                        Import from Link
                    </Typography>
                    <TextField
                        required
                        id="outlined-required"
                        value=''
                        label="Paste a Drobpox, Google Drive or Youtube URL here"
                    />
                </FormControl>
            </div>
            <div>
                <FormControl sx={{
                    paddingTop: 4,
                    paddingLeft: 8
                }}>
                    <FormControlLabel control={<Checkbox />} label="Speaker Identification" />
                </FormControl>
            </div>
            <div>
                <FormControl sx={{
                    width: 720,
                    paddingTop: 4,
                    paddingLeft: 8
                }} >
                    <Button type="submit" variant="contained" sx={{ height: 59, fontSize: 20 }}>
                        Transcrible File
                    </Button>
                </FormControl>
            </div>
        </div>
    );
};

export default Trans;
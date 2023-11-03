import classes from "./App.module.css";
import Stack from '@mui/material/Stack';
import Main from "./Component/Main";
import CircleNotificationsOutlinedIcon from '@mui/icons-material/CircleNotificationsOutlined';
import Avatar from '@mui/material/Avatar';
import Cards from "./Component/Cards";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function App() {
  return (
    <div>
      <div className={classes.column1}>
        <div className={classes.card}>
          <div className={classes.cardheader}>
            <div className={classes.firm}>abc firm</div>
            <div className={classes.index}><HomeOutlinedIcon sx={{fontSize:35, float:'left'}} />Home</div>
            <div className={classes.index}><FolderOutlinedIcon sx={{fontSize:35, float:'left'}} />All Files</div>
            <div className={classes.index}><BookmarkBorderOutlinedIcon sx={{fontSize:35, float:'left'}} /> Saved</div>
            <div className={classes.index}><ShareOutlinedIcon  sx={{fontSize:35, float:'left'}} />Integration</div>
            <div className={classes.index}><DeleteOutlineRoundedIcon sx={{fontSize:35, float:'left'}}/>Trash</div>
            <div className={classes.index}><SettingsIcon sx={{fontSize:35, float:'left'}}/> Setting</div>
            <div className={classes.index}><HelpOutlineOutlinedIcon sx={{fontSize:35, float:'left'}} />Help and support</div>
            </div>
        </div>
        <div className={classes.card2}>
          <Cards />
        </div>
      </div>
      <div className={classes.column2}>
        <div className={classes.search}>
        
          <input type="text"
            value=''
            placeholder="Search Here..."
            className={classes.in}
          />
          <span className={classes.icon}><SearchOutlinedIcon sx={{color:'black', fontSize:30}}/></span>
        </div>
        <div className={classes.iconn}>
          <Stack direction="row" spacing={3} >
            <CircleNotificationsOutlinedIcon
              sx={{ fontSize: 45 }}
            />
            <Avatar>
              <img src='\imgonline-com-ua-resize-UDsmbMC2DjDy.jpg' alt='' style={{width:'100%', height:'100%'}}/>
            </Avatar>
          </Stack>
        </div>
      </div>
      <div className={classes.column2main}>
        <Main />
      </div>
    </div>
  );
};

export default App;

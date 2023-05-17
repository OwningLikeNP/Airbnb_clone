import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search"
import LanguageIcon from "@material-ui/icons/Language"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import {Avatar} from "@material-ui/core"
import {Link} from 'react-router-dom'
import { Popover, Typography } from "@material-ui/core"
import { Tooltip } from '@material-ui/core'


import {useNavigate} from 'react-router-dom'

function Header(){ 
    const [anchorEl, setAnchorEl] = React.useState(null);  //setting anchor value to show or hide popover
    const navigate = useNavigate(); //To navigate to another component

    //function to open popover for region selection when user clicks on search bar
    const handleClick = (event) => { 
      setAnchorEl(event.currentTarget);

    };
    
    //function to close the popeover when user clicks on a region and navigate to search page with params
    const regionClick = (region_name, region_id) => {
      setAnchorEl(null);
       navigate('/region', {
        state:{ 
          region_name: region_name,
          region_id: region_id
        },
      })
           
      }
      
      //function to close popover if user clicks elsewhere on the page
    const handleClose = () => {
      setAnchorEl(null);
    };

    //setting open and close functionality for popover
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    
  
    return (
    <div className='header'>
      <Link to='/'>
      
        <img //Airbnb logo in the header which will redirect to homepage on click
                    className="header__icon"
                    src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                    alt=""
                />
        
        </Link>
        
        {/* 
        Search bar which opens Popover with images of all 6 continents, which take you to the seach page of selected region on click
        Popover from Material UI is used for clean design of region selection 
        */}
        <div className='header__center'>
                <input className='searchbar'type="text" aria-describedby={id} variant="contained" onClick={handleClick}></input>
                  <Popover className='popOver'
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                  >
                   
                  <Typography className='typography' 
                  //First row of popover with images for 3 different contients
                  >
                  
                  <Tooltip title="Africa">
                    
                    <img src="https://as2.ftcdn.net/v2/jpg/00/69/68/61/1000_F_69686150_QHvjTrWKYXcsR6YcDbdRzZhOhMaHpiR5.jpg"
                    alt="Africa" onClick={() => {regionClick('Africa', 5)}} />
                    </Tooltip>
            
                    

                    <Tooltip title="North America">
                    <img src="https://as2.ftcdn.net/v2/jpg/01/16/62/75/1000_F_116627586_u4vfyHCcUXxZQyUZRSugAx5WMM30Mdx6.jpg"
                    alt="North America" onClick={() => {regionClick('North America', 1)}}/>
                    </Tooltip>

                    <Tooltip title="South America">
                    <img src="https://as2.ftcdn.net/v2/jpg/00/03/02/21/1000_F_3022177_LbpLNjld1k7VWFHnJpCDj7UV1uleW3.jpg"
                    alt="South America" onClick={() => {regionClick('South America', 2)}}/>
                    </Tooltip>

                  </Typography>
                  
                  <Typography className='typography' 
                  //Second row of popover with images for 3 different contients
                  >
                    <Tooltip title="Europe & Middle East">
                    <img src="https://as1.ftcdn.net/v2/jpg/03/25/11/50/1000_F_325115078_8sPCA5KOUQncoLqtKcPZBwqck2Foi9yg.jpg"
                    alt="Europe" onClick={() => {regionClick('Europe & Middle East', 3)}}/>
                    </Tooltip>
                    

                    <Tooltip title="Asia">
                    <img src="https://as2.ftcdn.net/v2/jpg/00/05/07/05/1000_F_5070591_uM0wrubhDnQRK92NzuR1Bz0m7dkLo0UY.jpg"
                    alt="Asia" onClick={() => {regionClick('Asia', 6)}}/>
                    </Tooltip>
                    
                    <Tooltip title="Australia & New Zealand">
                                        <img src="https://as1.ftcdn.net/v2/jpg/03/20/40/04/1000_F_320400470_d50RUkr66yej0v9KoWKVqCQuZNwPK2vn.jpg"
                    alt="Australia & New Zealand" onClick={() => {regionClick('Australia & New Zealand', 7)}}/>
                    </Tooltip>
                  </Typography>
                  </Popover>
                  <SearchIcon/>
        </div>

        <div className='header__right'>
            <p>Become a Host</p>
            <LanguageIcon />
            <ExpandMoreIcon />
            <Link to='/login'
            //Naviage to login page when click on avatar icon in the header
            > <Avatar /></Link>
        </div>
    </div>
   
  )
}

export default Header

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
    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate();

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);

    };
    
    const regionClick = (region_name, region_id) => {
      setAnchorEl(null);
       navigate('/region', {
        state:{ 
          region_name: region_name,
          region_id: region_id
        },
      })
           
      }
    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    
  
    return (
    <div className='header'>
      <Link to='/'>
      
        <img
                    className="header__icon"
                    src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                    alt=""
                />
        
        </Link>

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
                   
                  <Typography className='typography' >
                  
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
                  
                  <Typography className='typography' >
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
            <Link to='/login'> <Avatar /></Link>
        </div>
    </div>
   
  )
}

export default Header

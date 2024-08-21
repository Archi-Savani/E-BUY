import { Box, FormControl, Select, MenuItem, TextField, Button, InputAdornment, IconButton, Drawer, Container, Grid, Collapse, Typography, List, ListItem, ListItemText } from '@mui/material'
import React, { useState } from "react";
import { styled } from '@mui/system';
import "../../assets/css/index.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import CloseIcon from "@mui/icons-material/Close";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";



const FlagIcon = styled('span')({
    marginRight: '8px',
    width: '20px',
    height: '14px',
    display: 'inline-block',
    borderRadius: '2px',
    backgroundSize: 'cover',
});

const SearchBarContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    borderRadius: '70px',
    overflow: 'hidden',
    border: '1px solid #ccc',
    backgroundColor: "#fff",
    padding: "0 8px",
    height: "45px",
    width: "300px",
}));

const SearchInput = styled(TextField)({
    flexGrow: 1,
    '& .MuiOutlinedInput-root': {
        borderRadius: 0,
        '& input': {
            py: 0,
        },
    },
    '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
    },
});

const SearchButton = styled(Button)({
    backgroundColor: '#28a745', // Green background color
    color: '#fff',
    borderRadius: '70px',
    padding: '5px 24px',
    '&:hover': {
        backgroundColor: '#218838', // Darker green on hover
    },
});

const HeaderLine = () => {

    const [country, setCountry] = React.useState('IN');
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
    const [searchVisible, setSearchVisible] = useState(false);
    const [searchPlaceholder, setSearchPlaceholder] = useState("Search Products, Brands, or Anything");
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [openSubMenus, setOpenSubMenus] = useState({});


    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };


    const handleChange = (event) => {
        setCountry(event.target.value);
    };

    const toggleSearch = () => {
        setSearchVisible(!searchVisible);
    };
    const menuItems = [
        { text: "Top Offers" },
        { text: "Electronic" },
        { text: "Beauty" },
        { text: "Fashion" },
        { text: "Grocery" },
        { text: "Baby" },
        { text: "Furniture" },
        { text: "Accessories" },
        { text: "Stationary" },
        { text: "Handloom" },
        { text: "Books" },
        { text: "home & kitchen" },
        { text: "Travel" },
        { text: "Health" },
    ];

    const menus = [
        {
            text: "Trending", submenu: [
                { text: 'Best Sellers' },
                { text: 'New Release' },
                { text: 'Best Prize' },
                { text: 'Best Offer/Sale' },
                { text: 'Movers & Shakes' },]
        },
        {
            text: "Shop by Category", submenu: [{ text: 'Mobile & Computers' },
            { text: 'Men’s Fashion' },
            { text: 'Women’s Trends' },
            { text: 'Home, Kitchen' },
            { text: 'Beauty, Fitness' },
            { text: 'Health care' },
            { text: 'Grocery store' },
            { text: 'Kid’s store' },
            { text: 'Car, Motorbike' },
            { text: 'Books' },
            { text: 'Movies' },
            { text: 'Music, Video Games' },
            ]
        },
        {
            text: "Help & Setting", submenu: [
                { text: 'Your Account' },
                { text: 'Customer Service' },
                { text: 'Sign Out' },
            ]
        },
    ]


    return (
        <>
            {isMobile ? (
                <Box sx={{ backgroundColor: "#070707", width: "100%" }}>
                    <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} display={"flex"} justifyContent={"center"} >
                        <Grid item xs={9}>
                            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} sx={{ height: { sm: '60px', xs: "50px" } }}>
                                <Box display={"flex"} alignItems={"center"}>
                                    <IconButton
                                        edge="start"
                                        color="#fff"
                                        aria-label="menu"
                                        onClick={toggleDrawer}
                                    >
                                        <MenuIcon style={{ color: "#fff" }} />
                                    </IconButton>
                                    <Drawer anchor="left" sx={{ '& .MuiDrawer-paper': { width: '280px' } }} open={drawerOpen} onClose={toggleDrawer}>
                                        <Box display={"flex"} alignItems={"center"} backgroundColor={"#007BFF"} padding={"10px"}>
                                            <Box display={"flex"} alignItems={"center"} color={"#fff"}>
                                                <AccountCircleIcon style={{marginRight: "10px"}}/>
                                                <Box className="desc" fontWeight={700}>
                                                    Hello, JBS
                                                </Box>
                                            </Box>
                                            <IconButton
                                                edge="start"
                                                color="#fff"
                                                aria-label="menu"
                                                onClick={toggleDrawer}
                                                sx={{ position: "absolute", right: 16 }}
                                                display={"flex"}
                                            >
                                                <CloseIcon style={{ color: "#fff" }} />
                                            </IconButton>
                                        </Box>

                                        <Box>
                                            {menus.map((item, index) => (
                                                <>
                                                    <Box style={{ fontSize: "22px", fontWeight: 700, padding: "5px 20px" }} className='desc' >
                                                        <Box>{item.text}</Box>
                                                    </Box>
                                                    <Box  >
                                                        <Box component="div" >
                                                            {item.submenu?.length > 0 && (
                                                                item?.submenu?.map((subItem, subIndex) => (
                                                                    <Box
                                                                        key={subIndex}
                                                                        sx={{ padding: "4px 20px" }}
                                                                    >
                                                                        <ListItemText primary={subItem.text} />
                                                                    </Box>
                                                                ))
                                                            )
                                                            }
                                                        </Box>
                                                    </Box>

                                                </>
                                            ))}
                                        </Box>

                                    </Drawer>
                                    <Box sx={{ color: "#fff", fontSize: "18px", fontWeight: 800, whiteSpace: "nowrap",marginLeft: "10px" }} className="desc">E-BUY</Box>
                                </Box>

                                <Box display={"flex"} alignItems={"center"} >
                                    <FormControl
                                        variant="outlined"
                                        size="small"
                                        style={{
                                            backgroundColor: "#444444",
                                            borderRadius: "90px",
                                            padding: "0", // Remove padding
                                            width: '80px' // Adjust the width as per the desired size
                                        }}
                                    >
                                        <Select
                                            value={country}
                                            onChange={handleChange}
                                            displayEmpty
                                            renderValue={(value) => (
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <FlagIcon
                                                        style={{
                                                            backgroundImage: `url(https://flagcdn.com/in.svg)`,
                                                        }}
                                                    />
                                                    <span>{value}</span>
                                                </div>
                                            )}
                                        >
                                            <MenuItem value="IN">
                                                <FlagIcon
                                                    style={{
                                                        backgroundImage: `url(https://flagcdn.com/in.svg)`,
                                                    }}
                                                />
                                                IN
                                            </MenuItem>
                                            <MenuItem value="US">
                                                <FlagIcon
                                                    style={{
                                                        backgroundImage: `url(https://flagcdn.com/us.svg)`,
                                                    }}
                                                />
                                                US
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                    <Box sx={{ cursor: "pointer" }} display={"flex"} alignItems={"center"} onClick={toggleSearch}>
                                        <SearchIcon style={{ color: "#fff", fontSize: "20px" }} />
                                    </Box>
                                    {searchVisible && (
                                        <SearchBarContainer
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                position: "absolute",
                                                top: "8px",
                                                left: { xs: "10px", sm: "30%", md: "30%" },
                                                width: { xs: "150px", md: "300px" },
                                                backgroundColor: "#fff",
                                                padding: "10px",
                                                zIndex: 999,
                                                borderRadius: "20px",
                                                borderBottom: "2px solid #a89788",
                                            }}
                                        >
                                            <InputBase
                                                placeholder={searchPlaceholder}
                                                sx={{
                                                    borderRadius: "4px",
                                                    // padding: "4px 33px",
                                                    color: "#808080",
                                                    width: "200px",
                                                    fontSize: { xs: "16px", md: "20px" },
                                                }}
                                            />
                                        </SearchBarContainer>
                                    )}
                                    <Box sx={{ color: "#fff" }} className="desc" display={"flex"} marginLeft={{ md: "15px", xs: "10px" }}>
                                        <AccountCircleIcon fontSize={"22px"} />
                                    </Box>
                                    <Box sx={{ color: "#fff" }} className="desc" display={"flex"} marginLeft={{ md: "15px", xs: "10px" }}>
                                        <AppShortcutIcon fontSize={"22px"} />
                                    </Box>
                                    <Box sx={{ color: "#fff" }} className="desc" display={"flex"} marginLeft={{ md: "15px", xs: "10px" }}>
                                        <AddShoppingCartIcon fontSize={"22px"} />
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            ) : (
                <Box sx={{ backgroundColor: "#070707" }} >
                    <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} display={"flex"} justifyContent={"center"} >
                        <Grid item xs={9}>
                            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} sx={{ height: { sm: '60px', xs: "50px" } }}>
                                <Box sx={{ color: "#fff", fontSize: "25px", fontWeight: 800, whiteSpace: "nowrap" }} className="desc">E-BUY</Box>
                                <FormControl variant="outlined" size="small" style={{ backgroundColor: "#444444", borderRadius: "90px" }}>
                                    <Select
                                        value={country}
                                        onChange={handleChange}
                                        displayEmpty
                                        renderValue={(value) => (
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <FlagIcon
                                                    style={{
                                                        backgroundImage: `url(https://flagcdn.com/in.svg)`,
                                                    }}
                                                />
                                                <span>{value}</span>
                                            </div>
                                        )}
                                    >
                                        <MenuItem value="IN" >
                                            <FlagIcon
                                                style={{
                                                    backgroundImage: `url(https://flagcdn.com/in.svg)`,
                                                }}
                                            />
                                            IN
                                        </MenuItem>
                                        <MenuItem value="US">
                                            <FlagIcon
                                                style={{
                                                    backgroundImage: `url(https://flagcdn.com/us.svg)`,
                                                }}
                                            />
                                            US
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                                <SearchBarContainer >
                                    <SearchInput
                                        variant="outlined"
                                        placeholder="Search Products, Brands, or Anything"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    {/* You can add an icon here if needed */}
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                    <SearchButton variant="contained">
                                        Search
                                    </SearchButton>
                                </SearchBarContainer>
                                <Box display={"flex"}>
                                    <Box sx={{ color: "#fff" }} className="desc" display={"flex"} marginLeft={{ md: "15px", xs: "10px" }}>
                                        <AccountCircleIcon />
                                        <Box marginLeft={"10px"} fontSize={{ md: "16px", xs: "12px" }} whiteSpace={"nowrap"}>My Account</Box>
                                    </Box>
                                    <Box sx={{ color: "#fff" }} className="desc" display={"flex"} marginLeft={{ md: "15px", xs: "10px" }}>
                                        <AppShortcutIcon />
                                        <Box marginLeft={"10px"}>Wishlist</Box>
                                    </Box>
                                    <Box sx={{ color: "#fff" }} className="desc" display={"flex"} marginLeft={{ md: "15px", xs: "10px" }}>
                                        <AddShoppingCartIcon />
                                        <Box marginLeft={"10px"}>Cart</Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>

                </Box>
            )}



            {isMobile ? (
                <>

                </>
            ) : (
                <Box sx={{ backgroundColor: '#fff', height: "60px", boxShadow: "0px 0px 5px #c7c7c7", alignItems: "center" }}>
                    <Container maxWidth={"xl"}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "60px" }}>
                            <Box display={"flex"}>
                                {menuItems?.map((item) => {
                                    return (
                                        <Box sx={{ padding: "5px", fontWeight: 700, whiteSpace: "nowrap" }} className='desc'>{item.text}</Box>
                                    )
                                })}
                            </Box>
                            <Box sx={{ fontSize: "23px", color: "#007BFF", fontWeight: 700, whiteSpace: "nowrap" }} className="desc">
                                Today’s Deals
                            </Box>
                        </Box>
                    </Container>
                </Box>
            )}



        </>
    )
}

export default HeaderLine
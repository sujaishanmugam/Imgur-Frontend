import React, {useState} from "react";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import TextsmsIcon from '@material-ui/icons/Textsms';
import FaceIcon from '@material-ui/icons/Face';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import PostAddIcon from '@material-ui/icons/PostAdd';
import logo from './imgur-vector-logo.svg'
function Header(props) {
  const [input, setInput] = useState("")

  const onSearchSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(input);
    // console.log("this is the input", input)

  }
  return ( 
    <Wrapper className="header">
      <LogoWrapper>
        <IconButton>
          {/* <ImageIcon /> imgur */}
          <img src = {logo} hight= "32px" alt="logo"/>
        </IconButton>
      </LogoWrapper>
      <HomePageButton justify-content="center">
        <a href="/"><PostAddIcon/>New post</a>
      </HomePageButton>
      <FollowingButton>
        <a href="/">Following</a>
      </FollowingButton>
      <SearchWrapper>
        <SearchBarWrapper>
            <IconButton>
                <SearchIcon />
            </IconButton>
            <form>
                <input type="text" onChange={(e) => setInput(e.target.value)}/>
                <button type="submit" onClick={onSearchSubmit}></button>
            </form>
        </SearchBarWrapper>
      </SearchWrapper>
      <IconsWrapper>
        <IconButton>
            <NotificationsIcon />
        </IconButton>
        <IconButton>
            <TextsmsIcon />
        </IconButton>
        <IconButton>
            <FaceIcon />
        </IconButton>
        <IconButton>
            <KeyboardArrowDownIcon />
        </IconButton>
            </IconsWrapper>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 12px 4px 4px 16px;
  background-color: white;
  color: black;
`;

const LogoWrapper = styled.div`
  .MuiSvgIcon-root {
    color: #54b86e;
    font-size: 32px;
    cursor: pointer;
  }
  img {
    height: 150px;
  }
`;

const HomeButtons = styled.div`
  display: flex;
  height: 48px;
  min-width: 123px;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  cursor: pointer;
`;
const HomePageButton = styled(HomeButtons)`
  background-color: rgb(17, 17, 17);
  a {
    text-decoration: none;
    color: white;
    font-weight: 700;
  }
`;
const FollowingButton = styled(HomeButtons)`
  background-color: white;
  a {
    text-decoration: none;
    color: black;
    font-weight: 700;
  }
  :hover {
    background-color: #e1e1e1;
  }
`;

const SearchWrapper = styled.div`
    flex: 1;
`
const SearchBarWrapper = styled.div`
    background-color: #efefef;
    display: flex;
    height: 48px;
    width: 100%;
    border-radius: 50px;
    border: none;
    padding-left: 10px;

    form{
        display: flex;
        flex: 1;
    }
    form > input{
        background-color: transparent;
        border: none;
        width: 100%;
        margin-left: 5px;
        font-size: 16px;
    }
    form > button {
        display: none;

    }
    input: focus{
        outline: none;
    }

`
const IconsWrapper = styled.div``
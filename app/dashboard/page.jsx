import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import "./style.css"
import Image from 'next/image'
import logo from '../asset/icons8-boardcast-64 (1).png'
import Searchbar from '../components/searchbar/search'
import Postsearch from '../components/searchbar/postsearch'
import { Add, Collections } from '@mui/icons-material';
import Postcard from '../components/postcard/postcard'

const DashBoard = async () => {



  const userdata = [
    {
      avatar: <Avatar alt="Remy Sharp" src="https://avatars.githubusercontent.com/u/119755415?v=4"
        sx={{ width: 50, height: 50 }} />,
      name: "muzammil ali"
    },
    {
      avatar: <Avatar alt="Ahad " src="https://avatars.githubusercontent.com/u/119755415?v=4"
        sx={{ width: 50, height: 50 }} />,
      name: "Ahad"
    },
    {
      avatar: <Avatar alt="i" src="/static/images/avatar/1.jpg"
        sx={{ width: 50, height: 50 }} />,
      name: "Inzamam malik"
    },
    {
      avatar: <Avatar alt="a" src="/static/images/avatar/1.jpg"
        sx={{ width: 50, height: 50 }} />,
      name: "Anas"
    },
    {
      avatar: <Avatar alt="h" src="/static/images/avatar/1.jpg"
        sx={{ width: 50, height: 50 }} />,
      name: "hurara"
    },
    {
      avatar: <Avatar alt="d" src="/static/images/avatar/1.jpg"
        sx={{ width: 50, height: 50 }} />,
      name: "Daniyal"
    },
  ];




  return (
    <main >
      <div className="card">
        <div className="leftsection">

          <span className="alluser">
            <div className="logo">
              <Image src={logo} height={70} width={70} alt="logo" />
              PARLA
            </div>
            <Searchbar />

            {userdata.map((item, index) => (
              <div className="user" key={index}>
                <span className="avtar">
                  {item.avatar}
                </span>
                <span className="item">{item.name}</span>
              </div>
            ))}
          </span>
        </div>
        <div className="rightsection">
          <span className="postbar">
            <p>hey <b>{userdata[0].name} </b> want to post! </p>
            <span id='icon'>    <Add /> <Collections /> </span>
          </span>
          <span className="heading">
            <h1>posts</h1>
            <span>  <Postsearch /></span>
          </span>
          <span className="postcard">
            <Postcard />
          </span>


        </div>






        <div className="userinfo">
          <span className="crrunteuser">
            <p><Avatar alt="Remy Sharp" src="https://avatars.githubusercontent.com/u/119755415?v=4"
              sx={{ width: 100, height: 100 }} /></p><h3>Muzammil Ali</h3>
          </span>
        </div>

      </div>


    </main>
  )
}

export default DashBoard

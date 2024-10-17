"use client"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { client } from '../../lib/sanity'
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default async function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);




  // const sanityData = '*[_type == "MuzammilBlog"]'
  // const data = await client.fetch(sanityData)
  // console.log(data.name)
 

  



  const userdata = [
    {
      avatar: <Avatar alt="Remy Sharp" src="https://avatars.githubusercontent.com/u/119755415?v=4"
        sx={{ width: 50, height: 50 }} />,
      name: "muzammil ali",
      time: "5:30 pm",
      content: "HY this is fake content for cheacking code lmmmmmmmmmmmmmmmmmmmmmmmmmm",
      img: "https://www.aicarz.com/_next/image?url=https%3A%2F%2Fcars-images-data.s3.eu-west-2.amazonaws.com%2Fimages%2F14688089591%2FNkaMQZKv%2FNiVvdIUAWHNc%2F1.png&w=1920&q=75"
    },
    {
      avatar: <Avatar alt="Ahad " src="/static/images/avatar/1.jpg"
        sx={{ width: 50, height: 50 }} />,
      name: "Ahad",
      time: "5:30 pm",
      content: "HY this is fake content for cheacking code lmmmmmmmmmmmmmmmmmmmmmmmmmm",
      img: "https://www.aicarz.com/_next/image?url=https%3A%2F%2Fcars-images-data.s3.eu-west-2.amazonaws.com%2Fimages%2F14688089591%2FNkaMQZKv%2FNiVvdIUAWHNc%2F1.png&w=1920&q=75"

    },
    {
      avatar: <Avatar alt="i" src="/static/images/avatar/1.jpg"
        sx={{ width: 50, height: 50 }} />,
      name: "Inzamam malik",

      time: "5:30 pm",
      content: "HY this is fake content for cheacking code lmmmmmmmmmmmmmmmmmmmmmmmmmm",
      img: "https://www.aicarz.com/_next/image?url=https%3A%2F%2Fcars-images-data.s3.eu-west-2.amazonaws.com%2Fimages%2F14688089591%2FNkaMQZKv%2FNiVvdIUAWHNc%2F1.png&w=1920&q=75"

    },
    {
      avatar: <Avatar alt="a" src="/static/images/avatar/1.jpg"
        sx={{ width: 50, height: 50 }} />,
      name: "Anas",

      time: "5:30 pm",
      content: "HY this is fake content for cheacking code lmmmmmmmmmmmmmmmmmmmmmmmmmm",
      img: "https://www.aicarz.com/_next/image?url=https%3A%2F%2Fcars-images-data.s3.eu-west-2.amazonaws.com%2Fimages%2F14688089591%2FNkaMQZKv%2FNiVvdIUAWHNc%2F1.png&w=1920&q=75"

    },
    {
      avatar: <Avatar alt="h" src="/static/images/avatar/1.jpg"
        sx={{ width: 50, height: 50 }} />,
      name: "hurara",

      time: "5:30 pm",
      content: "HY this is fake content for cheacking code lmmmmmmmmmmmmmmmmmmmmmmmmmm",
      img: "https://www.aicarz.com/_next/image?url=https%3A%2F%2Fcars-images-data.s3.eu-west-2.amazonaws.com%2Fimages%2F14688089591%2FNkaMQZKv%2FNiVvdIUAWHNc%2F1.png&w=1920&q=75"

    },
    {
      avatar: <Avatar alt="d" src="/static/images/avatar/1.jpg"
        sx={{ width: 50, height: 50 }} />,
      name: "Daniyal",

      time: "5:30 pm",
      content: "HY this is fake content for cheacking code lmmmmmmmmmmmmmmmmmmmmmmmmmm",
      img: "https://www.aicarz.com/_next/image?url=https%3A%2F%2Fcars-images-data.s3.eu-west-2.amazonaws.com%2Fimages%2F14688089591%2FNkaMQZKv%2FNiVvdIUAWHNc%2F1.png&w=1920&q=75"

    },
  ];





  return (
    <div>
      {userdata.map((user, index) => (
        <Card key={index} sx={{ marginBottom: '2rem' }}>
          <CardHeader
            avatar={user.avatar}
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={user.name || ""}
            subheader={`${user.time || ""} `}
          />
          <CardMedia
            component="img"
            height="auto"
            image={user.img}
            alt="User Image"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {user.content}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share" style={{ color: '#FF5733' }}>
              <ShareIcon />
            </IconButton>
            {/* <ExpandMoreIcon
              onClick={handleExpandClick}
              aria-label="show more"
            /> */}
          </CardActions>
        </Card>
      ))}


    {/* sanity data */}
      {/* {data.map((user, index) => (
        <Card key={index} sx={{ marginBottom: '2rem' }}>

          {user.name}


        </Card>
      ))} */}
    </div>
  );
};


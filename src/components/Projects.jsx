import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import '../css/Projects.css';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



const Projects = () => {



  return <div className='parent1 expand-projects'>
    <div className='d-flex'>
      <Card className='ms-2 me-4 blur-projects1' sx={{ maxWidth: 400 }}>
        <CardHeader
          title="Three Game Series"
        />
        <div className='d-flex'>
          <div className='inline'>
            <a href="/images/projects/three_game_series/1.png" target="_blank">
              <CardMedia
                className='hover'
                component="img"
                height="100"
                alt="Paella dish"
                image="/images/projects/three_game_series/1.png"
              /></a>
          </div>
          <div className='inline'>
            <a href="/images/projects/three_game_series/2.png" target="_blank">
              <CardMedia
                component="img"
                height="100"
                alt="Paella dish"
                image="/images/projects/three_game_series/2.png"
              /></a>
          </div>
          <div className='inline'>
            <a href="/images/projects/three_game_series/3.png" target="_blank">
              <CardMedia
                component="img"
                height="100"
                alt="Paella dish"
                image="/images/projects/three_game_series/3.png"
              /></a>
          </div>
        </div>
        <div className='d-flex justify-content-center'>
          <div className='inline'>
            <a href="/images/projects/three_game_series/4.png" target="_blank">
              <CardMedia
                component="img"
                height="100"
                alt="Paella dish"
                image="/images/projects/three_game_series/4.png"
              /></a>
          </div>
          <div className='inline'>
            <a href="/images/projects/three_game_series/5.png" target="_blank">
              <CardMedia
                component="img"
                height="100"
                alt="Paella dish"
                image="/images/projects/three_game_series/5.png"
              /></a>
          </div>
        </div>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This is a Full stack web MERN application who the user can add, delete and take attendance for players to a 3 game series.
            <ul>
              <li className='mt-3'>Front-end: React, Bootstrap, Axios</li>
              <li>Back-end: Express, MongoDB, Mongoose</li>
              <li>Languages: JavaScript, HTML, CSS</li>
              <a href="https://github.com/KonstantinosMazarakis/Team_Manager"><img className='crdimg' height="50" src="/images/languages/github.png" alt="github" /></a>
            </ul>
          </Typography>
        </CardContent>
      </Card>

      <Card className='blur-projects2' sx={{ maxWidth: 400 }}>
        <CardHeader
          title="Best stocks for trading"
        />
       <div className='d-flex justify-content-center'>
       <a href="/images/projects/watchlist/1.png" target="_blank"><CardMedia
          component="img"
          height="294"
          alt="Paella dish"
          image="/images/projects/watchlist/1.png"
        /></a>
               <a href="/images/projects/watchlist/2.png" target="_blank"><CardMedia
          component="img"
          height="294"
          alt="Paella dish"
          image="/images/projects/watchlist/2.png"
        /></a>
       </div>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This is a console based APP for Data analysis who can scan the entire Stock market based on specific dates and calculating the Coefficient of variation, the ROI and provides a table with the top 20 stocks
            <ul>
              <li className='mt-3'>Front-end: -</li>
              <li>Back-end: Python, Pandas</li>
              <li>Languages: Python</li>
              <a href="https://github.com/KonstantinosMazarakis/watchlist"><img className='crdimg' height="50" src="/images/languages/github.png" alt="github" /></a>
            </ul>
          </Typography>
        </CardContent>
      </Card>
    </div>

    <div className='d-flex'>
      <Card className='ms-2 me-4 mt-4 blur-projects3' sx={{ maxWidth: 400 }}>
        <CardHeader
          title="Pokedex"
        />
        <a href="https://konstantinosmazarakis.github.io/pokedex/" target="_blank"><CardMedia
          component="img"
          height="294"
          alt="Paella dish"
          image="/images/projects/pokedex/1.png"
        /></a>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Your own personal Pokedex!! Just type the name of your personal Pokemon and you will see its stats. Api based Project
            <ul>
              <li className='mt-3'>Front-end: HTML ,CSS, JavaScript, NES.CSS </li>
              <li>Back-end: -</li>
              <li>Languages: HTML ,CSS, JavaScript</li>
              <div>
                <a href="https://github.com/KonstantinosMazarakis/pokedex"><img className='crdimg' height="50" src="/images/languages/github.png" alt="github" /></a>
                <a href="https://konstantinosmazarakis.github.io/pokedex/"><img className='crdimg' height="50" src="/images/www.png" alt="www" /></a>
              </div>
            </ul>
          </Typography>
        </CardContent>
      </Card>

      <Card className='ms-2 me-4 mt-4 blur-projects3' sx={{ maxWidth: 400 }}>
        <CardHeader
          title="Dealership"
        />
        <div className='d-flex'>
          <div className='inline'>
            <a href="/images/projects/car_dealer/1.png" target="_blank">
              <CardMedia
                className='hover'
                component="img"
                height="100"
                alt="Paella dish"
                image="/images/projects/car_dealer/1.png"
              /></a>
          </div>
          <div className='inline'>
            <a href="/images/projects/car_dealer/2.png" target="_blank">
              <CardMedia
                component="img"
                height="100"
                alt="Paella dish"
                image="/images/projects/car_dealer/2.png"
              /></a>
          </div>
          <div className='inline'>
            <a href="/images/projects/car_dealer/3.png" target="_blank">
              <CardMedia
                component="img"
                height="100"
                alt="Paella dish"
                image="/images/projects/car_dealer/3.png"
              /></a>
          </div>
        </div>
        <div className='d-flex'>
          <div className='inline'>
            <a href="/images/projects/car_dealer/4.png" target="_blank">
              <CardMedia
                component="img"
                height="100"
                alt="Paella dish"
                image="/images/projects/car_dealer/4.png"
              /></a>
          </div>
          <div className='inline'>
            <a href="/images/projects/car_dealer/5.png" target="_blank">
              <CardMedia
                component="img"
                height="100"
                alt="Paella dish"
                image="/images/projects/car_dealer/5.png"
              /></a>
          </div>
          <div className='inline'>
            <a href="/images/projects/car_dealer/6.png" target="_blank">
              <CardMedia
                component="img"
                height="100"
                alt="Paella dish"
                image="/images/projects/car_dealer/6.png"
              /></a>
          </div>
        </div>
        <div className='d-flex justify-content-center'>
          <div className='inline'>
            <a href="/images/projects/car_dealer/7.png" target="_blank">
              <CardMedia
                component="img"
                height="100"
                alt="Paella dish"
                image="/images/projects/car_dealer/7.png"
              /></a>
          </div>
          <div className='inline'>
            <a href="/images/projects/car_dealer/8.png" target="_blank">
              <CardMedia
                component="img"
                height="100"
                alt="Paella dish"
                image="/images/projects/car_dealer/8.png"
              /></a>
          </div>
        </div>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Looking to sell your vehicle? The Dealership is here to help you, create an account and add, edit, delete a post with your vehicle and purchuse cars from other users!!!
            <ul>
              <li className='mt-3'>Front-end: HTML, CSS, Bootstrap, Jinja </li>
              <li>Back-end: Python, Flask, MYSQL</li>
              <li>Languages: HTML ,CSS, Python</li>
              <div>
                <a href="https://github.com/KonstantinosMazarakis/exam"><img className='crdimg' height="50" src="/images/languages/github.png" alt="github" /></a>
              </div>
            </ul>
          </Typography>
        </CardContent>
      </Card>
    </div>


    <Card className='ms-2 me-4 mt-4 blur-projects3' sx={{ maxWidth: 400 }}>
        <CardHeader
          title="Meet Up Center"
        />
        <div className='d-flex'>
          <div className='inline'>
            <a href="/images/projects/meetUp/1.png" target="_blank">
              <CardMedia
                className='hover'
                component="img"
                height="100"
                alt="Paella dish"
                image="/images/projects/meetUp/1.png"
              /></a>
          </div>
          <div className='inline'>
            <a href="/images/projects/meetUp/2.png" target="_blank">
              <CardMedia
                component="img"
                height="100"
                alt="Paella dish"
                image="/images/projects/meetUp/2.png"
              /></a>
          </div>
          <div className='inline'>
            <a href="/images/projects/meetUp/3.png" target="_blank">
              <CardMedia
                component="img"
                height="100"
                alt="Paella dish"
                image="/images/projects/meetUp/3.png"
              /></a>
          </div>
        </div>
        <div className='d-flex justify-content-center'>
          <div className='inline'>
            <a href="/images/projects/meetUp/4.png" target="_blank">
              <CardMedia
                component="img"
                height="100"
                alt="Paella dish"
                image="/images/projects/meetUp/4.png"
              /></a>
          </div>
          <div className='inline'>
            <a href="/images/projects/meetUp/5.png" target="_blank">
              <CardMedia
                component="img"
                height="100"
                alt="Paella dish"
                image="/images/projects/meetUp/5.png"
              /></a>
          </div>
        </div>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          Schedule your Meet Up. Create an account and add, delete a Meet Up, let other users join.
            <ul>
              <li className='mt-3'>Front-end: HTML, CSS, Bootstrap</li>
              <li>Back-end: C#, Entity, MYSQL</li>
              <li>Languages: HTML ,CSS, C#, NET.</li>
              <div>
                <a href="https://github.com/KonstantinosMazarakis/beltExam"><img className='crdimg' height="50" src="/images/languages/github.png" alt="github" /></a>
              </div>
            </ul>
          </Typography>
        </CardContent>
      </Card>
  </div>


}
export default Projects

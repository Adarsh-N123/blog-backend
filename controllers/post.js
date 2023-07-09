// import { json } from "express";
// import pool from "../db.js";



// export const addposts = (req,res)=>{
//     const q = "INSERT INTO posts(`title`,`description`,`img`,`category`,`video`) VALUES (?)"

//     const values = [
//         "third","third post"," ","cloud",""
//     ];

//     // const values = [
//     //     req.body.title,
//     //     req.body.description,
//     //     req.body.imgurl,
//     //     req.body.category
       
//     // ]

//     pool.query(q,[values],(err,data)=>{
//         if(err) res.status(500).json(err);

//        else res.json("POST CREATED!");
        
//     })
// }
// export const getposts = (req,res)=>{
//     const q = req.query.cat
//     ? "SELECT * FROM posts WHERE category =?"
//     : "SELECT * FROM posts";

//   pool.query(q, [req.query.cat], (err, data) => {
//     if (err) return res.status(500).send(err);

//     else res.json(data);
//   });
// }
// export const getonepost = (req,res)=>{
//     const q = "SELECT * FROM posts WHERE idposts = ?";
//     console.log(req.params.id);
//     pool.query(q,[req.params.id],(err,data)=>{
//         if(err) {
//             return res.send(err);
//          }
         
//          else{
//             return res.status(200).json(data);
//          }
//     })
// }

// export const updateposts = (req,res)=>{
//     const q = "UPDATE posts SET `title`=?,`description`=?,`img`=? WHERE idposts = ? ";
//     const values = ["second update","update",""];
//     // const values = [
//     //     req.body.title,
//     //     req.body.description,
//     //     req.body.imgurl
       
//     // ]

//     pool.query(q,[...values , req.params.id],(err,data)=>{
//         if(err) return res.json(err);
//         // else res.json("updated post"+req.params.id);
//         else return res.json("updated");
//     })
// }
// export const delposts = (req,res)=>{
//     const q = "DELETE FROM POSTS WHERE idposts = ?";
//     pool.query(q,[req.params.id],(err,data)=>{
//         if(err) {
//             return res.send(err);
//          }
         
//          else{
//             res.json("post deleted");
//          }
//     })
// }

const { json } = require("express");
const pool = require("../db.js");

exports.addposts = (req, res) => {
       const { title, description, img, category, video } = req.body;
  const q = 'INSERT INTO posts("title", "description", "img", "category", "video") VALUES ($1, $2, $3, $4, $5)';

  const values = [
    title, description, img, category, video
  ];

  pool.query(q, values, (err, data) => {
    if (err) res.status(500).json(err);
    else res.json("POST CREATED!");
  });
};

exports.getposts = (req, res) => {
  const q = req.query.cat
    ? 'SELECT * FROM posts WHERE "category" = $1'
    : 'SELECT * FROM posts';

    if(req.query.cat){
        const q = 'SELECT * FROM posts WHERE "category" = $1';
        pool.query(q, [req.query.cat], (err, data) => {
            if (err) return res.status(500).send(err);
            else res.json(data.rows);
          });
    }
    else{
        const q = 'SELECT * FROM posts';
        pool.query(q,(err, data) => {
            if (err) return res.status(500).send(err);
            else res.json(data.rows);
          });
    }

  
};

exports.getonepost = (req, res) => {
  const q = 'SELECT * FROM posts WHERE "idposts" = $1';

  const postId = req.params.id;

  pool.query(q, [postId], (err, data) => {
    if (err) {
      return res.send(err);
    } else {
      return res.status(200).json(data);
    }
  });
};
exports.getadmins = (req, res) =>{
       res.status(200).json(["adarshkln5@gmail.com","atharva.bhanage.20042@iitgoa.ac.in"]);
};

exports.updateposts = (req, res) => {
       const { title, description, img } = req.body;
  const q = 'UPDATE posts SET "title" = $1, "description" = $2, "img" = $3,"date" = CURRENT_DATE,"time"=CURRENT_TIME WHERE "idposts" = $4';

  const values = [title,description,img, req.params.id];
  
  pool.query(q, values, (err, data) => {
    if (err) return res.json(err);
    else return res.json("updated");
  });
};

exports.delposts = (req, res) => {
  const q = 'DELETE FROM "posts" WHERE "idposts" = $1';
  
  const postId = req.params.id;

  pool.query(q, [postId], (err, data) => {
    if (err) {
      return res.send(err);
    } else {
      res.json("post deleted");
    }
  });
};



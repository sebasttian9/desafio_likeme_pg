import {getPosts, createPost} from '../models/postsModel.js'

const getHola = (req,res) => {
    console.log('prueba')

    res.status(200).json({ hola : 'hola'});
}

const getAllPosts = async(req, res) =>  {

    try {

        const posts = await getPosts();
        res.status(200).json({ posts : posts});
        
    } catch (error) {
        res.status(500).json({ error : "Error al procesar la solicitud"});
        console.error("Error al procesar la solicitus:",error)
    }
}


const addPost = async(req,res) => {

    try {

        const {titulo, url,descripcion} = req.body;
        const newPost = await createPost(titulo,url,descripcion);
        res.status(201).json({ post: newPost });
        
    } catch (error) {
        
        res.status(500).json({ error : "Error al procesar la solicitud"});
        console.error("Error al procesar la solicitus:",error)
    }
}


export { getHola, getAllPosts, addPost };
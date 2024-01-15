import {getPosts, createPost, updatePostLike, destroyPost} from '../models/postsModel.js'

const getHola = (req,res) => {
    console.log('prueba')

    res.status(200).json({ hola : 'hola'});
}

const getAllPosts = async(req, res) =>  {

    try {

        const posts = await getPosts();
        res.status(200).json(posts);
        
    } catch (error) {
        res.status(500).json({ error : "Error al procesar la solicitud"});
        console.error("Error al procesar la solicitus:",error)
    }
}


const addPost = async(req,res) => {

    try {

        console.log(req.body)
        const {titulo, img,descripcion} = req.body;
        const newPost = await createPost(titulo,img,descripcion);
        res.status(201).json(newPost);
        
    } catch (error) {
        
        res.status(500).json({ error : "Error al procesar la solicitud"});
        console.error("Error al procesar la solicitus:",error)
    }
}


const updatePost = async (req,res) => {

    try {

        const { id } = req.params;
        const updatePost = await updatePostLike(id);
        res.status(201).json(updatePost);

    } catch (error) {
        
        res.status(500).json({ error : "Error al procesar la solicitud"});
        console.error("Error al procesar la solicitus:",error)
    }
}


const deletePost = async (req, res) => {


    try {

        const { id } = req.params;
        const deletePost = await destroyPost(id);
        if (deletePost === 0) {
            return res.status(404).json({ message: "No existe el registro" });
          }
          res.status(200).json({ message: "registro eliminado con exito" });
        
    } catch (error) {
        
        res.status(500).json({ error : "Error al procesar la solicitud"});
        console.error("Error al procesar la solicitus:",error)
    }
}


export { getHola, getAllPosts, addPost, updatePost, deletePost };
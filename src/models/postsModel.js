import pool from '../../db/connectionDB.js';

const getPosts = async () => {

    const query = { text: "select * from posts"};

    try {
        const response = await pool.query(query);
        // console.log(response.rows)
        return response.rows;
    } catch (error) {
        console.log(error);
    }

}


const createPost = async (titulo,img,descripcion) => {

    const query  = {
        text: "INSERT INTO posts (titulo,img,descripcion,likes) values ($1,$2,$3,$4) returning *",
        values: [titulo, img, descripcion, 0]
    };

    try {
        const response = await pool.query(query);
        return response.rows[0];
    } catch (error) {
        console.log(error)
    }
}


const updatePostLike = async (id) => {

    const SQLquery = {
      text: "UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *",
      values: [id],
    };
      const response = await pool.query(SQLquery);
      return response.rows[0];
  }


  const destroyPost = async (id) => {
    const SQLquery = {
      text: "DELETE FROM posts WHERE id = $1",
      values: [id],
    };
      const response = await pool.query(SQLquery);
      return response.rowCount;
  };


export { getPosts, createPost, updatePostLike, destroyPost}
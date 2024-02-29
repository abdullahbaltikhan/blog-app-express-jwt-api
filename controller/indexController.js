import blog from "../model/blog";


class blogController{

    static createBlog = async (req, res, next) => {
      // console.log(req.userId);
        // console.log(req.body);
        const {title, description} = req.body;  
        // blog create
        const newblog = new blog({
          title: title,
          description: description,
          userId: req.userId
        })
      
        try {

            await newblog.save();
            res.status(201).json(newblog);

        } catch (error) {
          console.log(error)
        }

      }
      
    static updateBlog = async(req, res, next) => {
        const id = req.params.id;
        const {title, description} = req.body;
        const newblog = {
          title:title,
          description:description,
          userId:req.userId
        }
        try {
          const editedblog = await blog.findByIdAndUpdate(id, newblog, {new : true});
          res.status(200).json(editedblog);          

        } catch (error) {
          console.log(error)
        }

      }
    static deleteBlog = async(req, res, next) => {
      const id = req.params.id;
        try {

          const delblog = await blog.findByIdAndDelete(id);
          res.status(202).json(delblog);
        } catch (error) {
          console.log(error)
        }

      }
      
    static userBlog = async(req, res, next) => {
        
      try {

        const userData = await blog.find({userId : req.userId});
        res.json({userData:userData});        
        } catch (error) {
          console.log(error);
        }

      }

}

export default blogController
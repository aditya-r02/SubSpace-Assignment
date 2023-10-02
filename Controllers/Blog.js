const axios = require('axios')
const lodash = require('lodash')

const fetchBlogs = async () =>{
    const options = {
        method: 'GET',
        headers: {
          'x-hasura-admin-secret': '32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6'
        }
      };

    //console.log("hello")

    let response = await axios.get("https://intent-kit-16.hasura.app/api/rest/blogs", options);

    const result = (response)?response.data.blogs:null;
    
    return result;
}

const cachedBlogs = lodash.memoize(fetchBlogs);

exports.getBlogs = async(req, res) =>{

    try{
        const result = await cachedBlogs();
        //console.log(result);

        if (!result){
            return res.status(404).json({
                success: false,
                message:"Blogs not found"
            })
        }

        const blogLength = lodash.size(result);
        const blogWithLongestTitle = lodash.maxBy(result, (obj)=>obj.title.length).title;

        const blogsContainingWordPrivacy = lodash.filter(result, obj=>obj.title.toLowerCase().includes('privacy')).length;

        const uniqueBlogs = lodash.uniqBy(result, 'title')
        const uniqueTitles = uniqueBlogs.map(obj=>obj.title)

        return res.status(200).json({
            success: true,
            message:"Blogs fetched successfully",
            blogLength,
            blogWithLongestTitle,
            blogsContainingWordPrivacy,
            uniqueTitles
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Some error occured"
        })
    }
}

exports.searchBlogs = async(req, res) =>{
    try{
        const query = req.query.query.toLowerCase();
        //console.log(query);

        const result = await cachedBlogs();
        //console.log(result);

        if (!result){
            return res.status(404).json({
                success: false,
                message:"Blogs not found"
            })
        }

        const blogs = lodash.filter(result, obj=>obj.title.toLowerCase().includes(query));
        const titles = blogs.map(obj=>obj.title);

        return res.status(200).json({
            success: true,
            message:"Blogs fetched successfully",
            titles
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success: false,
            message:"Some Error occured during search"
        })
    }
}
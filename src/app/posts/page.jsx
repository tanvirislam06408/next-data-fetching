
//  const getPost=async()=>{
//         const res=await fetch('https://jsonplaceholder.typicode.com/posts');
//         return res.json();

//     }




// const getPost = async () => {
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//         return res.json();
//     }
//     catch(err){
//         throw new Error("failed to fetch post data")
//     }

//     }


const getPost = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!res.ok) {
        throw new Error('failed to fetch post data')
    }
    return res.json();

}



const PostPage = async () => {
    const data = await getPost()
    console.log(data);

    return (
        <div>
            <h1>The post length is {data.length}</h1>
        </div>
    );
};

export default PostPage;
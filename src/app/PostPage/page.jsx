

const PostPage = async() => {
    const res=await fetch('https://jsonplaceholder.typicode.com/posts');
    const data=await res.json();
    return (
        <div>
            <h1>The post length is {data.length}</h1>
        </div>
    );
};

export default PostPage;
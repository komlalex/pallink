import useSWR from "swr";

function Posts() {
   
    const {data, err, isLoading} = useSWR("/posts");

    if (err) return <div>{err.message}</div>;
    if (isLoading) return <div>Loading...</div>;

  return (
    <div>
        {
            data.message.map( (post) => {
                return <div key = {`post-${post._id}`}>{post.text}</div>
            })
        }
    </div>
  )
}

export default Posts
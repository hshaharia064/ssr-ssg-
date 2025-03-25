

export default async function Page(){
const data = await fetch('https://api.vercel.app/blog' , {next : {revalidate: 3600}})
const posts = await data.json()
  return(
    <div>
      {posts.map((post)=>(
        <li key={post.id}> {post.title}</li>

      ))}
    </div>

  )
}
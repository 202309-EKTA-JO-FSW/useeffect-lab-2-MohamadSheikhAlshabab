export default function UserCard({data}) {
  
  return (
    <div className="user-card">
      <div>
        <img style={{margin:'2rem'}} src={data.avatar_url} alt="avatar" />
      </div>
      <div>
        <h5> Name: <a href={data.html_url}>{data.name}</a></h5>

        <p> Username: <a href={data.html_url}>{data.login}</a></p>
      </div>
    </div>
  );
}

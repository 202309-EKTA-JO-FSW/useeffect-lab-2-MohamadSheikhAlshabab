import { useEffect, useState } from "react";
import Form from "../Components/Form/Form";
import UserCard from "../Components/UserCard/UserCard";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [username, setUserName] = useState("MohamadSheikhAlshabab");

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  }, [username]);
  console.log({ username });
  console.log(data);

  if (isLoading) return <p>Loading...</p>;
  const isError = () => {
    if(data.message === 'Not Found'){
      return <h2>{data.message}</h2>
    } 
  }
  return (
    <>
      {isError}
      <div className="card">
        <Form username={username} setUserName={setUserName} />
        <UserCard data={data} />
      </div>
    </>
  );
}

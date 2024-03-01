import UserCard from "../../components/UserCard";

async function Page() {
  const userData = await getServerSideProps();
  console.log(userData);
  return (
    <div>
      <h1>server-side-fetching</h1>
      {userData && <UserCard userData={userData} />}
    </div>
  );
}

export default Page;

async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
}
